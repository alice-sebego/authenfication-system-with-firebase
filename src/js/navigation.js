/**
 * Manage event's click on subscription and connection buttons
 * @class Navigation
 * @param {HTMLButtonElement} subscriptionBtn
 * @param {HTMLButtonElement} connectionBtn
 * @param {HTMLFormElement} subscriptionForm
 * @param {HTMLFormElement} connectionForm
 * @param {HTMLPictureElement} picture
 */
export default class Navigation{
    
    constructor(subscriptionBtn, connectionBtn, subscriptionForm, connectionForm, picture){
        
        this.subscriptionBtn = subscriptionBtn;
        this.connectionBtn = connectionBtn;
        this.subscriptionForm = subscriptionForm;
        this.connectionForm = connectionForm;
        this.picture = picture;

    }

    subscriptionClick(){
        this.subscriptionBtn.addEventListener("click", () => {

            if(this.connectionForm.classList.contains("redisplay")){
                this.connectionForm.classList.replace("redisplay", "notdisplayed");
            }
             
            this.subscriptionForm.classList.replace("notdisplayed", "redisplay");
            this.picture.classList.replace("notdisplayed", "redisplay");
         
        });
    }

    connectionClick(){
        this.connectionBtn.addEventListener("click", () => {

            if(this.subscriptionForm.classList.contains("redisplay")){
                this.subscriptionForm.classList.replace("redisplay", "notdisplayed");
            }
        
            this.connectionForm.classList.replace("notdisplayed", "redisplay");
            this.picture.classList.replace("notdisplayed", "redisplay");
            
        });
    }

}