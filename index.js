const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit' , function(e)
{ 
    e.preventDefault()
    // console.log("Data Submitted")
    const loginFormData =new FormData(loginForm)
    console.log(loginFormData)
    const name = loginFormData.get('AstronautName')
    const email = loginFormData.get('AstronautEmail')
    const pwd = loginFormData.get('Pwd')
    console.log(name,email,pwd)
})