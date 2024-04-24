
function validateForm() {
    const name = document.getElementById("name").value
    const address = document.getElementById("address").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const subject = document.getElementById("subject").value
    const agree = document.getElementById("agree").checked

    const nameError =document.getElementById("name-error")
    const addressError = document.getElementById("address-error")
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    const subjectError = document.getElementById("subject-error")
    const agreeError = document.getElementById("agree-error")

    let isValid=true

    if (name === "") {
        nameError.innerText = "Please enter your name properly."
        isValid = false
    }

    if (address === "") {
        addressError.innerHTML ="Please enter your address."
        isValid = false
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address."
        isValid = false
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters."
        isValid = false
    }

    if (subject === "") {
        subjectError.textContent = "Please select your course."
        isValid = false
    }

    if (!agree) {
        agreeError.textContent = "Please agree to the above information."
        isValid = false
    }

    if (isValid==true) {
        alert ("Form filled successfully")
    }

    return isValid
}
