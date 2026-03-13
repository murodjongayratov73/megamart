import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import { useTranslation } from 'react-i18next';

function SearchResults({ addToCart }) {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const searchQuery = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            let filtered = [...products];
            
            if (searchQuery) {
                filtered = filtered.filter(product => 
                    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase()))
                );
            }
            
            if (category) {
                filtered = filtered.filter(product => 
                    product.category && product.category.toLowerCase() === category.toLowerCase()
                );
            }
            
            setFilteredProducts(filtered);
        }
    }, [products, searchQuery, category]);

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '50px' }}>{t('loading')}</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
                    {searchQuery && `"${searchQuery}" ${t('search')}`}
                    {category && !searchQuery && `${category} ${t('category')}`}
                    {!searchQuery && !category && t('allProducts')}
                </h2>
                <p style={{ color: '#666' }}>
                    {filteredProducts.length} {t('products')}
                </p>
            </div>
            
            {filteredProducts.length === 0 ? (
                <div style={{ 
                    textAlign: 'center', 
                    padding: '50px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px'
                }}>
                    <h3 style={{ color: '#666', marginBottom: '20px' }}>{t('productNotFound')}</h3>
                    <Link to="/" style={{ 
                        color: '#008ECC',
                        textDecoration: 'none',
                        fontSize: '16px'
                    }}>
                        {t('home')}
                    </Link>
                </div>
            ) : (
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                    gap: '20px' 
                }}>
                    {filteredProducts.map(product => (
                        <article key={product.id} className="product1" style={{
                            border: '1px solid #eee',
                            borderRadius: '10px',
                            padding: '15px',
                            transition: 'transform 0.3s',
                            cursor: 'pointer',
                            backgroundColor: '#fff'
                        }}>
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="img-page1" style={{ textAlign: 'center' }}>
                                    <img 
                                        src={product.image || 'https://via.placeholder.com/200x200?text=Product'} 
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
                                    {product.brand && (
                                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>
                                            {product.brand}
                                        </p>
                                    )}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <h2 style={{ color: '#008ECC', margin: 0 }}>₹{product.price}</h2>
                                        {product.oldPrice && (
                                            <span style={{ textDecoration: 'line-through', color: '#999' }}>
                                                ₹{product.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                    {product.save && (
                                        <h3 style={{ color: '#00a86b', margin: '5px 0 0' }}>
                                            {t('save')} - ₹{product.save}
                                        </h3>
                                    )}
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
                                🛒 {t('addToCart')}
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchResults;