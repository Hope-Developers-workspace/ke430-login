const loginForm = document.querySelector("form");
const passWord = document.querySelector(".password");
const userName = document.querySelector(".username");
const errorMsg = document.querySelector("#error");
errorMsg.style.color = 'red';


const user = "ke430@gmail.com";
const pass = "123456789";


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

 if(passWord.value === pass && userName.value === user){
        window.location="https://hope-developers-workspace.github.io/ke43-admin-main/"; 
    }
    
    else{    
        errorMsg.textContent = "Invalid Password or username";
    }
});








