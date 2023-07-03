
import React from 'react';
import './productcard.css';


const CartCard = ({ product }) => {
   



  return (
    <div className="card" >
      
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <h6 className="card-text">{product.description}</h6>
        <p className="card-subtitle mb-2 text-muted">${product.price}</p>
        
      </div>
    </div>
  );
};

export default CartCard;