//Reference: https://knowledge.udacity.com/questions/386759
function isUrlValid(inputURL) {
    console.log("::: Running urlChecker :::", inputURL);
    //Check for URL validity using regex:
    const regex = inputURL.match(/(http(s)?:\/\/)?(www\.)?[-a-zA-Z0-9_@:%.\+~#=]{2,256}(\.[a-zA-Z]{2,15}){1,2}(\/[-a-zA-Z0-9_@:%.\+~#?&//=]*)?|(\d{1,3}\.){3}\d{1,3}/g);
    if (regex.test(inputURL)) {
        return true;
    } else {
        return false;
    }
}

export { isUrlValid }
