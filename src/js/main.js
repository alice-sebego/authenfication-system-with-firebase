import _ from 'lodash';
import Validation from './validation-input.js';
import Navigation from './navigation.js';
import * as util from './utils.js';
import {contentMain} from './article-content';
import {auth} from './firebaseconfig.js';

// ---- Elements of DOM ---- //

// Navigation
const $navigationBar = document.querySelector("nav > button");
const $navigationUl = document.querySelector("nav > ul");
const $subscription = document.querySelector("#subscription");
const $connection = document.querySelector("#connection");
const $disconnection = document.querySelector("#disconnection");
const $h2 = document.querySelector("h2");
// Forms elements
const $h3 = document.querySelector("#forms > h3");
const $subscribe = document.querySelector("#subscribe");
const $connect = document.querySelector("#connect");
const $picture = document.querySelector("#picture");
// Forms inputs
const $fieldEmailsub = document.querySelector("#fieldEmailsub");
const $fieldPwdSub = document.querySelector("#fieldPwdSub");
const $emailSubscription = document.querySelector("#emailSubscription");
const $pwdSubscription = document.querySelector("#pwdSubscription");
const $infoMailSub = document.querySelector("#infoMailSub");
const $infoPwdSub = document.querySelector("#infoPwdSub");

const $fieldEmailConnect = document.querySelector("#fieldEmailConnect");
const $fieldPwdConnect = document.querySelector("#fieldPwdConnect");
const $emailConnection = document.querySelector("#emailConnection");
const $pwdConnection = document.querySelector("#pwdConnection");
const $infoMailConx = document.querySelector("#infoMailConx");
const $infoPwdConx = document.querySelector("#infoPwdConx");

// Manage Content of main
const $main = document.querySelector("main");
$main.innerHTML = contentMain.forUserDisconnected;
const $readMore = document.querySelector("main > input[type='button']");

// Listening subscription and connection buttons
const NavApp = new Navigation($subscription, $connection, $readMore, $subscribe, $connect, $picture);
NavApp.subscriptionClick();
NavApp.connectionClick();
NavApp.readMoreClick();

// Validate input's user who is subscribing
const ValidateSubscription = new Validation($fieldEmailsub, $fieldPwdSub, $emailSubscription, $pwdSubscription, $infoMailSub, $infoPwdSub);
ValidateSubscription.validateEmail();
ValidateSubscription.validatePassword();

// Validate input's user who is connecting
const ValidateConnection = new Validation($fieldEmailConnect, $fieldPwdConnect, $emailConnection, $pwdConnection, $infoMailConx, $infoPwdConx);
ValidateConnection.validateEmail();

// Submit Subscription's form
$subscribe.addEventListener("submit", e => {

    e.preventDefault();

    if(ValidateSubscription.isEmailvalid && ValidateSubscription.isPasswordValid){

        auth.createUserWithEmailAndPassword($emailSubscription.value, $pwdSubscription.value).
        then( cred => {
            console.log(cred);
            console.log(cred.user);
            $subscribe.reset();
    
            $subscribe.classList.replace("redisplay", "notdisplayed");
            $picture.classList.replace("redisplay", "notdisplayed");
            
            $h2.innerHTML = `Connectez-vous pour accéder à ce contenu`;
            $h3.innerHTML = `Vous êtes inscrit(e)`;
        });


    } else {

        util.handleMsgError($subscribe, "Votre adresse email et/ou mot de passe sont invalides");

    }

});

// Submit Connection's form
$connect.addEventListener("submit", e => {

    e.preventDefault();

    if(ValidateConnection.isEmailvalid){

        auth.signInWithEmailAndPassword($emailConnection.value, $pwdConnection.value).
        then( cred => {
            console.log("Vous êtes connecté(e) "+ cred.user);
            $connect.reset();
            $connect.classList.replace("redisplay", "notdisplayed");
            $picture.classList.replace("redisplay", "notdisplayed");
            
            $h2.innerHTML = `Vous avez accès à ce contenu`;
            $h3.innerHTML = `Vous êtes connecté(e)`;
            $main.innerHTML = contentMain.forUserLogged;
        }, T => {
            util.handleMsgError($connect, `Le mot de passe est invalide ou l'utilisateur n'a pas de mot de passe. \n --- \n ${T.message}`);
        });

    } else {

        util.handleMsgError($connect, "Votre adresse email est incorrect");

    }

});

// Manage Disconnection's user
$disconnection.addEventListener("click", () => {
    
    auth.signOut().
    then(() => {
        $h2.innerHTML = `Connectez-vous pour accéder à ce contenu`;
        $h3.innerHTML = `Vous êtes déconnecté(e)`;
        $main.innerHTML = contentMain.forUserDisconnected;
    });

});

// Handle behavior of navigation when window's width < 465 px 
if(window.innerWidth < 465){ $navigationUl.classList.add("notdisplayed") }

$navigationBar.addEventListener("click", () => $navigationUl.classList.toggle("notdisplayed"));