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

var candidateRef = firebase.database().ref('candidates');
var storage = firebase.storage();

//var e = document.getElementById('career-form');
//if (e) {
//   e.addEventListener('submit', applyJob, false);
//}
$(document).ready(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
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
});

function applyJob() {
    //preventDefault();

    var name = getInputVal('name');
    var contact = getInputVal('phone');
    var mail = getInputVal('mail');
    var degree = getInputVal('degree');
    var exp = getInputVal('exp');
    var role = getInputVal('role');

    saveCandidate(name, contact, mail, degree, exp, role);

    document.querySelector('.alert').getElementsByClassName.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').getElementsByClassName.display = 'none';
    }, 3000);

    putFile();

    document.getElementById("career-form").reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveCandidate(name, contact, mail, degree, exp, role) {
    var newCandidateRef = candidateRef.push();
    newCandidateRef.set({
        name: name,
        contact: contact,
        email: mail,
        degree: degree,
        experience: exp,
        role: role
    });
}



//var progress = document.getElementById('uploadProgress');
//var button = document.getElementById('uploadButton');

//var e = document.getElementById('career-form');
function putFile() {
    var progress = document.getElementById('uploadProgress');
    var button = document.getElementById('uploadButton');

    if (button) {
        button.addEventListener('change', Uploading, false);
    }
}

//button.addEventListener('change', function(e) {*/
function Uploading(e) {
    console.log("entering");
    var file = e.target.files[0];
    var storageRef = storage.ref('candidates/' + file.name);
    var uploadTask = storageRef.put(file);
    console.log(uploadTask);
    uploadTask.on('state_changed', loadUpload, errUpload, completeUpload);

    function loadUpload(data) {
        var percent = (data.bytesTransferred / data.totalBytes) * 100;
        progress.value = percent;
    }

    function errUpload(err) {
        console.log('error');
        console.log(err);
    }

    function completeUpload(data) {
        console.log('success');
        console.log(data);
    }
}

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        $(".career").attr("href", "career.html");
        $(".log-hide").css("display", "none");
        $(".logout-hide").css("display", "block");
        //btnLogout.classList.remove('hide');
    } else {
        console.log('not logged in');
        $(".career").attr("href", "login.html");
        $(".log-hide").css("display", "block");
        $(".logout-hide").css("display", "none");
        // btnLogout.classList.add('hide');
    }
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