import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Lista() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="lista">
      <h1>📦 Todos los Productos</h1>
      <div className="productos-grid">
        {products.map(product => (
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