import React, { useState, useEffect } from 'react';
import Nav from '../../navigationbar/nav'
import './HomeStyle.css'
import Footer from '../../footer/Footer'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Summer Collection 2024",
      description: "Discover our breathtaking summer collection. Light fabrics, vibrant colors, and trendy designs that will make you stand out.",
      image: "./cover1.webp",
      backgroundColor: "#ffeddb"
    },
    {
      title: "Exclusive Designer Wear",
      description: "Premium designer clothes crafted with perfection. Experience luxury in every stitch.",
      image: "./cover3.webp",
      backgroundColor: "#dbf4ff"
    },
    {
      title: "Sustainable Fashion",
      description: "Eco-friendly clothing that cares for the planet. Join us in making fashion sustainable.",
      image: "./cover2.webp",
      backgroundColor: "#e8ffdb" 
    }
  ];

  const cardData = [
    {
      title: "Trendy T-Shirts",
      description: "Comfortable and stylish t-shirts for every occasion.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/991/934/small_2x/beautiful-model-girl-isolated-png.png",
    },
    {
      title: "Casual Shoes",
      description: "Step out in style with our latest collection of casual shoes.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/044/450/377/small/stylish-young-man-in-plaid-shirt-bow-tie-and-fedora-posing-in-studio-png.png",
    },
    {
      title: "Stylish Accessories",
      description: "Complete your look with our fashionable accessories.",
      image: "https://www.seekpng.com/png/small/245-2451014_connecting-school-servers-around-the-world-indian-school.png",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, );

  return (
    <div className="app">  
      <Nav />
      <div className="hero-slider" style={{ backgroundColor: slides[currentSlide].backgroundColor }}>
        <div className="container">
          <div className="row min-vh-100 align-items-center">
           
            <div className="col-md-6 content-left">
              <h1 className="display-4 fw-bold slide-in-left">
                {slides[currentSlide].title}
              </h1>
              <p className="lead mb-4 slide-in-left delay-1">
                {slides[currentSlide].description}
              </p>
              <button className="btn btn-dark btn-lg slide-in-left delay-2">
                Shop Now
              </button>
            </div>
            
            <div className="col-md-6 content-right">
              <img 
                src={slides[currentSlide].image}
                alt="Fashion Item"
                className="floating-image"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="container my-5">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <div className="card hover-animate">
                <img src={card.image} className="card-img-top" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
<Footer />
    </div>
  );
};

export default Home;