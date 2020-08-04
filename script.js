function generatePin() {
    var val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomPinShow').value = val;
    clearScreen();
    messageRemove();
    document.getElementById('submit').disabled = false;
    document.getElementById('tryCount').innerText = 3;
}


function checkMatch() {
    const generatePin = parseInt(document.getElementById('randomPinShow').value);
    const inputPin = parseInt(document.getElementById('inputPin').value);
    var tryCount = parseInt(document.getElementById('tryCount').innerText);

    if (generatePin === inputPin) {
        document.getElementById('matchMessage').style.display = 'block'
        document.getElementById('notMatchMessage').style.display = 'none'
    }
    else {
        document.getElementById('notMatchMessage').style.display = 'block'
        document.getElementById('matchMessage').style.display = 'none'
        tryCount -= 1;
        document.getElementById('tryCount').innerText = tryCount;
        if (tryCount == 0) {
            document.getElementById('submit').disabled = true
        }
    }
}


function clearScreen() {
    const inputPin = document.getElementById('inputPin');
    inputPin.value = '';
    console.log(inputPin)
    messageRemove()
}


function singleNumberRemove() {
    const inputPin = document.getElementById('inputPin');
    inputPin.value = matchPin.inputPin.value.slice(0, -1)
    messageRemove()
}


function messageRemove() {
    document.getElementById('matchMessage').style.display = 'none'
    document.getElementById('notMatchMessage').style.display = 'none'
}