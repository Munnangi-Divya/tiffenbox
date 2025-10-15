import React from 'react';
import '../styles/OurSpecialties.css'; // For styles
import centerGraphic from '../assests/specialties-graphic.jpg'; // Central dish/spices image

const specialtiesData = [
  { 
    title: 'AUTHENTIC SOUTH INDIAN CUISINE', 
    description: 'Our dishes are prepared using traditional recipes to bring you the true flavors of South India.',
    position: 'top-left'
  },
  { 
    title: 'COMFORTABLE DINING EXPERIENCE', 
    description: 'Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.',
    position: 'top-right'
  },
  { 
    title: 'EXPERT CHEFS', 
    description: 'Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.',
    position: 'middle-left'
  },
  { 
    title: 'HEALTH-CONSCIOUS OPTIONS', 
    description: 'From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.',
    position: 'middle-right'
  },
  { 
    title: 'FRESH, QUALITY INGREDIENTS', 
    description: 'We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.',
    position: 'bottom-left'
  },
  { 
    title: 'SEAMLESS ONLINE ORDERING & DELIVERY', 
    description: 'Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.',
    position: 'bottom-right'
  },
];

const OurSpecialties = () => {
  return (
    <section className="specialties-section">
      <p className="specialties-subheading">WHY TIFFIN BOX</p>
      <h2 className="specialties-headline">OUR SPECIALTIES</h2>

      <div className="specialties-content-grid">
        
        {specialtiesData.map((item) => (
          <div key={item.position} className={`specialty-point ${item.position}`}>
            <h3 className="specialty-title">{item.title}</h3>
            <p className="specialty-description">{item.description}</p>
          </div>
        ))}
        
        
        <div className="specialties-center-graphic">
          <img 
            src={centerGraphic} 
            alt="South Indian Dish and Spices" 
            className="center-dish-img" 
          />
          <p className="center-text">OUR SPECIALTIES</p>
        </div>
      </div>
      
      
      <div className="decorative-spoon"></div>
    </section>
  );
};

export default OurSpecialties;