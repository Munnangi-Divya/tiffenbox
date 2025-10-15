import React from 'react';
import '../styles/OnlineOrder.css'; 
import deliveryGraphic from '../assests/delievery-graphic.jpg'; 
import miniDish from '../assests/mini-dish.jpg';

const OnlineOrder = () => {
  return (
    <section className="online-order-section">
      
      <div className="online-order-left">
        <p className="online-order-subheading">ONLINE ORDER</p>
        <h2 className="online-order-headline">
          FRESH SOUTH INDIAN FLAVORS<br />DELIVERED!
        </h2>
        <p className="online-order-description">
          Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort
          of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh
          and delivered fast, ensuring a delicious experience every time.
        </p>
        <button className="order-online-btn">
          Order Online <span className="arrow">&gt;</span>
        </button>
      </div>

      {/* Right Column: Graphic */}
      <div className="online-order-right">
        {/* Small floating dish image */}
        <img src={miniDish} alt="Mini Dish" className="mini-dish-img" />
        {/* Main delivery graphic */}
        <img src={deliveryGraphic} alt="Delivery Person on Scooter" className="delivery-graphic" />
      </div>
    </section>
  );
};

export default OnlineOrder;