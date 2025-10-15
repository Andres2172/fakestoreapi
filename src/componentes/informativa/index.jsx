// src/componentes/informativa/index.jsx
import './style.css';

export default function Informativa() {
  return (
    <div className="informativa">
      <div className="fondo"></div>

      <div className="contenido">
        <h1>FAKESTORE API</h1>
        <p className="autor">Andres Ceballos</p>

        <img
          src="src/imagenes/smartphone.png"
          alt="Producto destacado"
          className="logo"
        />

        <div className="info-box">
          <p>API con información de 20 productos</p>
          <p>Categorías: men's clothing, women's clothing, jewelery, electronics</p>
          <p>Precios desde $7.95 hasta $999.99</p>
        </div>

        <div className="footer-info">
          <a
            href="github.com/Andres2172"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Andres2172
          </a>
          <p>v1.0.0</p>
        </div>
      </div>
    </div>
  );
}