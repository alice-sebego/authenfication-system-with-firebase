/**
 * Revome an element of DOM
 * @param {HTMLElement} element 
 */
export const removeElement = (element) => {
    
    setTimeout(() => {
        element.remove();
    }, 4500);

}