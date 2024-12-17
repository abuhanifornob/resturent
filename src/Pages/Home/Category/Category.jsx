// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import categoryImg1 from "../../../assets/home/slide1.jpg";
import categoryImg2 from "../../../assets/home/slide2.jpg";
import categoryImg3 from "../../../assets/home/slide3.jpg";
import categoryImg4 from "../../../assets/home/slide4.jpg";
import categoryImg5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-6"
      >
        <SwiperSlide>
          <img src={categoryImg1} alt="" />
          <h3 className="text-4xl uppercase shadow-xl text-center -mt-20 shadow-slate-300">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg2} alt="" />
          <h3 className="text-4xl uppercase shadow-xl text-center -mt-20 shadow-slate-300">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg3} alt="" />
          <h3 className="text-4xl uppercase shadow-xl text-center -mt-20 shadow-slate-300">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg4} alt="" />
          <h3 className="text-4xl uppercase shadow-xl text-center -mt-20 shadow-slate-300">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={categoryImg5} alt="" />
          <h3 className="text-4xl uppercase shadow-xl text-center -mt-20 shadow-slate-300">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
