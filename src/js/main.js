import * as regex from './regex';

// Elements of DOM
const $subscription = document.querySelector("#subscription");
const $connection = document.querySelector("#connection");
const $disconnection = document.querySelector("#disconnection");
const $h2 = document.querySelector("h2");
const $subscribe = document.querySelector("#subscribe");
const $connect = document.querySelector("#connect");
const $picture = document.querySelector("#picture");

$subscription.addEventListener("click", () => {

    if($connect.classList.contains("redisplay")){
        $connect.classList.replace("redisplay", "notdisplayed");
        $subscribe.classList.replace("notdisplayed", "redisplay");
        $picture.classList.replace("notdisplayed", "redisplay");
    } else {
        $subscribe.classList.replace("notdisplayed", "redisplay");
        $picture.classList.replace("notdisplayed", "redisplay");
    }

});

$connection.addEventListener("click", () => {

    if($subscribe.classList.contains("redisplay")){
        $subscribe.classList.replace("redisplay", "notdisplayed");
        $connect.classList.replace("notdisplayed", "redisplay");
        $picture.classList.replace("notdisplayed", "redisplay");
    } else {
        $connect.classList.replace("notdisplayed", "redisplay");
        $picture.classList.replace("notdisplayed", "redisplay");
    }

});