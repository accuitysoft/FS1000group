function login() {
    console.log("hi");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "123") {
        window.location = "admin.html"; // Redirecting to other page.


    }
    else {
        document.getElementById("loginError").innerHTML = "You have entered an incorrect username and/or password";
        document.getElementById("username").value = '';
        document.getElementById("password").value = '';
    }
}