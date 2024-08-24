// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Autoplay,FreeMode, Pagination } from 'swiper/modules';
import BikeCard from '../../utils/BikeCard';
import Headline from '../../utils/Headline';

const Featured = () => {
  return (
    <div>
      <Headline text='Featured Bikes'/>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}

        breakpoints={{
            375: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}

        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
        <SwiperSlide className='py-5 mb-5'><BikeCard/></SwiperSlide>
      
        

      </Swiper>
    </div>
  );
};
export default Featured;
