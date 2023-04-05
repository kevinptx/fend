async function handleSubmit(event) {
    event.preventDefault();

    console.log("::: Form Submitted :::")

    let urlInput = document.getElementById('url').value

    if (Client.isUrlValid(urlInput)) {
        //Reference: https://knowledge.udacity.com/questions/641239 & https://knowledge.udacity.com/questions/642781
        Client.postData('http://localhost:8080/clientdataUrl', { url: urlInput })
            .then(function (result) {
                Client.updateUI(result, {
                    score_tag: document.getElementById('score_tag'),
                    agreement: document.getElementById('agreement'),
                    subjectivity: document.getElementById('subjectivity'),
                    confidence: document.getElementById('confidence'),
                    irony: document.getElementById('irony')
                });
            });
    } else {
        alert("URL provided is invalid.");
    }
}

// const postData = async (url = "", data = {}) => {
//     console.log('Analyzing', data);
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     });

//     try {
//         const newData = await response.json();
//         console.log('Data Received:', newData)
//         return newData;
//     } catch (error) {
//         console.log('error', error);
//     }
// };

export { handleSubmit }