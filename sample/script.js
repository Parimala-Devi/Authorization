var d = new Date();
document.getElementById("demo").innerHTML = d.toString();

function myFunc(check1) {
    var letters = /^[0-9]+$/;
    if (check1.value.match(letters)) {
        alert('ok');
        document.form1.check.focus();
        return true;
    } else {
        alert('Please input integers only');
        return false;
    }

}