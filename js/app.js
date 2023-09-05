const sendRigester = document.querySelector(`#send_register`)
// ! rigester page 

const register = JSON.parse(localStorage.getItem(`registers`)) || []

sendRigester.addEventListener(`click` , (e) => {

    
     
    console.log(register);

    const userName = document.querySelector("#username")
    const psw1 = document.querySelector(`#password1`)
    const email = document.querySelector(`#email`)
    const psw2 = document.querySelector(`#password2`)

    const userData = {
        name: userName.value,
        email : email.value,
        psw1 : psw1.value,
        psw2: psw2.value,
    }
    
    
    if(userData.name && userData.email && userData.psw1 && userData.psw2){
        const isPassTrue = userData.psw1 === userData.psw2 
        if(isPassTrue){
            register.push(userData)
            localStorage.setItem(`register`, JSON.stringify(register))
            alert(`You have successfully logged in`), window.location.href = `login.html`
        }
        else{
            alert(`Error password`)
        }
    }
    else{
        alert(`Please fill all fields`)
    }
})

// ! end of register page