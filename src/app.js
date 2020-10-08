import { fetchUrl } from './helpers/apiFetch';
import { formatAmount } from './helpers/formatAmount';
import { url, inputSalary, optionsCurrency, cotation, salaryDigited, salaryMonth, salaryConverted, currency, currency2 } from './helpers/selectors';

fetchUrl(url)
  .then(response => response.json())
  .then(data => {
    for (const key in data) {
      optionsCurrency.innerHTML += `
        <option value="${data[key].code}">${data[key].name}</option>
      `;
    }

    optionsCurrency.addEventListener('change', () => {
      cotation.textContent = `${data[optionsCurrency.value].high}`;
      currency.textContent = `${optionsCurrency.value}`;
      currency2.textContent = `${optionsCurrency.value}`;
      salaryDigited.textContent = formatAmount(inputSalary.value);
      salaryMonth.textContent = (inputSalary.value / 12).toFixed(2);
      salaryConverted.textContent = formatAmount((inputSalary.value / 12) * data[optionsCurrency.value].high);
    });
  })
  .catch(error => { console.error(error); });
