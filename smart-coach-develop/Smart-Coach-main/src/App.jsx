// Importing necessary components and modules

import { Routes, Route, BrowserRouter } from "react-router-dom"; // React routing modules
import React, { useEffect, useState } from "react"; // React modules

import "./App.css"; // CSS file

import NavScreen from "./pages/navigationScreen"; // Navigation screen component
import Login from "./Login"; // Login component
import CategoryView from "./pages/CategoryView"; // Category view component
import DocumentList from "./pages/DocumentList"; // Document list component
import VideoList from "./pages/VideoList"; // Video list component
import Admin from "./pages/PanelAdmin/admin"; // Admin panel component
import PlayGenerator from "./pages/PlayGenerator"; // Play generator component
import ProtectedRoute from "./pages/rerouting/protectedRoute"; // Protected route component
import ProtectedLogin from "./pages/rerouting/protectedlogin"; // Protected login component
import ProtectedAdmin from "./pages/rerouting/protectedAdmin"; // Protected admin component

import navigation from "./data/navigation.json"; // Navigation data

// Exporting the main component of the application
export default function App() {
  // Defining state variables (credenciales and isadmin)
  const [credenciales, setCredenciales] = useState("");
  const [isadmin, setIsAdmin] = useState("");

  // Using useEffect hook to retrieve data from local storage
  useEffect(() => {
    var valueFromLocalStorage = localStorage.getItem("credenciales");
    setCredenciales(valueFromLocalStorage);
    valueFromLocalStorage = localStorage.getItem("adminStatus");
    setIsAdmin(valueFromLocalStorage);
  }, []);

  // Rendering the application
  return (
    <BrowserRouter>
      <Routes>
        {/* Defining routes for login and admin pages */}
        <Route element={<ProtectedLogin credenciales={credenciales} />}>
          <Route path="/" element={<Login />} />
        </Route>

        <Route
          element={
            <ProtectedAdmin credenciales={credenciales} admin={isadmin} />
          }
        >
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* Defining protected routes for the rest of the application */}
        <Route element={<ProtectedRoute credenciales={credenciales} />}>
          <Route path="/home" element={<NavScreen />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/documentos" element={<DocumentList />} />
          <Route path="/generador-jugadas" element={<PlayGenerator />} />

          {/* Defining nested routes for different categories */}
          <Route path="scout">
            <Route
              index
              element={<CategoryView viewData={navigation.scout} />}
            />
            <Route
              path="ofensa"
              element={<CategoryView viewData={navigation.ofensa} />}
            />
            <Route
              path="defensa"
              element={<CategoryView viewData={navigation.defensa} />}
            />
            <Route
              path="especiales"
              element={<CategoryView viewData={navigation.especiales} />}
            />
          </Route>

          <Route path="steelers">
            <Route
              index
              element={<CategoryView viewData={navigation.steelers} />}
            />
            <Route
              path="ofensa"
              element={<CategoryView viewData={navigation.ofensa} />}
            />
            <Route
              path="defensa"
              element={<CategoryView viewData={navigation.defensa} />}
            />
            <Route
              path="especiales"
              element={<CategoryView viewData={navigation.especiales} />}
            />
          </Route>

          <Route path="drills">
            <Route
              index
              element={<CategoryView viewData={navigation.drills} />}
            />
          </Route>

          <Route path="acondicionamiento">
            <Route
              index
              element={<CategoryView viewData={navigation.acondicionamiento} />}
            />
            <Route
              path="ligas"
              element={<CategoryView viewData={navigation.ligas} />}
            />
            <Route
              path="gym"
              element={<CategoryView viewData={navigation.gym} />}
            />
          </Route>

          <Route path="playbook">
            <Route
              index
              element={<CategoryView viewData={navigation.playbook} />}
            />
          </Route>

          <Route path="coaches">
            <Route
              index
              element={<CategoryView viewData={navigation.coaches} />}
            />
          </Route>

          <Route path="administracion">
            <Route
              index
              element={<CategoryView viewData={navigation.administracion} />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
