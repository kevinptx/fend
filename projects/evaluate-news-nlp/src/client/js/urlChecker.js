function isUrlValid(inputURL) {
    console.log("::: Running urlChecker :::", inputURL);
    // Check if inputURL is not a string or is null or undefined
    if (typeof inputURL !== 'string' || inputURL === null || inputURL === undefined) {
        throw new Error("Input URL is not valid.");
    }

    // Check for URL validity using regex:
    const regex = inputURL.match(/(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9_@:%.\+~#=]{2,256}(\.[a-zA-Z]{2,15}){1,2}(\/[-a-zA-Z0-9_@:%.\+~#?&//=]*)?|(\d{1,3}\.){3}\d{1,3}/g);
    if (regex !== null && regex.length > 0) {
        return true;
    } else {
        return false;
    }
}

export { isUrlValid }


