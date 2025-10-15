import React from 'react';
import '../styles/Testimonals.css'; 
import { FaStar } from 'react-icons/fa'; 


const reviews = [
  { id: 1, name: 'Anna Mathew', time: 'one day ago', avatar: 'path/to/anna.jpg', quote: 'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back.' },
  { id: 2, name: 'Gerrin Tom', time: 'one day ago', avatar: 'path/to/gerrin.jpg', quote: 'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back. We booked private dining for our family.' },
  { id: 3, name: 'Mery Eliza', time: 'one day ago', avatar: 'path/to/mery.jpg', quote: 'Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back. We booked private dining for our guests.' },
  { id: 4, name: 'Alex Johnson', time: '2 days ago', avatar: 'path/to/alex.jpg', quote: 'Absolutely fantastic South Indian food! The Tiffin Box never disappoints. Highly recommend the Chicken Chettinad.' },
];

const Testimonials = () => {
  const renderStars = (count = 5) => (
    <div className="star-rating">
      {Array(count).fill().map((_, i) => (
        <FaStar key={i} className="star-icon" />
      ))}
    </div>
  );

  return (
    <section className="testimonials-section">
      <p className="testimonial-subheading">TESTIMONIAL</p>
      <h2 className="testimonial-headline">WHAT OUR CUSTOMERS SAYS</h2>

      <div className="reviews-carousel-container">
        <div className="reviews-carousel-track">
          {reviews.map(review => (
            <div className="review-card" key={review.id}>
              {renderStars()}
              <p className="review-quote">{review.quote}</p>
              
              <div className="reviewer-info">
                <img src={review.avatar} alt={review.name} className="reviewer-avatar" />
                <div className="reviewer-details">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="review-time">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;