import React, {  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Keyboard, Pagination, Navigation, Mousewheel } from "swiper/modules";
import myImage from "../assets/image.png";
import olma from "../assets/olma.png";
import krasofka from "../assets/krasofka.png";
function Sweper() {
 

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='slide'>
            <h1><span>Best Deal Online on smart watches</span>SMART WEARABLE.<span>UP to 80% OFF</span></h1>
            <img src={myImage} alt="rasim" />
            <div className='shadow'>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide olma'>
            <h1><span>Discover the Freshest Apples in Town</span> CRISP, JUICY, DELICIOUS<span>Enjoy the Taste of Nature Every Day</span></h1>
            <img src={olma} alt="rasim" />
            <div className='shadow'>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slide krasofka'>
            <h1><span>Step Up Your Style</span>COMFORTABLE TRENDY<span>UP to 45% OFF</span></h1>
            <img src={krasofka} alt="rasim" />
            <div className='shadow'>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
  }
  
  export default Sweper