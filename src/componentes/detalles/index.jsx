import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Detalles() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  const shareUrl = window.location.href;

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('URL copiada al portapapeles!');
    });
  };

  return (
    <div className="detalles">
      <Link to="/">← Volver</Link>
      <div className="detalle-card">
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Categoría:</strong> {product.category}</p>
          <p><strong>Calificación:</strong> ⭐ {product.rating.rate} ({product.rating.count} reseñas)</p>
          <p><strong>Descripción:</strong></p>
          <p>{product.description}</p>
          <button onClick={handleShare} className="btn-share">
            📤 Compartir URL
          </button>
        </div>
      </div>
    </div>
  );
}