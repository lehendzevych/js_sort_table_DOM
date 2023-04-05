'use strict';

const table = document.querySelector('table');
const salaryToNumber = s => s.replace(/[,$]/g, '');

table.tHead.addEventListener('click', (e) => {
  if (!e.target.matches('th')) {
    return;
  }

  const tableBody = table.tBodies[0];
  const cellText = e.target.innerText;
  const cellIndex = e.target.cellIndex;

  const sortedRows = [...tableBody.rows].sort((a, b) => {
    const aText = a.cells[cellIndex].innerText;
    const bText = b.cells[cellIndex].innerText;

    switch (cellText) {
      case 'Name':
      case 'Position':
        return aText.localeCompare(bText);

      case 'Age':
        return +aText - +bText;

      case 'Salary':
        return salaryToNumber(aText) - salaryToNumber(bText);

      default:
        return 0;
    }
  });

  tableBody.append(...sortedRows);
});
