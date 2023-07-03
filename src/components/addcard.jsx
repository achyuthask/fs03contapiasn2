
import React from "react";
import CartCard from "./cardcard";

function AddCart({ cart }) {
    return (
      <div className="cart"  style={{display :"flex", flexWrap:"wrap" }}>
        <h2>Cart</h2>
       
        {cart.map(product => (
           <div   key={product.id}> <CartCard product={product} />
           </div>
          ))}
        </div>
          
     
    


    );
  }

  export default AddCart;