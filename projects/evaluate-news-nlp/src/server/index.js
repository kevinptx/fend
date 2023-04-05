const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

// API Info

// Base URL
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';

// API Key
const apiKey = process.env.API_KEY;

// Route for NLP API call
// Reference: https://knowledge.udacity.com/questions/641239 & https://knowledge.udacity.com/questions/642781
app.post('/clientdataUrl', async (req, res) => {
    const urlInput = req.body.url;
    console.log(`User entered URL: ${urlInput}`);
    try {
        const projectData = await fetchDataFromAPI(urlInput);
        res.send(projectData);
    } catch (error) {
        console.log('Error occurred', error);
        res.status(500).send({ error: error.message });
    }
});

// Separate function to fetch data from the Meaning Cloud API
const fetchDataFromAPI = async (urlInput) => {
    const apiURL = `${baseURL}?key=${apiKey}&url=${urlInput}&lang=en`;
    try {
        const response = await fetch(apiURL);
        const sentimentData = await response.json();
        console.log("Logging sentiment data", sentimentData);
        return {
            score_tag: sentimentData.score_tag,
            agreement: sentimentData.agreement,
            subjectivity: sentimentData.subjectivity,
            confidence: sentimentData.confidence,
            irony: sentimentData.irony
        };
    } catch (error) {
        console.log('Error occurred', error);
        throw error;
    }
};


app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
    //res.sendFile(path.resolve('src/dist/views/index.html'));
    //res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    //res.sendFile(path.resolve('src/client/views/index.html'));
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () { // starts the server
    console.log('Server listening on port 8080!')
});

// Test route
app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

console.log(`Your API key is ${process.env.API_KEY}`);