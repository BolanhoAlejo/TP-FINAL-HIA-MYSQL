import React from "react";
import Table from "./components/Table";
import "./styles/App.css";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo d-flex align-items-center">
            <h1 className="ms-3 text-white">Administrador de Usuarios</h1>
          </div>

          {/* Navigation Buttons */}
          <nav>
            <button className="btn btn-outline-light me-2">Home</button>
            <button className="btn btn-outline-light me-2">Add User</button>
            <button className="btn btn-outline-light">About</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container my-5">
        <Table />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p>
            &copy; {new Date().getFullYear()} Prueba de despliegue | Designed with ❤️
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
