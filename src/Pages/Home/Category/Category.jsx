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
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-20">
      <section>
        <SectionTitle
          heading={"Order Online"}
          subHeading={"10:00AM to 10:00PM"}
        ></SectionTitle>
      </section>
      <section>
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
      </section>
      <button className="btn btn-outline border-0 border-b-4 uppercase text-white mt-5">
        view Full menu
      </button>
    </div>
  );
};

export default Category;
