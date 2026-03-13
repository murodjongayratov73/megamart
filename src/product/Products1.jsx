import samsung from "../assets/image-35.png";
import galax from "../assets/Galaxy-M13.webp";
import galax2 from "../assets/samsung-galax2.png";
import galaxm53 from "../assets/m53.jpg";
import samsung2 from "../assets/samsung2.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Products1({ addToCart }) {
    const { t } = useTranslation();
    
    const products = [
        {
            id: 1,
            name: "Galaxy S22 Ultra",
            price: 32999,
            oldPrice: 74999,
            save: 32999,
            image: samsung,
            ram: "12GB",
            storage: "256GB"
        },
        {
            id: 2,
            name: "Galaxy M13 (4GB | 64 GB)",
            price: 10499,
            oldPrice: 14999,
            save: 4500,
            image: galax,
            ram: "4GB",
            storage: "64GB"
        },
        {
            id: 3,
            name: "Galaxy M33 (4GB | 64 GB)",
            price: 16999,
            oldPrice: 24999,
            save: 8000,
            image: galax2,
            ram: "4GB",
            storage: "64GB"
        },
        {
            id: 4,
            name: "Galaxy M53 (4GB | 64 GB)",
            price: 31999,
            oldPrice: 40999,
            save: 9000,
            image: galaxm53,
            ram: "4GB",
            storage: "64GB"
        },
        {
            id: 5,
            name: "Galaxy S22 Ultra",
            price: 67999,
            oldPrice: 85999,
            save: 18000,
            image: samsung2,
            ram: "12GB",
            storage: "512GB"
        }
    ];

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <div className="products1">
            <article className="products1-top">
                <h2>{t('grabBestDeal')} <span>{t('smartphones')}</span></h2>
                <Link to="/products">
                    <button className="products1-top-btn">
                        <p>{t('viewAll')}</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </article>
            <div className="product1-page" data-aos="fade-up">
                {products.map(product => (
                    <article key={product.id} className="product1">
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="img-page1">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="img-page1-des">
                                <p>{product.name}</p>
                                <h2>₹{product.price} <span>₹{product.oldPrice}</span></h2>
                                <h3>{t('save')} - ₹{product.save}</h3>
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
        </div>
    )
}

export default Products1;