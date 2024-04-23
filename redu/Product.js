import React, { useState } from 'react';

// Define product details
const productDetails = {
  coke: {
    description: 'Coke is a carbonated soft drink.',
    ingredients: 'Water, sugar, carbon dioxide, caffeine, phosphoric acid, caramel color, natural flavors.',
    nutritionFacts: 'Calories: 140, Total Fat: 0g, Sodium: 45mg, Total Carbohydrates: 39g, Sugars: 39g, Protein: 0g',
  },
  glass: {
    description: 'A glass for beverages.',
    material: 'Glass',
    capacity: '300ml',
  },
  headset: {
    description: 'Wireless headset for audio playback.',
    features: 'Bluetooth connectivity, noise cancellation, long battery life.',
    compatibility: 'Compatible with most devices supporting Bluetooth.',
  },
  waterbottle: {
    description: 'Reusable water bottle.',
    material: 'Plastic',
    capacity: '500ml',
    features: 'BPA-free, leak-proof design, ergonomic grip.',
  },
  unsplash: {
    description: 'Print of a beautiful landscape photograph.',
    size: '18" x 24"',
    frameType: 'Wooden frame with acrylic glass.',
  },
  watch: {
    description: 'Elegant wristwatch.',
    material: 'Stainless steel',
    features: 'Analog display, water-resistant, adjustable strap.',
  },
  bodywash: {
    description: 'Refreshing body wash for daily use.',
    scent: 'Lavender and chamomile',
    volume: '250ml',
  },
  perfume: {
    description: 'Fragrance for men or women.',
    scent: 'Sandalwood and jasmine',
    volume: '50ml',
  },
};

const Product = ({ name, price, image, addToCart, buyNow }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [bought, setBought] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    addToCart();
  };

  const handleBuyNow = () => {
    setBought(true);
    buyNow();
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>${price}</p>
      <div className="product-buttons">
        {!addedToCart && !bought && (
          <>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </>
        )}
        {!bought && (
          <button onClick={toggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        )}
      </div>
      {showDetails && (
        <div className="product-details">
          <p>Product Details:</p>
          {productDetails[name] && Object.entries(productDetails[name]).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
