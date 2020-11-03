import { fetchUrl } from './helpers/apiFetch';
import { formatAmount } from './helpers/formatAmount';
import * as selectors from './helpers/selectors';

fetchUrl(selectors.url)
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      selectors.optionsCurrency.innerHTML += `
        <option value="${data[key].code}">${data[key].name}</option>
      `;
    }

    selectors.optionsCurrency.addEventListener('change', () => {
      selectors.cotation.textContent = `${data[selectors.optionsCurrency.value].high}`;
      selectors.currency.textContent = `${selectors.optionsCurrency.value}`;
      selectors.currency2.textContent = `${selectors.optionsCurrency.value}`;
      selectors.salaryDigited.textContent = selectors.inputSalary.value;
      selectors.salaryMonth.textContent = (selectors.inputSalary.value / 12).toFixed(2);
      selectors.salaryConverted.textContent = formatAmount((selectors.inputSalary.value / 12) * data[selectors.optionsCurrency.value].high);
    });
  })
  .catch(error => { console.error(error); });
