import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css/animate.min.css';
import Nav from '../../navigationbar/nav'
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
 const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', entry.target.dataset.animation);
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      observer.observe(elem);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const slides = [
    {
      image: "https://ceylonpages.lk/wp-content/uploads/2023/12/WW-Clothing.jpg",
      title: "Summer Collection 2024",
      description: "Discover our breathtaking summer collection. Light fabrics, vibrant colors, and trendy designs that will make you stand out."
    },
    {
      image: "https://stagprovisions.com/cdn/shop/files/STAG_Story_Desktop_11_new.jpg?v=1724415546",
      title: "Exclusive Designer Wear",
      description: "Premium designer clothes crafted with perfection. Experience luxury in every stitch."
    },
    {
      image: "https://scx2.b-cdn.net/gfx/news/hires/2022/clothes-shopping.jpg",
      title: "Sustainable Fashion",
      description: "Eco-friendly clothing that cares for the planet. Join us in making fashion sustainable."
    }
  ];

  const features = [
    { 
      icon: "bi-truck", 
      title: "Fast Delivery", 
      description: "Get your orders delivered quickly to your doorstep." 
    },
    { 
      icon: "bi-person", 
      title: " Fashion", 
      description: "Explore the latest trends in clothing and accessories." 
    },
    { 
      icon: "bi-arrow-repeat", 
      title: "Easy Exchange", 
      description: "Hassle-free exchange policies for your convenience." 
    },
    { 
      icon: "bi-cart", 
      title: "Online Orders", 
      description: "Order your favorite items easily through our online store." 
    }
  ];
  

  const pathimages = [
    {
      image: "https://ceylonpages.lk/wp-content/uploads/2023/12/WW-Clothing.jpg",
      title: "Trendy Kid's Collection",
      description: "Elevate your wardrobe with the latest summer styles. Comfortable and chic designs for every occasion.",
    },
    {
      image: "https://stagprovisions.com/cdn/shop/files/STAG_Story_Desktop_11_new.jpg?v=1724415546",
      title: "Exclusive Men's Wear",
      description: "Find premium-quality clothing tailored for the modern man. Sophistication meets comfort.",
    },
    {
      image: "https://scx2.b-cdn.net/gfx/news/hires/2022/clothes-shopping.jpg",
      title: "Women's Fashion Line",
      description: "Discover the elegance of our women's collection. Beautifully crafted outfits for all seasons.",
    },
  ];

  const gotocategory =() =>{
    navigate('/category')
  }

  const gotoplane =(title) =>{
switch(title){
  case "Trendy Kid's Collection" : navigate('/category'); break;
  case "Exclusive Men's Wear" : navigate('/category'); break;
  case "Women's Fashion Line" : navigate('/category'); break;
}
  }

  return (
    <div>

   <Nav />
    <div className="enhanced-landing-page">
      {/* Hero Slider Section */}
      <div id="heroSlider" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
        style={{ position: 'relative' }}
      >
        
        <img
          src={slide.image}
          className="d-block w-100"
          alt={slide.title}
          style={{
            height: '100vh',
            objectFit: 'cover',
          }}
        />
       
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 1,
          }}
        ></div>

        <div
          className="carousel-caption text-center"
          style={{ position: 'absolute', zIndex: 2 }}
        >
          <h1 className="display-1 fw-bold animate__animated animate__fadeInDown">
            {slide.title}
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            {slide.description}
          </p>
          <button onClick={gotocategory} className="btn btn-primary btn-lg mt-4 me-3 pulse-button animate__animated animate__bounceIn">
            Get Started
          </button>
          <button onClick={gotocategory} className="btn btn-outline-light btn-lg mt-4 glow-button animate__animated animate__bounceIn">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Icon Bar */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-3">
                <div className="text-center animate-on-scroll" data-animation="animate__fadeInUp">
                  <i className={`bi ${feature.icon} icon-large`}></i>
                  <h4 className="mt-3">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



