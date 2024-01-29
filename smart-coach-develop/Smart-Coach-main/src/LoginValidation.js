// Define a function called Validation that takes in an object called values as a parameter
function Validation(values, category) {
  let error = {};

  // Check if the email value in the values object is empty
  if (values.email === "") {
    // If it is, add an error message to the error object
    error.email = "Introduce un email válido";
  } else {
    error.email = "";
  }

  // Check if the password value in the values object is empty
  if (values.password === "") {
    // If it is, add an error message to the error object
    error.password = "Introduce una contraseña válida";
    // If the password value is not empty, set the password error message to an empty string
  } else {
    error.password = "";
  }

  if (category === "") {
    error.categoria = "Elige una de las categorías";
  } else {
    error.categoria = "";
  }

  return error;
}

export default Validation;
