const  loginArr = JSON.parse(localStorage.getItem(`register`)) || [] 

const sendLogin = document.querySelector(`#send_login`)


sendLogin.addEventListener(`click` , (e) => {
    e.preventDefault();


    const username =  document.querySelector(`#username`)
    const email = document.querySelector(`#email`)
    const password = document.querySelector(`#password1`)


   const loginObj =  {
        name: username.value,
        email:email.value,
        password:password.value,
    }

    loginArr.find(obj => {
        console.log(obj);
        if(obj.email == loginObj.email && obj.name == loginObj.name && obj.psw1 == loginObj.password){
            localStorage.setItem(`login`, JSON.stringify([obj]))
            window.location.href = `home.html`;
            return obj
        }
        else{
            alert(`Please check for errors and re-enter`)
        }
    
    })


})