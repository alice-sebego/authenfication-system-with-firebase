import * as regex from './regex.js';

export default class Validation {
    
    isEmailValid = false;
    isPasswordValid = false;

    constructor(fieldsetEmail, fieldsetPwd, email, password, infoMail, infoPwd, isEmailValid, isPasswordValid){

        this.fieldsetEmail = fieldsetEmail;
        this.fieldsetPwd = fieldsetPwd;
        this.email = email;
        this.password = password;
        this.infoMail = infoMail;
        this.infoPwd = infoPwd;
        this.isEmailValid = isEmailValid;
        this.isPasswordValid = isPasswordValid;

    }

    validateEmail(){

        this.email.addEventListener("input", () =>{

            if(regex.email.test(this.email.value)){
                
                this.infoMail.style.color = "green"
                this.infoMail.innerHTML = `Votre adresse e-mail est valide`;
                this.isEmailValid = true;
            } else {
                
                this.infoMail.style.color = "red"
                this.infoMail.innerHTML = `Votre adresse e-mail n'est pas valide`;
                this.isEmailValid = false;
            }
        })
        
    }

    validatePassword(){
        this.password.addEventListener("input", () => {

            if(regex.passwordLength.test(this.password.value) &&
               regex.digitPresence.test(this.password.value) &&
               regex.lowcasePresence.test(this.password.value) &&
               regex.uppercasePresence.test(this.password.value)
            ){
                
                this.infoPwd.style.color = "green";
                this.infoPwd.innerHTML = `Votre mot de passe est valide`;
                this.isPasswordValid = true;

            } else {
               
                this.infoPwd.style.color = "red";
                this.infoPwd.innerHTML = `Votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères`;
                this.isPasswordValid = false;
            }
        })
    }

}