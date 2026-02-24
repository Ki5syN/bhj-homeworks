document.addEventListener("DOMContentLoaded", ()=> {
    const numUser  = localStorage.getItem("user")
    if(numUser) {
        change(numUser)
    }
})

function change (numUser) {
    document.getElementById("signin").classList.remove("signin_active")
    document.getElementById("welcome").classList.add("welcome_active")
    document.getElementById("user_id").textContent = numUser 
}

const form = document.getElementById("signin__form");

form.addEventListener("submit", event => {
    event.preventDefault()

    const formData = new FormData(form);
    fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",        
        body: formData
    })
    .then (response => response.json())
    .then(data => {
        console.log(data)
        if (data.success) {
            const numUser = data.user_id
            localStorage.setItem("user", numUser)
            form.reset()
            change (numUser)            
        } else {
            alert("Неверные данные логин/пароль")
        }
    })
})