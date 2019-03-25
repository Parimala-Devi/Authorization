(function() {
    var config = {
        apiKey: "AIzaSyC1fDrigFOjX74FsKoyP90Hyy_GhFl3_Sw",
        authDomain: "my-pro-19edf.firebaseapp.com",
        databaseURL: "https://my-pro-19edf.firebaseio.com",
        projectId: "my-pro-19edf",
        storageBucket: "my-pro-19edf.appspot.com",
        messagingSenderId: "580888109391"
    };
    firebase.initializeApp(config);

    /*var firebase = require('firebase');
    var firebaseui = require('firebaseui');*/

    var txtEmail = document.getElementById("txtEmail");
    var txtPassword = document.getElementById("txtPassword");

}());



function putLog() {
    var btnLogin = document.getElementById("btnLogin");
    if (btnLogin) {
        btnLogin.addEventListener('click', Login, false);
        console.log(btnLogin);
    }
}

function putSign() {
    var btnSignUp = document.getElementById("btnSignUp");
    if (btnSignUp) {
        btnSignUp.addEventListener('click', Signup, false);
    }
}


// btnLogin.addEventListener('click', e => {
function Login(e) {
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
}


// btnSignUp.addEventListener('click', e => {
function Signup(el) {
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
    console.log(email);

    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(el.message));
}

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

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        var b = document.querySelector(".btn-btn-action-hide");

        b.setAttribute("class", "btn-btn-action");
        window.location.href = "career.html";
        $(".log-hide").css("display", "none");
        $(".logout-hide").css("display", "block");
        //btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        var b = document.querySelector(".btn-btn-action");

        b.setAttribute("class", "btn-btn-action-hide");
        $(".log-hide").css("display", "block");
        $(".logout-hide").css("display", "none");
        window.location.href = "login.html"
            // btnLogout.classList.add('hide');
    }
});