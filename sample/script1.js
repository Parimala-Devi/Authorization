var repeater;

function a() {

    var spn = document.createElement("span");
    var node = document.createTextNode(Math.floor(Math.random() * 10));
    spn.appendChild(node);

    var element = document.getElementsByClassName('boxed');
    element.appendChild(spn); //getting an error
    console.log(Math.floor(Math.random() * 10));
}