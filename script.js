const loginBtn = document.querySelector(".loginBtn");
const email = document.querySelector("#email");
const password = document.querySelector(".password");
const eye = document.querySelector(".eye");

loginBtn.addEventListener("click", () => {
        window.location.href = "/dashboard.html";
    
});

eye.addEventListener("click", () => {
    if(password.type === "password"){
        password.type = "text";
        eye.style.color = "#b8ea85";
    } else {
        password.type = "password";
        eye.style.color = "white"
    }
});