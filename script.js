function generateOtp() {
    document.querySelector("#otp").innerHTML = (Math.floor(Math.random()*(999999-100000)+100000));
}