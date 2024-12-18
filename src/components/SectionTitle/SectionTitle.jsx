/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto w-4/12 text-center">
      <p className="text-yellow-500 mb-4">---{subHeading}---</p>
      <h3 className="text-3xl border-y-4 py-2 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
