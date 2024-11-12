import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../../navigationbar/nav'
import  Footer from '../../footer/Footer'

export default function ClothingStore() {
 const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gendertype, setGendertype] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  let shirts = ""; 
  const token = localStorage.getItem('jwtToken');
  const decodedToken = jwtDecode(token);
  useEffect(() => {
    AOS.init({duration: 1000,once: true, offset: 100 });

switch(name){
  case "men-shirts" : shirts = "shirts";showmencloths(); break;
  case "men-tshirts" :  shirts = "tshirts";showmencloths(); break;
  case "men-trousers" : shirts = "trousers";showmencloths(); break;
  case "men-shorts" :  shirts = "shorts";showmencloths(); break;
  case "men-jeans" : shirts = "jeans";showmencloths(); break;
  case "men-watches" :  shirts = "watches";showmencloths(); break;
  case "men-bags"  : shirts = "bags";showmencloths(); break;
  case "men-shoes" : shirts = "shoes";showmencloths(); break;
  case "women-tshirt" :shirts = "tshirts";showwomencloths(); break;
  case "women-shirt" :shirts = "shirts";showwomencloths(); break;
  case  "women-jeans" :shirts = "jeans";showwomencloths(); break;
  case "women-shorts" :shirts = "shorts";showwomencloths(); break;
  case "women-skirts" :shirts = "skirts";showwomencloths(); break;
  case "women-watches" :shirts = "watches";showwomencloths(); break;
  case "women-shoes" :shirts = "bags";showwomencloths(); break;
  case "women-bags" :shirts = "shoes";showwomencloths(); break;
  case "kid-tshirts" :shirts = "tshirts";showkidcloths(); break;
  case "kid-shirts" :shirts = "shirts";showkidcloths(); break;
  case  "kid-jeans" :shirts = "jeans";showkidcloths(); break;
  case "kid-shorts" :shirts = "shorts";showkidcloths(); break;
  case "kid-watches" :shirts = "watches";showkidcloths(); break;
  case "kid-shoes" :shirts = "bags";showkidcloths(); break;
  case "kid-bags" :shirts = "shoes";showkidcloths(); break;

  default :  setError("Invalid category"); setLoading(false); break;
}
  
}, [name]);

  const showmencloths = async () => {
    try {
      setGendertype("men");
      const response = await axios.get('http://localhost:9070/getmencloths/' + shirts); setData(response.data); setLoading(false);
    } catch (error) { setError("Failed to fetch data"); setLoading(false); }
  };

  const showwomencloths = async () => {
    try {
      setGendertype("women");
      const response = await axios.get('http://localhost:9070/getwomencloths/' + shirts); setData(response.data); setLoading(false);
    } catch (error) { setError("Failed to fetch data"); setLoading(false); }
  };

  const showkidcloths = async () => {
    try {
      setGendertype("child");
      const response = await axios.get('http://localhost:9070/getkidcloths/' + shirts); setData(response.data); setLoading(false);
    } catch (error) { setError("Failed to fetch data"); setLoading(false); }
  };

  
  const handleAddToCart = async (item) => {
if(!token){navigate('/login');}
const requestData = { menid: item.menid, cusid: decodedToken.cus_id, type:gendertype };
const womenrequestData = { menid: item.womenid, cusid: decodedToken.cus_id, type:gendertype };
const kidrequestData = { menid: item.kidid, cusid: decodedToken.cus_id, type:gendertype };
  switch(gendertype){
     case "child" : try {
                      const response = await axios.post('http://localhost:9070/addtocart', kidrequestData);
                     alert('Item added to cart:', response.data);
                    } catch (error) { setError("Failed to fetch data");}
                  break;
     case "women" : try {
                      const response = await axios.post('http://localhost:9070/addtocart', womenrequestData);
                     alert('Item added to cart:', response.data);
                    } catch (error) { setError("Failed to fetch data");}
                  break;
     case "men" : 
                    try {
                      const response = await axios.post('http://localhost:9070/addtocart', requestData);
                     alert('Item added to cart:', response.data);
                    } catch (error) { setError("Failed to fetch data");}
                  break;
     default : alert("something went wrong ..."); break;
  }
  };

  const handleBookNow = (item) => {
    console.log('Booked:', item);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert" data-aos="fade-up">
        {error}
      </div>
    );
  }

  return (
    <>
    <Nav />
    <div className="container-fluid p-0">
      
      <div className="bg-light hero-section">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-6" data-aos="fade-right">
              <div className="p-4">
                <h1 className="display-4 fw-bold  mb-3 animate-text">
                  Welcome to {name} Fashion
                </h1>
                <h2 className="h4 text-muted mb-4 animate-text-delay">
                  Discover Our Premium {name} Collection
                </h2>
                <p className="lead animate-text-delay-2">
                  Explore our latest collection of high-quality shirts designed for comfort and style.
                </p>
                <button className="btn btn-primary btn-lg animated-button">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="p-4 text-end">
                <img 
                  src="https://png.pngtree.com/png-clipart/20231027/original/pngtree-wedding-couple-in-yellow-dress-png-image_13445577.png" 
                  alt="Fashion Banner" 
                  className="img-fluid rounded floating-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          Our Featured Products {gendertype}
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {data.map((item, index) => (
            <div className="col" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm animated-card">
                <div className="image-container">
              
                  <img 
                    src={`http://localhost:9070/images/${gendertype}/${item.image}`}
                    className="card-img-top"
                    alt={item.name}
                    style={{ 
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">{item.type}</small>
                  </p>
                  <p className="card-text">
                    {item.description}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="h5 mb-0">${item.price}</span>
                    <span className="badge bg-success">Stock: {item.qty}</span>
                  </div>
                  
                  <div className="d-grid gap-2">
                    <button 
                      className="btn btn-primary animated-button"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn btn-outline-primary animated-button-outline"
                      onClick={() => handleBookNow(item)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <style>
        {`
         
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }

          .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

         
          .animate-text {
            animation: slideIn 1s ease-out;
          }

          .animate-text-delay {
            animation: slideIn 1s ease-out 0.3s both;
          }

          .animate-text-delay-2 {
            animation: slideIn 1s ease-out 0.6s both;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

        
          .floating-image {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

        
          .animated-card {
            transition: all 0.3s ease;
          }

          .animated-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
          }

          .animated-card .image-container {
            overflow: hidden;
          }

          .animated-card img {
            transition: transform 0.3s ease;
          }

          .animated-card:hover img {
            transform: scale(1.1);
          }

        
          .animated-button {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .animated-button:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease;
          }

          .animated-button:hover:after {
            width: 300px;
            height: 300px;
          }

          .animated-button-outline {
            transition: all 0.3s ease;
          }

          .animated-button-outline:hover {
            background-color: var(--bs-primary);
            color: white;
            transform: translateY(-2px);
          }

        
          .page-transition {
            animation: pageLoad 1s ease-out;
          }

          @keyframes pageLoad {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <Footer/>
    </div>
    </>
  );
}