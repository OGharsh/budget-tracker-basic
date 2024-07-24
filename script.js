// Elements
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const filterDate = document.getElementById("filter-date");
const spendingChartCanvas = document.getElementById('spendingChart');
const openChartBtn = document.getElementById('open-chart');

// Declare spendingChart variable at the top
let spendingChart;

// Retrieve transactions from local storage or set to empty array
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(type) {
  if (text.value.trim() === '' || amount.value.trim() === '' || date.value.trim() === '') {
    alert('Please add text, amount, and date');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: type === 'income' ? +amount.value : -amount.value,
      date: date.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();
    updateSpendingChart();

    text.value = '';
    amount.value = '';
    date.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 1000000000);
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+₹";
  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <span class="transaction-date">${transaction.date}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;
  list.appendChild(item);
}

// Update the balance, income, and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  balance.innerText = `₹${total}`;
  money_plus.innerText = `₹${income}`;
  money_minus.innerText = `₹${expense}`;
}

// Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage();
  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Filter transactions by date
function filterTransactions() {
  const filterDateValue = filterDate.value;
  if (filterDateValue) {
    const filteredTransactions = transactions.filter(transaction => transaction.date === filterDateValue);
    list.innerHTML = '';
    filteredTransactions.forEach(addTransactionDOM);
  }
}

// Clear date filter
function clearFilter() {
  filterDate.value = '';
  init();
}

// Initialize app
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
  updateSpendingChart();
}

init();

form.addEventListener('submit', (e) => e.preventDefault());

// Chart.js: Generate spending chart
function updateSpendingChart() {
  const monthlyExpenses = new Array(12).fill(0);
  const monthlyIncome = new Array(12).fill(0);

  transactions.forEach(transaction => {
    const month = new Date(transaction.date).getMonth();
    if (transaction.amount < 0) {
      monthlyExpenses[month] += Math.abs(transaction.amount);
    } else {
      monthlyIncome[month] += transaction.amount;
    }
  });

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Expenses',
        data: monthlyExpenses,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Income',
        data: monthlyIncome,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  if (spendingChart) {
    spendingChart.destroy();
  }

  spendingChart = new Chart(spendingChartCanvas, {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Open new chart tab
openChartBtn.addEventListener('click', () => {
  window.open('chart.html', '_blank');
});
