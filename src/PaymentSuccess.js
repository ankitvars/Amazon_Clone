import React from "react";
import Header from "./Header";
import "./PaymentSuccess.css";

function PaymentSuccess() {
  return (
    <div className="container">
      <Header />
      <div className="success__div">
        <h1>Your Payment is successful!</h1>
      </div>
    </div>
  );
}

export default PaymentSuccess;
