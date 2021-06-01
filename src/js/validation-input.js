import * as regex from './regex.js';

export default class Validation{
    
    constructor(fieldsetEmail, fiedlsetPwd, email, password){
        this.fieldsetEmail = fieldsetEmail;
        this.fiedlsetPwd = fiedlsetPwd;
        this.email = email;
        this.password = password;
    }

    validateEmail(){
        this.email.addEventListener("input", ()=>{
            if(regex.email.test(this.email.value)){
                console.log("ok");    
            } else {
                console.log("votre email n'est pas valide");
            }
        })
    }

    vadidatePassword(){
        this.password.addEventListener("input", ()=>{
            if(regex.passwordLength.test(this.password.value) &&
               regex.digitPresence.test(this.password.value) &&
               regex.lowcasePresence.test(this.password.value) &&
               regex.uppercasePresence.test(this.password.value)
            ){
                console.log("ok");    
            } else {
                console.log("votre mdp doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et avoir 8 caractères");
            }
        })
    }
}