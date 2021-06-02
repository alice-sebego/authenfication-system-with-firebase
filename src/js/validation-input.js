import * as regex from './regex.js';

export default class Validation{
    
    constructor(fieldsetEmail, fieldsetPwd, email, password, infoMail, infoPwd){

        this.fieldsetEmail = fieldsetEmail;
        this.fieldsetPwd = fieldsetPwd;
        this.email = email;
        this.password = password;
        this.infoMail = infoMail;
        this.infoPwd = infoPwd;

    }

    validateEmail(){

        this.email.addEventListener("input", () =>{

            if(regex.email.test(this.email.value)){
                console.log("ok");
                this.infoMail.style.color = "green"
                this.infoMail.innerHTML = `Votre adresse e-mail est valide`;

            } else {
                console.log("votre email n'est pas valide");
                this.infoMail.style.color = "red"
                this.infoMail.innerHTML = `Votre adresse e-mail n'est pas valide`;
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
                console.log("ok");
                this.infoPwd.style.color = "green";
                this.infoPwd.innerHTML = `Votre mot de passe est valide`;

            } else {
                console.log("Votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères");
                this.infoPwd.style.color = "red";
                this.infoPwd.innerHTML = `Votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères`;
            }
        })
    }

}