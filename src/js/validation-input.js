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
                this.infoMail.classList.add("right");
                this.infoMail.innerHTML = `Votre adresse e-mail est valide`;

            } else {
                console.log("votre email n'est pas valide");
                this.infoMail.classList.add("wrong");
                this.infoMail.innerHTML = `Votre adresse e-mail n'est pas valide`;
            }
        })
    }

    vadidatePassword(){
        this.password.addEventListener("input", () => {

            if(regex.passwordLength.test(this.password.value) &&
               regex.digitPresence.test(this.password.value) &&
               regex.lowcasePresence.test(this.password.value) &&
               regex.uppercasePresence.test(this.password.value)
            ){
                console.log("ok");
                this.infoPwd.classList.add("right");
                this.infoPwd.innerHTML = `Votre mot de passe est valide`;

            } else {
                console.log("Votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères");
                this.infoPwd.classList.add("wrong");
                this.infoPwd.innerHTML = `Votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères`;
            }
        })
    }

}