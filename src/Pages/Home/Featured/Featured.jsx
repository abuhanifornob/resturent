import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featuredBg mx-10 py-20 bg-fixed text-white">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center mx-36 my-16 text-white bg-slate-500 bg-opacity-40 p-5">
        <img className="md:w-1/2  w-fit " src={featureImg} alt="" />
        <div className="ms-10">
          <p className="text-xl">December-2025</p>
          <p className="uppercase text-3xl ">Where can i get Somes?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis in
            quos itaque ab mollitia nesciunt dicta sint officia, illum unde
            obcaecati quia hic. Facere molestias magni alias nostrum aliquam
            consequatur expedita nesciunt eligendi minus quod voluptas porro
            ipsum voluptatibus delectus dolorem ipsam a aperiam corporis,
            quaerat ut est aliquid repellendus.
          </p>
          <button className="btn btn-outline border-0 border-b-4 uppercase text-white mt-5">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
