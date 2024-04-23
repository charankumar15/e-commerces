import React from 'react';

function ProductDetail({ name, price, ratings, reviews }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Ratings: {ratings}</p>
      <p>Reviews: {reviews}</p>
    </div>
  );
}

export default ProductDetail;
