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

$(document).ready(function() {
    firebase.auth().signOut();
});
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('not logged in');
        window.location.href = "home.html";
        //btnLogout.classList.add('hide');
    }
});