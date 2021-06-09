/**
 * Revome an element of DOM
 * @param {HTMLElement} element 
 */
export const removeElement = (element) => {
    
    setTimeout(() => {
        element.remove();
    }, 9500);

}

/**
 * Handle a message of error in order to inform user
 * @param {HTMLFormElement} formElement 
 * @param {string} message 
 */
export const handleMsgError = (formElement, message) =>{

    const msgError = document.createElement("p");
    msgError.classList.add("error");
    msgError.innerHTML = message;
    formElement.appendChild(msgError);
    removeElement(msgError);
}