import React from "react";
import {Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "./SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51IhriuEtxTtlOvWP1LwENsVaEgmnuvKwJupft2QIZhqKtA0CP8vIiFE9JqlHeWChBLxAYKQbHYQdlk0aFiYadaTg00nn1oxNcH"
);

const PaymentMethod = ({paymentProcess}) => {
  return (
    <Elements stripe={stripePromise}>
     <SplitCardForm paymentProcess={paymentProcess}/>
    </Elements>
  );
};

export default PaymentMethod;
