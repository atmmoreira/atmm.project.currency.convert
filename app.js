(function () {
  'use strict';

  const formata = (num) => {
    let p = Number(num).toFixed(2).split(".");
    return "" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "." : "") + acc;
    }, "") + "," + p[1];
  }

  let apiCurrent = new XMLHttpRequest();
  apiCurrent.open('GET', 'https://economia.awesomeapi.com.br/json/all');
  apiCurrent.send();

  const isApiOk = () => {
    return apiCurrent.readyState === 4 && apiCurrent.status === 200
  }

  const getData = () => {
    let result;
    try {
      result = JSON.parse(apiCurrent.responseText);
    } catch (error) {
      result = null;
    }
    return result;
  }

  const makeWork = () => {
    if (isApiOk()) return;
  }
  apiCurrent.addEventListener('readystatechange', makeWork);

  let inputSalary = document.querySelector('[data-js="inputSalary"]');
  const cleanFields = () => inputSalary.value = '';
  let dolar = document.querySelector('[data-js="dolar"]');
  let dolarcanadense = document.querySelector('[data-js="dolarcanadense"]');
  let euro = document.querySelector('[data-js="euro"]');
  let libra = document.querySelector('[data-js="libra"]');
  let textSalary = document.querySelector('[data-js="salary"]');
  let textSalaryMonth = document.querySelector('[data-js="salaryMonth"]');
  let textSalaryReal = document.querySelector('[data-js="salaryConverted"]');
  let cotation = document.querySelector('[data-js="cotation"]');

  const formatCurrency = (n) => {
    return n = formata(inputSalary.value);
  }

  const divideCurrency = () => {
    let resultDivide = inputSalary.value / 12;
    return resultDivide;
  }

  const funcDolar = event => {
    event.preventDefault();
    let round = formatCurrency();
    let divide = divideCurrency();
    let data = getData();
    let usd = data.USD.high;
    textSalary.textContent = '$USD ' + round;
    textSalaryMonth.textContent = '$USD ' + formata(divide);
    textSalaryReal.textContent = 'R$ ' + formata(divide * usd);
    cotation.textContent = '$USD ' + usd;
    cleanFields();
  };
  dolar.addEventListener('click', funcDolar);

  const funcDolarCanadense = event => {
    event.preventDefault();
    let round = formatCurrency();
    let divide = divideCurrency();
    let data = getData();
    let cad = data.CAD.high;
    textSalary.textContent = '$CAD ' + round;
    textSalaryMonth.textContent = '$CAD ' + formata(divide);
    textSalaryReal.textContent = 'R$ ' + formata(divide * cad);
    cotation.textContent = '$CAD ' + cad;
    cleanFields();
  };
  dolarcanadense.addEventListener('click', funcDolarCanadense);

  const funcEuro = event => {
    event.preventDefault();
    let round = formatCurrency();
    let divide = divideCurrency();
    let data = getData();
    let euro = data.EUR.high;
    textSalary.textContent = '€EUR ' + round;
    textSalaryMonth.textContent = '€EUR ' +formata(divide);
    textSalaryReal.textContent = 'R$ ' + formata(divide * euro);
    cotation.textContent = '€EUR ' + euro;
    cleanFields();
  };
  euro.addEventListener('click', funcEuro);

  const funcLibra = event => {
    event.preventDefault();
    let round = formatCurrency();
    let divide = divideCurrency();
    let data = getData();
    let libra = data.GBP.high;
    textSalary.textContent = '£GBP ' + round;
    textSalaryMonth.textContent = '£GBP ' + formata(divide);
    textSalaryReal.textContent = 'R$ ' + formata(divide * libra);
    cotation.textContent = '£GBP ' + libra;
    cleanFields();
  };
  libra.addEventListener('click', funcLibra);

})();