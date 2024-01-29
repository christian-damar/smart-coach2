// Importing necessary modules
import React, { useState } from "react";
import Validation from "./LoginValidation"; // Importing a custom validation function
import axios from "axios"; // Importing axios for making HTTP requests
import "./Login.css"; // Importing a CSS file

// Defining the Login component
function Login() {
  // Defining state variables using the useState hook
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categorias] = useState([
    "Flag",
    "Juveniles",
    "Infantil 1",
    "Infantil 2",
    "Infantil 3",
    "Infantil 4",
    "Infantil 5",
    "Infantil 6",
    "Baby",
    "ADMIN",
  ]);

  const [errors, setErrors] = useState({}); // Defining an errors object for validation errors

  // Function to handle input changes
  const handleInput = (event) => {
    if (event.target.name === "categorias") {
      setSelectedCategory(event.target.value);
    } else {
      setValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values, selectedCategory); // Validating the form values using the custom validation function
    setErrors(validationErrors);

    if (
      errors.email === "" &&
      errors.password === "" &&
      errors.categoria === ""
    ) {
      axios
        .get("https://back.smartcoach.top/Log.php", {
          params: {
            email: values.email,
            pass: values.password,
            equipo: selectedCategory,
          },
        })
        .then((res) => {
          if (res.data.response === 1) {
            localStorage.setItem("credenciales", {
              email: values.email,
              pass: values.password,
            });
            localStorage.setItem(
              "equipo",
              res.data.admin === 1 ? "flag" : selectedCategory.toLowerCase()
            );
            localStorage.setItem("adminStatus", res.data.admin);
            window.location.reload();
          } else {
            alert("Datos incorrectos y/o registro inexistente");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  // Rendering the Login component
  return (
    <div className="background-image">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg-white p-3 rounded w-30" id="login-form">
          <h2>Ingresa a Smart Coach</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="coach@smartcoach.com"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="categorias">
                <strong>Categorías de Smart Coach</strong>
              </label>
              <select
                name="categorias"
                className="form-control mb-3"
                onChange={handleInput}
                value={selectedCategory}
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((elemento, index) => (
                  <option key={index} value={elemento}>
                    {elemento}
                  </option>
                ))}
              </select>
              {errors.categoria && (
                <span className="text-danger">{errors.categoria}</span>
              )}
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
              {" "}
              <strong>Ingresar</strong>
            </button>
            <p>De acuerdo con nuestros terminos y condiciones</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; // Exporting the Login component
