let container=document.getElementById("container")
let btnRegister=document.getElementById("register")
let btnLogin = document.getElementById("login")


btnRegister.addEventListener("click", () => {
    container.classList.add("active")
})

btnLogin.addEventListener("click", () => {
    container.classList.remove("active")
})