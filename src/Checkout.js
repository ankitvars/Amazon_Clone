import React from "react";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="container">
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h3 className="checkout__titlea">
              Hello,{user ? user.email : "Guest"}
            </h3>
            <h2 className="checkout__title">Your Shoping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          {/* Subtotal of all checkout items will be displayed in this section */}
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
