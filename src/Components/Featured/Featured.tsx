// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import BikeCard from "../../utils/BikeCard";
import Headline from "../../utils/Headline";
import { useGetMostRentedBikeQuery } from "../../redux/features/admin/bikesApi";
import Loading from "../../utils/Loading";
import { TBikeInfo } from "../AllBikeTable/AllBikeTable";

const Featured = () => {
  const { data: mostRented, isLoading } = useGetMostRentedBikeQuery(undefined, {
    pollingInterval: 1500,
  });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!mostRented || mostRented.data.length === 0) {
    return (
      <div>
        <p>No data available</p>
      </div>
    );
  }
  return (
    <div className="space-y-5">
      <Headline text="Featured Bikes" />
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
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        {mostRented.data.map((rented: TBikeInfo, index: string) => (
          <SwiperSlide key={index} className="flex justify-center items-center py-5 mb-5">
            <BikeCard rented={rented} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Featured;
