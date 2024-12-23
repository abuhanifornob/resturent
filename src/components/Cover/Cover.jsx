/* eslint-disable react/prop-types */

const Cover = ({ img, cvHeading, description }) => {
  return (
    <div
      className=" bg-fixed px-20 py-40"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-slate-900 bg-opacity-50 p-16 text-white">
        <h3 className="text-center text-6xl uppercase text-orange-600 mb-4">
          {cvHeading}
        </h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Cover;
