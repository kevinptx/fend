import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { isUrlValid } from './js/urlChecker'
import { updateUI } from './js/updateUI'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);
console.log(handleSubmit);
console.log(isUrlValid);

alert("I EXIST")
console.log("CHANGE!!");

export {
    handleSubmit,
    checkForName,
    isUrlValid,
    updateUI
}


window.addEventListener("DOMContentLoaded", (e) => {
    // get reference to the form elemet
    const form = document.getElementById("form");
    // Add submit event listener on this form
    form.addEventListener("submit", handleSubmit);
});
