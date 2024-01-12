const inputRef = document.querySelectorAll('.otp input');
const firstInputRef = document.querySelector('.otp input:nth-child(1)');
const verifyButtonRef = document.querySelector('.otp-wrapper button');
const generateOTPBtnRef = document.querySelector('.generate-otp button');
const otpVerificationRef = document.querySelector('.otp-verification');
const rejectRef = document.querySelector('.otp-verification .reject-box');
const successRef = document.querySelector('.otp-verification .success-box');

firstInputRef.focus();

inputRef.forEach(input => {

    input.addEventListener('input', e => {
        if( e.target.value ){
            e.target.value = e.target.value%10;
            e.target.nextElementSibling?.focus();
        }
    })
    input.addEventListener('keyup', e => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            e.target.value="";
            e.target.previousElementSibling?.focus();
        }
    })
})

// generate OTP
let generatedOTP = document.querySelector('.generate-otp span').innerText;
// console.log(generatedOTP)

generateOTPBtnRef.addEventListener('click' , e => {
    const otpRef = document.querySelector('.generate-otp span')
    const otp = generateOTp(10000,99999);
    otpRef.innerText = otp;
    generatedOTP=otp;
})

function generateOTp(min, max){
    const otp = Math.floor(min + (Math.random() * (max - min + 1)));
    return otp;
}

// verify OTP
verifyButtonRef.addEventListener('click', e => {
    let inputVal = "";
    inputRef.forEach(val => {
        inputVal += val.value;
    })
    otpVerification(inputVal);
})

function otpVerification(inputVal){
    if(String(inputVal)===String(generatedOTP)){
        otpVerificationRef.style.display='flex';
        rejectRef.style.display = "none";
        successRef.style.display = "flex";
        document.querySelector('.otp-verification').style.backgroundColor='rgba(0,0,0,0.5)';
    }
    else{
        otpVerificationRef.style.display='flex';
        successRef.style.display = "none";
        rejectRef.style.display = "flex";
        document.querySelector('.otp-verification').style.backgroundColor='rgba(0,0,0,0.5)';
    }
}

otpVerificationRef.addEventListener('click' , e =>{
    otpVerificationRef.style.display = 'none';
})