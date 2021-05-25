import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButtonCheckout = ({ price }) => {
  const priceForStripe = price * 100;
  const publicableKey =
    "pk_test_51IuxAPF8wmmhrdSC3cybdAi6GVKyBYhPGmGLFItGBo3uNLpS4GACaCpOal0wWF8JZ2rh00TwvuTX7yoEO79RDY4c00MKr2xV1h";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      lable="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicableKey}
    />
  );
};

export default StripeButtonCheckout;
