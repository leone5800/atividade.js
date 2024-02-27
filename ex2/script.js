function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function checkPrime() {
    const numberInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
    const number = parseInt(numberInput);
    
    if (isNaN(number)) {
        resultElement.textContent = "Por favor, insira um numero valido pobre";
    } else {
        const isNumberPrime = isPrime(number);
        if (isNumberPrime) {
            resultElement.textContent = `${number} e um numero primo bele parceiro`;
        } else {
            resultElement.textContent = `${number} nao e um numero primo bele mano`;
        }
    }
}