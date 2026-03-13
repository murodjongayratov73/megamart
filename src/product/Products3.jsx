import gilos from "../assets/gilos.jpg";
import bodring from "../assets/bodring.webp";
import mango from "../assets/mango.jpg";
import mandarin from "../assets/mandarin.jpg";
import olma from "../assets/olma.png";
import maraquy from "../assets/maraqui.png";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Products3() {  
    const { t } = useTranslation();

    return (
        <div className="products3">
            <article className="products3-top">
                <h2>{t('daily')} <span>{t('essentials')}</span></h2>
                <Link to="/products">
                    <button className="products3-top-btn">
                        <p>{t('viewAll')}</p>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#008ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Link>
            </article>
            <div className="products3-page">
                <div className="product3">
                    <button className="product3-img">
                        <img src={gilos} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
                <div className="product3">
                    <button className="product3-img">
                        <img src={bodring} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
                <div className="product3">
                    <button className="product3-img">
                        <img src={mango} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
                <div className="product3">
                    <button className="product3-img">
                        <img src={mandarin} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
                <div className="product3">
                    <button className="product3-img">
                        <img src={olma} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
                <div className="product3">
                    <button className="product3-img">
                        <img src={maraquy} alt="" />
                    </button>
                    <p>{t('upTo50')}</p>
                </div>
            </div>
        </div>
    )
}

export default Products3;