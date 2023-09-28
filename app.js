var validCredentials = {
    "Will": "1234",
    "1": "1234",
    "1": "1234"
};

function alertbutton() {
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");

    if (isValid(username, password)) {
        alert("Welcome to My Wonderful Website, " + username + "!");
        playSuccessSound(); 
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function isValid(username, password) {
    return validCredentials.hasOwnProperty(username) && validCredentials[username] === password;
}

function playSuccessSound() {
    var sound = document.getElementById("successSound");
    sound.play();
}


