import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { isUrlValid } from './js/urlChecker'
import { updateUI } from './js/updateUI'
import { postData } from './js/postData'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

console.log(checkForName);
console.log(handleSubmit);
console.log(isUrlValid);
console.log(postData);

// alert("I EXIST")
// console.log("CHANGE!!");

export {
    handleSubmit,
    checkForName,
    isUrlValid,
    updateUI,
    postData
}


