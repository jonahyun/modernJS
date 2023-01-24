// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {
  console.log('Calculating...');

  // UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();

}

// function showError(error) {
//   const errorDiv = document.createElement('div');
//   const card = document.querySelector('.card');
//   const heading = document.querySelector(".heading");

//   errorDiv.innerHTML = `<div class="alert alert-danger">${error} <a href="#" id="close">x</a></div>`;
//   card.insertBefore(errorDiv, heading);
//   document.querySelector('#close').addEventListener('click', clearError);
//   setTimeout(clearError, 5000);

// } 


function showError(error){
  // Create a div
  const errorDiv = document.createElement('div');

  // Get element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear erro after 3 seconds
  setTimeout(clearError, 3000);

}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}