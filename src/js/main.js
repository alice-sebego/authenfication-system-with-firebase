import Validation from './validation-input.js';

///// Elements of DOM
const $subscription = document.querySelector("#subscription");
const $connection = document.querySelector("#connection");
const $disconnection = document.querySelector("#disconnection");
const $h2 = document.querySelector("h2");
const $subscribe = document.querySelector("#subscribe");
const $connect = document.querySelector("#connect");
const $picture = document.querySelector("#picture");
// Forms elements
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


// Listening all navigation's buttons
$subscription.addEventListener("click", () => {

    if($connect.classList.contains("redisplay")){
        $connect.classList.replace("redisplay", "notdisplayed");
    }
     
    $subscribe.classList.replace("notdisplayed", "redisplay");
    $picture.classList.replace("notdisplayed", "redisplay");
 
});

$connection.addEventListener("click", () => {

    if($subscribe.classList.contains("redisplay")){
        $subscribe.classList.replace("redisplay", "notdisplayed");
    }

    $connect.classList.replace("notdisplayed", "redisplay");
    $picture.classList.replace("notdisplayed", "redisplay");
    
});

// Validate input's user who is subscribing
const validateSubscription = new Validation($fieldEmailsub, $fieldPwdSub, $emailSubscription, $pwdSubscription, $infoMailSub, $infoPwdSub);
validateSubscription.validateEmail();
validateSubscription.validatePassword();

// Validate input's user who is connecting
const validateConnection = new Validation($fieldEmailConnect, $fieldPwdConnect, $emailConnection, $pwdConnection, $infoMailConx, $infoPwdConx);
validateConnection.validateEmail();
validateConnection.validatePassword();