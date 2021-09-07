const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const outputmsg = document.querySelector(".output");

function compareValues(sum,luckyNumber) {
    if (sum % luckyNumber === 0) {
        msg("Yay! Your birthday is lucky 🎉");
    } else {
        msg("Oops! Your birthday is not lucky 🤐")
    }
}
function validate() {
    outputmsg.style.display = "none";
    const dob = birthDate.value;
    const sum = calculateSum(dob);
    if(sum&&luckyNumber.value)
    compareValues(sum,luckyNumber.value);
    else
    msg("Please enter both the fields");
}

function msg(text) {
    outputmsg.style.display = "block";
    outputmsg.innerText = text;
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkBtn.addEventListener('click', validate);