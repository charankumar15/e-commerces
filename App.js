import React, { useState, useRef } from "react";
import "./App.css";
import Product from "./redu/Product";
import Cart from "./redu/cart";
import Footer from "./redu/Footer"; 
import Login from "./redu/login";
import coke from "./assets/coke.jpg";
import glas from "./assets/glas.jpg";
import headset from "./assets/headset.jpg";
import joan from "./assets/joan.jpg";
import body from "./assets/body.jpg";
import perfume from "./assets/perfume.jpeg";
import unsplash from "./assets/unsplash.jpg";
import watch from "./assets/watch.jpg";
import things from "./assets/things.mp4";
import logo from "../src/assets/logo.png";
import Swal from "sweetalert2";
import cameraLogo from "./assets/camera logo.png";
import helium from "./assets/helium.jpg";

function App() {
  const productsData = [
    {
      id: 1,
      name: "coke",
      price: 10,
      image: coke,
    },
    {
      id: 2,
      name: "glass",
      price: 20,
      image: glas,
    },
    {
      id: 3,
      name: "headset",
      price: 30,
      image: headset,
    },
    {
      id: 4,
      name: "waterbottle",
      price: 40,
      image: joan,
    },
    {
      id: 5,
      name: "unsplash",
      price: 50,
      image: unsplash,
    },
    {
      id: 6,
      name: "watch",
      price: 60,
      image: watch,
    },
    {
      id: 7,
      name: "body",
      price: 60,
      image: body,
    },
    {
      id: 8,
      name: "perfume",
      price: 60,
      image: perfume,
    },
    {
      id: 9,
      name: "helium ",
      price: 60,
      image: helium,
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleImageUpload = (files) => {
    const selectedImage = files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;

        console.log(imageDataUrl);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      removeFromCart(product);
    } else {
      setCart([...cart, product]);
    }
  };

  const buyNow = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Buy Now Successful",
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  // Function to handle login
  const handleLogin = () => {
    // Perform login logic here (e.g., validate user credentials)
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  // Render the login page if the user is not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Render the product page if the user is logged in
  return (
    <div className="App">
      <div className="container">
        <div id="Home">
          <img src={logo} alt="logo" className="logo" />
          <img
            src={cameraLogo}
            alt="camera logo"
            className="camera-logo"
            onClick={handleClick}
          />
          <h1>brand</h1>

          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="search-bar"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files)}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>

        <video
          src={things}
          autoPlay
          loop
          muted
          className="video-container"
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <div className="button-container mt-5">
          <button className="btn">Online Only</button>
          <button className="btn">Woman</button>
          <button className="btn">Man</button>
          <button className="btn">Kids</button>
          <button className="btn">Beauty</button>
          <button className="btn">Home</button>
          <button className="btn">Brand</button>
          <button className="btn">W-Style</button>
          <button className="btn">View More</button>
        </div>

        <div className="button-container mt-5">
          <button className="btn">New In</button>
          <button className="btn">View All</button>
        </div>

        <div className="products">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              addToCart={() => addToCart(product)}
              buyNow={() => buyNow(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </div>

        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

      
      <Footer />
    </div>
  );
}

export default App;
