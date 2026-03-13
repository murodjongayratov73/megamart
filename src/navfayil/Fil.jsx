import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Fil() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleFilterClick = (category) => {
        navigate(`/products?category=${encodeURIComponent(category)}`);
    };

    return (
        <div className="fil">
            <button className="fil-btn" onClick={() => handleFilterClick('Groceries')}>
                🛒 {t('groceries')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Premium Fruits')}>
                🍎 {t('premiumFruits')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Home & Kitchen')}>
                🏠 {t('homeKitchen')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Fashion')}>
                👕 {t('fashion')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Electronics')}>
                📱 {t('electronics')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Beauty')}>
                💄 {t('beauty')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Home Improvement')}>
                🔧 {t('homeImprovement')}
            </button>
            <button className="fil-btn" onClick={() => handleFilterClick('Sports, Toys & Luggage')}>
                ⚽ {t('sportsToys')}
            </button>
        </div>
    )
}

export default Fil;