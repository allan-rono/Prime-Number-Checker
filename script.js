const num = document.getElementById("num");
const submit = document.getElementById("submit");
const answer = document.getElementById("answer");

function getPrime() {
    let numValue = Number(num.value);

    if (numValue <= 1) { return answer.innerHTML = "Not a Prime Number"; }
    if (numValue === 2) { return answer.innerHTML = "Prime Number"; }

    let num2 = Math.sqrt(numValue);
    for (var x = 2; x <= num2; x++) {
        if (num2 % x === 0) {
            return answer.innerHTML = "Not a Prime Number";
        }
    }
    return answer.innerHTML = "Prime Number";
};

submit.addEventListener("click", getPrime);
