import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import { useQuery } from "@tanstack/react-query";
import DateDisplay from "../../../components/DateDisplay/DateDisplay";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiiousSecret();
  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["paymentHistory", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/${user.email}`);
      return res.data;
    },
  });

  console.log(paymentHistory);
  return (
    <div>
      <SectionTitle
        subHeading={"At a Glance!"}
        heading={"payment history"}
      ></SectionTitle>
      <div>
        <div className="mt-16">
          <div className="flex justify-between">
            <h2 className="uppercase text-4xl">
              Total payments:{paymentHistory.length}
            </h2>
          </div>
          <div className="overflow-x-auto mt-10 w-full">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-orange-400 rounded-t-2xl">
                <tr className="uppercase text-white text-xl">
                  <th>Email</th>
                  <th>Category</th>
                  <th>Total Price</th>
                  <th> payment Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {paymentHistory.map((item) => (
                  <tr key={item._id} className="text-xl">
                    <td>{item.email}</td>
                    <td className="">{item.transactionId}</td>
                    <td>${item.price}</td>
                    <th>
                      <DateDisplay date={item.date} />
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
