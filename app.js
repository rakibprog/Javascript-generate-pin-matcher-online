document.getElementById('pin-generate').addEventListener('click', function() {
    const pinValue = document.getElementById('pin-value');
    pinValue.value = getPin();
});

function getPin() {
    const generateNumber = Math.round(Math.random() * 10000);
    const pinString = generateNumber + '';
    if (pinString.length == 4) {
        return generateNumber;
    } else {
        return getPin();
    }
}

// event bubble get number 
document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const keyValue = document.getElementById('key-value');
    if (isNaN(number)) {
        if (number == 'C') {
            keyValue.value = '';
        }
    } else {
        const keyTotal = keyValue.value;
        const KeyNumber = keyTotal + number;
        keyValue.value = KeyNumber;
    }
});

document.getElementById('submit-button').addEventListener('click', function() {
    const keyValue = document.getElementById('key-value').value;
    const pinValue = document.getElementById('pin-value').value;
    const notifySucces = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if (keyValue == pinValue) {
        notifySucces.style.display = 'block';
        notifyFail.style.display = 'none';
    } else {

        notifyFail.style.display = 'block';
        notifySucces.style.display = 'none';
    }

});