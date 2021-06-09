/**
 * Manage event's click on subscription and connection buttons
 * @class Navigation
 * @param {HTMLButtonElement} subscriptionBtn
 * @param {HTMLButtonElement} connectionBtn
 * @param {HTMLInputElement} readMoreBtn
 * @param {HTMLFormElement} subscriptionForm
 * @param {HTMLFormElement} connectionForm
 * @param {HTMLPictureElement} picture
 */
export default class Navigation{
    
    constructor(subscriptionBtns, connectionBtn, readMoreBtn, subscriptionForm, connectionForm, picture){
        
        this.subscriptionBtns = subscriptionBtns;
        this.connectionBtn = connectionBtn;
        this.readMoreBtn = readMoreBtn;
        this.subscriptionForm = subscriptionForm;
        this.connectionForm = connectionForm;
        this.picture = picture;

    }

    subscriptionClick(){
        
        for(let btn of this.subscriptionBtns){

            btn.addEventListener("click", () => {
    
                if(this.connectionForm.classList.contains("redisplay")){
                    this.connectionForm.classList.replace("redisplay", "notdisplayed");
                }
                 
                this.subscriptionForm.classList.replace("notdisplayed", "redisplay");
                this.picture.classList.replace("notdisplayed", "redisplay");
             
            });
        }
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

    readMoreClick(){
        this.readMoreBtn.addEventListener("click", () => {

            if(this.subscriptionForm.classList.contains("redisplay")){
                this.subscriptionForm.classList.replace("redisplay", "notdisplayed");
            }
        
            this.connectionForm.classList.replace("notdisplayed", "redisplay");
            this.picture.classList.replace("notdisplayed", "redisplay");
        
        });
    }

}