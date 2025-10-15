import React from 'react';
import '../styles/FeaturedMenu.css'; 
import dishImage from '../assests/dish-item.jpg'; 

const menuItems = [
  { id: 1, name: 'Chicken Chettinad', price: '£9.99', image: dishImage },
  { id: 2, name: 'Chicken Chettinad', price: '£9.99', image: dishImage },
  { id: 3, name: 'Chicken Chettinad', price: '£9.99', image: dishImage },
  
];

const FeaturedMenu = () => {
  return (
    <section className="featured-menu-section">
      <p className="featured-menu-subheading">FEATURED MENU</p>
      <h2 className="featured-menu-headline">DISCOVER OUR MOST POPULAR DISHES</h2>

      <div className="menu-items-container">
        {menuItems.map(item => (
          <div className="menu-item" key={item.id}>
            <div className="menu-item-image-wrapper">
              <img src={item.image} alt={item.name} className="menu-item-image" />
            </div>
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-price">{item.price}</p>
          </div>
        ))}
      </div>

      <button className="explore-menu-btn">
        Explore Full Menu <span className="arrow">&gt;</span>
      </button>
    </section>
  );
};

export default FeaturedMenu;
