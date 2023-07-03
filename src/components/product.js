import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './productcard'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="row" style={{display :"flex", flexWrap:"wrap" }}>
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  ); 
};

export default ProductList;
