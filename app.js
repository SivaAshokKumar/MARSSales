let expenses = [];

function addExpense() {
  const expensesDiv = document.getElementById("expenses");
  const input = document.createElement("input");
  input.type = "number";
  input.className = "expense";
  input.placeholder = "Enter Expense Amount";
  expensesDiv.appendChild(input);
}

function submitData() {
  const saleAmount = parseFloat(document.getElementById("saleAmount").value);
  const expenseInputs = document.querySelectorAll(".expense");
  expenses = Array.from(expenseInputs).map(input => parseFloat(input.value || 0));
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
  const savings = saleAmount - totalExpenses;

  // Display the results
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = `
    <h2>Dashboard</h2>
    <p><strong>Total Sale Amount:</strong> ${saleAmount}</p>
    <p><strong>Total Expenses:</strong> ${totalExpenses}</p>
    <p><strong>Savings:</strong> ${savings}</p>
  `;

  // Save the data to the database (back-end integration required)
  saveToDatabase({ saleAmount, expenses, totalExpenses, savings });
}

async function saveToDatabase(data) {
  // Send data to backend server (use Firebase, Node.js, or another backend setup)
  console.log("Data to be saved:", data);
}
