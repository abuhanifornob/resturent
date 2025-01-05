import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiiousSecret from "../../../hooks/useAxiiousSecret";
import useCart from "../../../hooks/uuseCart";
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiiousSecret();
  const [paymentConfirmStatus, setPaymentconfirmStatus] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const { user } = useContext(AuthContext);
  const [orderCart] = useCart();
  const price = orderCart.reduce((total, item) => total + item.price, 0);
  console.log("Total Price", price);

  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[Strype Payment error]:", error);
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentError("");
    }

    // payment Conferm
    const { paymentIntent, error: paymentConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      });
    if (paymentConfirmError) {
      console.log("[Strype Payment Confirm Error]:", error);
    } else {
      console.log("[Payment Intent]", paymentIntent);
      if (paymentIntent?.status === "succeeded") {
        setPaymentconfirmStatus(paymentIntent);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-12 btn btn-success text-2xl"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {paymentConfirmStatus && (
        <div>
          <p className="text-green-400 text-2xl">{paymentConfirmStatus.id}</p>
        </div>
      )}
      {paymentError && <p className="text-red-600 text-2xl">{paymentError}</p>}
    </div>
  );
};

export default CheckoutForm;
