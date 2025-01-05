/* eslint-disable react/prop-types */
const DateDisplay = ({ date }) => {
  const formatDate = (isoDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date(isoDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  return (
    <div>
      <p>{formatDate(date)}</p>
    </div>
  );
};

export default DateDisplay;
