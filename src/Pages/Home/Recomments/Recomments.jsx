import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import recommentsImg from "../../../assets/home/slide1.jpg";

const Recomments = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Should try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommentsImg} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sladds</h2>
            <p>
              Sautéed breaded veal escalope with watercress, lemon and veal jus
            </p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommentsImg} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sladds</h2>
            <p>
              Sautéed breaded veal escalope with watercress, lemon and veal jus
            </p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={recommentsImg} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sladds</h2>
            <p>
              Sautéed breaded veal escalope with watercress, lemon and veal jus
            </p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomments;
