import { data } from '../data.js';

const container = document.querySelector('.container');
const { columns, rows } = data;

columns.forEach((column, index) => {
  let value = rows[0].values[index]
  let header = column.name;
  let description = column.dataType === 'DateTime' ? formatDate(new Date(value)) : value;
  createBlock(header, description);
})


function createBlock(header, description) {
  const block = `
    <div class="block">
      <div class="block-header">
        <h2 class="block-header__title">${header}</h2>
      </div>
      <div class="block-content">
        <p class="block-content__description">${description}</p>
      </div>
    </div>
  `;

  container.insertAdjacentHTML('beforeend', block)
}


function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  let dd = d <= 9 ? '0' + d : d
  let mm = m <= 9 ? '0' + m : m

  return `${dd}.${mm}.${yyyy}`
}