import samsung from "../assets/image-35.png";
import kosmetika from "../assets/kasmetika.png";
import kirmoshina from "../assets/kirmoshina.jpg";
import mebel from "../assets/mebel.jpg";
import soat from "../assets/soat.webp";
import gul from "../assets/gul.jpg";
import taqinchoq from "../assets/taqinchoq.png";
import { useTranslation } from 'react-i18next';

function Products2() {  
    const { t } = useTranslation();

    return (
        <div className="products2">
            <article className="products2-top">
                <h2>{t('shopTopCategories')} <span>{t('topCategories')}</span></h2>
            </article>
            <article className="porducts2-page">
                <div className="product2">
                    <button className="product2-img">
                        <img src={samsung} alt="" />
                    </button>
                    <p>{t('mobile')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={kosmetika} alt="" />
                    </button>
                    <p>{t('cosmetics')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={kirmoshina} alt="" />
                    </button>
                    <p>{t('electronics')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={mebel} alt="" />
                    </button>
                    <p>{t('furniture')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={soat} alt=""/>
                    </button>
                    <p>{t('watches')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={gul} alt="" />
                    </button>
                    <p>{t('decor')}</p>
                </div>
                <div className="product2">
                    <button className="product2-img">
                        <img src={taqinchoq} alt="" />
                    </button>
                    <p>{t('accessories')}</p>
                </div>
            </article>
        </div>
    )
}

export default Products2;