import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="mb-20">
      <div className="mt-20 mb-10">
        <SectionTitle
          subHeading={"What your Claints Say"}
          heading={"Testimonials"}
        ></SectionTitle>
      </div>

      <div className="">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((rev) => (
            <SwiperSlide key={rev._id}>
              <div className="mx-20 flex flex-col items-center space-y-5">
                <Rating style={{ maxWidth: 180 }} value={rev.rating} readOnly />
                <FaQuoteLeft className="text-6xl" />
                <p>{rev.details}</p>
                <h3 className="text-orange-600">{rev.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
