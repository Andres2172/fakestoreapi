export default function Home() {
  return (
    <div className="home">
      <h1>🛒 FakeStore - Página Principal</h1>
      <p>Bienvenido a la tienda virtual. Explora nuestros productos usando el menú superior.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/lista" className="btn">Ver todos los productos</a>
        <a href="/filtro" className="btn">Filtrar por categoría</a>
        <a href="/buscador" className="btn">Buscar producto</a>
      </div>
    </div>
  );
}