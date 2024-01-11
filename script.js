const inputRef = document.querySelectorAll('.otp input');
const firstInputRef = document.querySelector('.otp input:nth-child(1)');
firstInputRef.focus();

inputRef.forEach(input => {

    input.addEventListener('input', e => {
        if (isNaN(e.target.value) || e.target.value == ' ') {
            e.target.value = '';
        }
        if (e.target.value != '') {
            const nextInput = e.target.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
    })
    input.addEventListener('keyup', e => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            const prevInput = e.target.previousElementSibling;
            if (prevInput) {
                prevInput.focus();
            }
        }
    })
})