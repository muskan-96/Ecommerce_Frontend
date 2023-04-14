// jquery for header-foooter  for dynamically loading
$(function(){
    $("#header").load("header.html")
    $("#footer").load("footer.html")
})
// login function for login purpose
function login(){
    if (document.getElementById("uid").value === "admin@12345" && document.getElementById("password").value === "admin12345"){
        alert("Login Success");
        window.location.href=("index.html");

    }else{
        alert("Incorrect user id and password");

    }
    return false;
    
}