{/* Additional Animated Content */}
<section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="animate-on-scroll" data-animation="animate__fadeInLeft">
                <h2 className="rainbow-text">Step into the world of style</h2>
                <p className="lead ">
                where trends meet timeless fashion. Explore an exclusive collection of men’s, women’s, and kids’ clothing, designed to make every moment special.
                </p>
                <button onClick={gotocategory} className="btn btn-primary btn-lg mt-4 floating-button">
                  Discover More
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_ethical_fashion_for_men_a28a3041_a73b_4b79_a598_dd7267a0489a.jpg" 
                alt="Technology" 
                className="img-fluid rounded shadow animate-on-scroll"
                data-animation="animate__zoomIn"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Animated Paragraphs Section */}
      <section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4">
        <div className="animated-paragraph animate-on-scroll" data-animation="animate__fadeInLeft">
          <h2 className="gradient-text">Style That Defines You</h2>
          <p className="lead">
            Discover the latest trends in fashion for men, women, and kids. 
            Our curated collections bring style and comfort together effortlessly.
          </p>
          <button onClick={gotocategory} className="btn btn-outline-dark btn-lg mt-3">Shop Now</button>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="animated-paragraph animate-on-scroll" data-animation="animate__fadeInRight">
          <h2 className="gradient-text-2">Fashion for Every Occasion</h2>
          <p className="lead">
            From casual wear to formal attire, our store offers clothing and accessories 
            to match every moment in your life.
            Order your favorite items easily
          </p>
          <button onClick={gotocategory} className="btn btn-outline-dark btn-lg mt-3">Explore Collection</button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Three Image Buttons Section */}
      <section className="py-5 bg-dark text-white">
  <div className="container">
    <h2 className="text-center mb-5 animate-on-scroll" data-animation="animate__fadeInDown">
      Choose Your Path
    </h2>
    <div className="row g-4">
      {pathimages.map((path, index) => (
        <div key={index} className="col-md-4">
          <div 
            className="image-button animate-on-scroll" 
            data-animation="animate__zoomIn"
            style={{
              backgroundImage: `url(${path.image})`,
            }}
          >
            <div className="image-button-content">
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <button onClick={() => gotoplane(path.title)} className="btn btn-light btn-lg mt-3">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      

      {/* Call to Action */}
      <section className="py-5 text-dark">
        <div className="container text-center">
          <h2 className="animate-on-scroll" data-animation="animate__flipInX">
            Ready to Start Your Journey?
          </h2>
          <p className="lead mt-3 animate-on-scroll" data-animation="animate__fadeIn">
          Elevate your wardrobe with the latest summer styles.
          </p>
          <div className="mt-4">
            <button onClick={gotocategory} className="btn btn-dark btn-lg me-3 shine-button animate-on-scroll" data-animation="animate__bounceIn">
              Get Started Now
            </button>
            <button onClick={gotocategory} className="btn btn-outline-dark btn-lg ripple-button animate-on-scroll" data-animation="animate__bounceIn">
              See more
            </button>
          </div>
        </div>
      </section>


      <Footer />

      <style>
        {`
          .enhanced-landing-page {
            overflow-x: hidden;
          }

          .carousel-item {
            height: 100vh;
          }

          .carousel-caption {
            bottom: 20%;
            z-index: 2;
          }

          .icon-large {
            font-size: 3rem;
            color: #0d6efd;
          }

          .gradient-text {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s ease infinite;
          }

          .gradient-text-2 {
            background: linear-gradient(45deg, #4ecdc4, #45b7d1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradient 3s ease infinite;
          }

          .rainbow-text {
            background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: rainbow 5s linear infinite;
          }

          .image-button {
            height: 300px;
            background-size: cover;
            background-position: center;
            border-radius: 15px;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
          }

          .image-button:hover {
            transform: translateY(-10px);
          }

          .image-button-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
          }

          .pulse-button {
            animation: pulse 2s infinite;
          }

          .glow-button {
            animation: glow 2s infinite;
          }

          .floating-button {
            animation: float 3s ease-in-out infinite;
          }

          .shine-button {
            position: relative;
            overflow: hidden;
          }

          .shine-button::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: rotate(45deg);
            animation: shine 3s infinite;
          }

          .ripple-button {
            position: relative;
            overflow: hidden;
          }

          .moving-text {
            animation: slide 15s linear infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
            50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
            100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes shine {
            0% { left: -50%; }
            100% { left: 150%; }
          }

          @keyframes rainbow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          @keyframes slide {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          @media (max-width: 768px) {
            .carousel-caption h1 {
              font-size: 2rem;
            }
            
            .image-button {
              height: 200px;
            }
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default Home;