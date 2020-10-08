import { fetchUrl } from './helpers/apiFetch';
import { formatAmount } from './helpers/formatAmount';

const selectors = [
  document.querySelector('#inputSalary'),
  document.querySelector('#optionsCurrency'),
  document.querySelector('#cotation'),
  document.querySelector('#salaryDigited'),
  document.querySelector('#salaryMonth'),
  document.querySelector('#salaryConverted'),
  document.querySelector('#currency'),
  document.querySelector('#currency2'),
  'https://economia.awesomeapi.com.br/json/all'
];

fetchUrl(selectors[8])
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      selectors[1].innerHTML += `
        <option value="${data[key].code}">${data[key].name}</option>
      `;
    }

    optionsCurrency.addEventListener('change', () => {
      selectors[2].textContent = `${data[selectors[1].value].high}`;
      selectors[6].textContent = `${selectors[1].value}`;
      selectors[7].textContent = `${selectors[1].value}`;
      selectors[3].textContent = formatAmount(selectors[0].value);
      selectors[4].textContent = formatAmount(selectors[0].value) / 12;
      selectors[5].textContent = formatAmount((selectors[0].value / 12) * data[selectors[1].value].high);
    });
  })
  .catch(error => { console.error(error); });
