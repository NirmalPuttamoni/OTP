const inputRef = document.querySelectorAll('.otp input');
const firstInputRef = document.querySelector('.otp input:nth-child(1)');
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