import { Link } from "react-router-dom";
import { MantineProvider, Text } from "@mantine/core";
import "./navigationScreen.css";

function NavScreen() {
  return (
    <main className="background-container">
      <header className="header">
        <div className="header-title">
          <h1 className="title">SMART COACH</h1>
        </div>
        <div className="header-logo">
          <img src="Logos/Logo circular 2.png" alt="Logo Circular 2" id='logo_navigation'/>
        </div>
      </header>
      <nav className="nav-container">
        {localStorage.getItem("adminStatus") === "1" ? (
          <Link to={"/admin"} className="Link">
            <div className="nav-option">
              <button className="nav-button">
                <img
                  src="/Logos/Logo circular 2.png"
                  alt="VideoScout"
                  className="nav-button-image"
                />
              </button>
              <span className="nav-text">ADMIN</span>
            </div>
          </Link>
        ) : (
          <></>
        )}
        <Link to="/scout" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/VideoScout/VIDEO SCOUT.png"
                alt="VideoScout"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">VIDEOS SCOUT</span>
          </div>
        </Link>
        <Link to="/steelers" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/VideoSteelers/VIDEO STEELERS.png"
                alt="VideoSteelers"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">VIDEOS STEELERS</span>
          </div>
        </Link>
        <Link to="/drills" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/drills/drills.png"
                alt="drills"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">DRILLS</span>
          </div>
        </Link>
        <Link to="/acondicionamiento" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/acond/acondicionamiento fisico.png"
                alt="acondicionamientoFisico"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">ACONDICIONAMIENTO FÍSICO</span>
          </div>
        </Link>
        <Link to="/playbook" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/playbook/playbook.png"
                alt="playbook"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">PLAYBOOK</span>
          </div>
        </Link>
        <Link to="/coaches" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/docCoaches/documentos Coaches.png"
                alt="documentosCoaches"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">DOCUMENTOS COACHES</span>
          </div>
        </Link>
        <Link to="/administracion" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/docAdmin/Documentos Administracion.png"
                alt="documentosAdministracion"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">DOCUMENTOS ADMINISTRACIÓN</span>
          </div>
        </Link>
        <Link to="/generador-jugadas" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/Generador de jugadas.png"
                alt="GeneradorJugadas"
                className="nav-button-image"
              />
            </button>
            <span className="nav-text">GENERADOR DE JUGADAS</span>
          </div>
        </Link>
        <Link to="/" className="Link">
          <div className="nav-option">
            <button className="nav-button">
              <img
                src="/Logos/logout.png"
                alt="VideoScout"
                className="nav-button-image"
                onClick={() => {
                  localStorage.removeItem("credenciales");
                  localStorage.removeItem("adminStatus");
                  window.location.reload();
                }}
              />
            </button>
            <span className="nav-text">CERRAR SESIÓN</span>
          </div>
        </Link>
      </nav>
    </main>
  );
}

export default NavScreen;
