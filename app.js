let form = document.getElementById("form");
let emailError = document.querySelector(".error");
let emailInput = document.querySelector("input:nth-child(2)");
let success = document.querySelector(".dark_background");
let successEmail = document.querySelector(".success_email");

console.log(emailInput);
form.addEventListener("submit",(event)=>{
    let emailString = document.getElementById("email").value;
    event.preventDefault();

    // Regular expression for a valid email address
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!regex.test(emailString)){
        emailError.animate({
            opacity: "1",
            transform: `translateX(0px)`,
            },
            {
            duration: 800,
            fill: "forwards",
            easing: "ease"
        });
        emailInput.classList.add("error");
    }else{
        emailError.animate({
            opacity: "0",
            transform: `translateX(-6px)`,
            },
            {
            duration: 800,
            fill: "forwards",
            easing: "ease"
        });
        emailInput.classList.remove("error");
        success.style.display = "flex";
        successEmail.innerHTML = emailString;
}

let button = document.querySelector("button");

button.onclick = ()=>{
    success.style.display = "none";
}

});

