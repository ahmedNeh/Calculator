let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-output').innerHTML = `${calculation}`
  saveCalculation();
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function deleteLastDigit() {
  calculation = calculation.toString.slice(0, -1);

}
