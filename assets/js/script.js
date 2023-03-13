const textField = document.querySelector(".text-field");
const message = document.querySelector(".message");
const messageError = document.querySelector(".message-error");
const btnCopy = document.querySelector("#btn-copy");

function btnEncrypt() {
    const encryptedText = encrypted(textField.value);
    message.value = encryptedText;
    error();
}

function btnDecrypt() {
    const decrytedText = decrypted(textField.value);
    message.value = decrytedText;
    error();
}

btnCopy.addEventListener('click', copy);
function copy() {
        message.select();
        document.execCommand("copy");
}

function encrypted(stringEncrypted) {
    let matrixCode = [["a", "ai"], ["e", "enter"], ["i,", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringEncrypted.includes(matrixCode[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }

    return stringEncrypted;
}

function decrypted(stringDecrypted) {
    let matrixCode = [["a", "ai"], ["e", "enter"], ["i,", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringDecrypted.includes(matrixCode[i][1])) {
            stringDecrypted = stringDecrypted.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }

    return stringDecrypted;
}

function error(text) {
    if(!textField.value.length == 0) {
        textField.value = "";
        message.style.backgroundImage = 'none';
        messageError.style.display = 'none';    
    } else {
        message.style.backgroundImage = message.value;
        messageError.style.display = 'block';
    }
}