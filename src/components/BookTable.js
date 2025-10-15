import React from 'react';
import '../styles/BookTable.css'; 
import tableImage from '../assests/tabls-seeting.jpg'; 

const BookTable = () => {
  
  const descriptionText = "Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time.";

  return (
    <section className="book-table-section">
      
      <div className="book-table-left">
        <img 
          src={tableImage} 
          alt="Elegant Table Setting with Wine" 
          className="table-image" 
        />
        
        <div className="image-overlay"></div>
      </div>

      
      <div className="book-table-right">
        <p className="book-table-subheading">BOOK TABLE</p>
        <h2 className="book-table-headline">
          PLANNING A MEAL AT THE TIFFIN BOX?
        </h2>
        <p className="book-table-description">
          {descriptionText}
        </p>
        <button className="book-table-btn">
          Book Table <span className="arrow">&gt;</span>
        </button>
      </div>
    </section>
  );
};

export default BookTable;