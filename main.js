const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency(); 

runEventListeners();

function runEventListeners(){
    amountInput.addEventListener("input",exchange);
}

function exchange(){
const amount = Number(amountInput.value.trim());
const firstOptionValue = firstOption.options[firstOption.selectedIndex].
textContent;

const secondOptionOptionValue = secondOption.options[secondOption.selectedIndex].
textContent;

currency.exchange(amount,firstOptionValue,secondOptionOptionValue).then((result) => {
    resultInput.value = result.toFixed(3) //noktadan sonraki basamak sayisini belirtir
})
}

