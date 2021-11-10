

function returnname() {
    var x = document.getElementById("name-input");
    var name = "";
    var i;
    for (i = 0; i < x.length; i++) {
        name += x.elements[i].value;
    }
    document.getElementById("personal-greeting").innerText = "Hello " + name + "!!!";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';
    localStorage.setItem("welcome-name", name);
}

function passName() {
    document.getElementById("personal-greeting").innerText = "Hi I'll pass! :P";
    document.getElementById("welcome1").style.display = 'none';
    document.getElementById("welcome2").style.display = 'flex';

}

function thankname() {
    var name = localStorage.getItem("welcome-name");
    if (name && name.length > 0) {
        document.getElementById("thank-name").innerText = "Thank you, " + name + "!!!";
    }
}

function prefillName() {
    var name = localStorage.getItem("welcome-name");
    if (name && name.length > 0) {
        document.getElementById("contact-name").value = name;
    }
}