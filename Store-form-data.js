// Get the form elements
const form = document.getElementById('register');
const name = document.getElementById('name').value;
const address = document.getElementById('address').value;
const contact = document.getElementById('Contact').value;
const email = document.getElementById('email').value;
const desination = document.getElementById('desination').value;
const gender = document.querySelector('input[name="cont"]:checked').value;

// Create an object to store the form data
const formData = {
  name,
  address,
  contact,
  email,
  desination,
  gender
};
function storeFormData() {
  // Get the form elements
  const form = document.getElementById('register');
  const formData = new FormData(form);

  // Store the form data in LocalStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Alert the user that the form data has been stored
  alert('Form data stored successfully!');
}

// Store the form data in LocalStorage
localStorage.setItem('formData', JSON.stringify(formData));
console.log(formData);