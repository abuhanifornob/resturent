/* eslint-disable react/prop-types */

const Cover = ({ img, cvHeading, description }) => {
  return (
    <div
      className=" bg-fixed p-16 w-full h-full"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-slate-900 px-20 py-10 bg-opacity-50 text-white">
        <h3 className="text-center text-6xl uppercase text-orange-600 mb-4">
          {cvHeading}
        </h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Cover;
