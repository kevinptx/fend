const postData = async (url = "", data = {}) => {
    console.log('Analyzing', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        console.log('Data Received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { postData }