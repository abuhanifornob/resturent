import { MdPhoneInTalk } from "react-icons/md";
const Address = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="text-white bg-orange-500 py-4  ">
            <MdPhoneInTalk className="text-5xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Phone</h2>
            <address>+880 01716203929</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
