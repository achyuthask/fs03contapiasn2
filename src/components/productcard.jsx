import { CartContext } from './store/contex';
import React , {useContext}from 'react';
import './productcard.css';

const ProductCard = ({ product }) => {
  
  const { addToCart ,handleDelete} = useContext(CartContext);


  return (
    <div className="card" >
      
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <h6 className="card-text">{product.description}</h6>
        <p className="card-subtitle mb-2 text-muted">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
        <button onClick={() =>handleDelete(product.id)}>delete</button>
      </div>
    </div>
  );
};

export default ProductCard;