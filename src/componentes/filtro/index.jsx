import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Filtro() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const categories = [...new Set(products.map(p => p.category))];

  const filtered = category
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="filtro">
      <h1>🔍 Filtrar por Categoría</h1>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Todas las categorías</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

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