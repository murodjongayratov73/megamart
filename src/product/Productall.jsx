import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

function Productall({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Yuklanmoqda...</div>;
  }

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '20px', 
      padding: '20px' 
    }}>
      {products.map(product => (
        <article key={product.id} className="product1" style={{
          border: '1px solid #eee',
          borderRadius: '10px',
          padding: '15px',
          transition: 'transform 0.3s',
          cursor: 'pointer'
        }}>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="img-page1" style={{ textAlign: 'center' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ 
                  width: '100%', 
                  maxWidth: '200px', 
                  height: '200px',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div className="img-page1-des">
              <p style={{ fontWeight: 'bold', margin: '10px 0' }}>{product.name}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h2 style={{ color: '#008ECC', margin: 0 }}>₹{product.price}</h2>
                <span style={{ textDecoration: 'line-through', color: '#999' }}>₹{product.oldPrice}</span>
              </div>
              <h3 style={{ color: '#00a86b', margin: '5px 0 0' }}>Save - ₹{product.save}</h3>
            </div>
          </Link>
          <button 
            onClick={(e) => handleAddToCart(product, e)}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#008ECC',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            🛒 Savatga qo'shish
          </button>
        </article>
      ))}
    </div>
  );
}

export default Productall;