import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Buscador() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="buscador">
      <h1>🔎 Buscar Producto</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '8px', width: '100%', maxWidth: '400px' }}
      />

      <div className="productos-grid">
        {filtered.map(product => (
          <div key={product.id} className="producto-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title.length > 40 ? product.title.substring(0, 40) + '...' : product.title}</h3>
            <p><strong>${product.price.toFixed(2)}</strong></p>
            <p className="categoria">{product.category}</p>
            <p>⭐ {product.rating.rate} ({product.rating.count})</p>
            <Link to={`/detalles/${product.id}`} className="btn-detalles">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}