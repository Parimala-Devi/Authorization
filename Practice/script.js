//const cors = require('cors')({ origin: true });
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1fDrigFOjX74FsKoyP90Hyy_GhFl3_Sw",
    authDomain: "my-pro-19edf.firebaseapp.com",
    databaseURL: "https://my-pro-19edf.firebaseio.com",
    projectId: "my-pro-19edf",
    storageBucket: "my-pro-19edf.appspot.com",
    messagingSenderId: "580888109391"
};
firebase.initializeApp(config);

var storage = firebase.storage();

$(document).ready(function() {
    $(".home").hover(function() {
        $(".home-drop").css("display", "block");
    });
    $(".home-drop").hover(function() {
        $(".home-drop").css("display", "block");
    });
    $(".home-drop").mouseleave(function() {
        $(".home-drop").css("display", "none");
    });
    $(".about").hover(function() {
        $(".about-drop").css({ "display": "block", "left": "650px" });
    });
    $(".about-drop").hover(function() {
        $(".about-drop").css("display", "block");
    });
    $(".about-drop").mouseleave(function() {
        $(".about-drop").css("display", "none");
    });
    $(".product").hover(function() {
        $(".product-drop").css({ "display": "block", "right": "400px", "bottom": "378px" });
    });
    $(".product-drop").hover(function() {
        $(".product-drop").css("display", "block");
    });
    $(".product-drop").mouseleave(function() {
        $(".product-drop").css("display", "none");
    });
    $(".career").hover(function() {
        $(".career-drop").css({ "display": "block", "right": "350px", "bottom": "465px" });
    });
    $(".career-drop").hover(function() {
        $(".career-drop").css("display", "block");
    });
    $(".career-drop").mouseleave(function() {
        $(".career-drop").css("display", "none");
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            //  var b = document.querySelector("button");

            //b.setAttribute("name", "helloButton");
            $(".career").attr("href", "career.html");
            $(".log-hide").css("display", "none");
            $(".logout-hide").css("display", "block");
            // window.location.href = "career.html";
            //  btnLogout.classList.remove('hide');
        } else {
            console.log('not logged in');
            $(".career").attr("href", "login.html");
            $(".log-hide").css("display", "block");
            $(".logout-hide").css("display", "none");
            //  window.location.href = "login.html";
            //btnLogout.classList.add('hide');
        }
    });
});

var storageRef = storage.ref();

var objRef = storageRef.child('files/business.html');


objRef.getDownloadURL().then((url) => {
    console.log(url);
    $(document).ready(function() {
        $("#example").load(url);
    });
});

function putOut() {
    var btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener('click', logout, false);
    }
}


// btnLogout.addEventListener('click', e => {
function logout(em) {
    firebase.auth().signOut();
}