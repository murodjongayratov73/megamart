import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById } from "../services/api";
import { useTranslation } from 'react-i18next';

function ProductDetail({ addToCart }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>{t('loading')}</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>{t('productNotFound')}</h2>
        <Link to="/products" style={{ color: '#008ECC' }}>
          {t('allProducts')}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/products" style={{ color: '#008ECC', textDecoration: 'none' }}>
          ← {t('backToProducts')}
        </Link>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={product.image || 'https://via.placeholder.com/400x400?text=Phone'} 
            alt={product.name}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <div>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.name}</h1>
          
          <div style={{ marginBottom: '15px' }}>
            <span style={{ color: '#FFD700', fontSize: '20px' }}>★</span>
            <span style={{ marginLeft: '5px' }}>{product.rating || 4.5}/5</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#008ECC' }}>
              ₹{product.price}
            </span>
            <span style={{ 
              fontSize: '18px', 
              textDecoration: 'line-through', 
              color: '#999',
              marginLeft: '10px'
            }}>
              ₹{product.oldPrice}
            </span>
            <span style={{
              backgroundColor: '#ff4444',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              marginLeft: '10px',
              fontSize: '14px'
            }}>
              {t('save')} ₹{product.save}
            </span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <p><strong>{t('brand')}:</strong> {product.brand || 'Samsung'}</p>
            <p><strong>{t('ram')}:</strong> {product.ram || '8GB'}</p>
            <p><strong>{t('storage')}:</strong> {product.storage || '128GB'}</p>
            <p><strong>{t('color')}:</strong> {product.color || 'Qora'}</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <span>{t('quantity')}:</span>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd' }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '5px 15px', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                -
              </button>
              <span style={{ padding: '5px 15px' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '5px 15px', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '12px 30px',
                backgroundColor: '#fff',
                border: '2px solid #008ECC',
                color: '#008ECC',
                fontSize: '16px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {t('addToCart')}
            </button>
            <button
              onClick={handleBuyNow}
              style={{
                padding: '12px 30px',
                backgroundColor: '#008ECC',
                border: 'none',
                color: '#fff',
                fontSize: '16px',   
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {t('buyNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;