import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white" style={{ padding: "60px 0 20px" }}>
      <div className="container">
        <div className="row">
         
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <img 
              src="/logo.png"
              alt="Company Logo"
              className="img-fluid mb-3"
              style={{ maxHeight: '60px' }}
            />
            <p className="text-white-50 small fw-light">
              Welcome to our company! We're dedicated to providing exceptional 
              services and innovative solutions to meet all your needs.
            </p>
            <div className="social-icons mt-4">
              <div className="d-flex gap-2">
                <a href="/" className="text-white btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="/" className="text-white btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="/" className="text-white btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="/" className="text-white btn btn-outline-light btn-sm rounded-circle">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

        
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none hover-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none hover-white">Our Services</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none hover-white">Products</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none hover-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-white-50 text-decoration-none hover-white">Contact Us</a>
              </li>
            </ul>
          </div>

          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4 fw-bold">Contact Us</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill me-2 text-white"></i>
                  <span>NO 22, Panadura, Sri Lanka</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-telephone-fill me-2 text-white"></i>
                  <span>+94 123 456 789</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-2 text-white"></i>
                  <span>clothify@gmail.com</span>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock-fill me-2 text-white"></i>
                  <span>Daily: 8.00 am to 10.00 pm</span>
                </div>
              </li>
            </ul>
          </div>

        
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4 fw-bold">Newsletter</h5>
            <p className="text-white-50 mb-4">
              Subscribe to our newsletter for updates and exclusive offers!
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control bg-dark border-secondary text-white"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
            <p className="text-white-50 small">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

      
        <div className="mt-5">
          <hr className="mb-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <div className="text-white-50">
                © {new Date().getFullYear()} Boo Boutique. All rights reserved.
              </div>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="/" className="text-white-50 text-decoration-none me-3 hover-white">
                Privacy Policy
              </a>
              <a href="/" className="text-white-50 text-decoration-none me-3 hover-white">
                Terms of Use
              </a>
              <a href="/" className="text-white-50 text-decoration-none hover-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-white:hover {
          color: white !important;
          transition: color 0.3s ease;
        }
        .text-white-50 {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .bg-dark {
          background-color: #1a1a1a !important;
        }
      `}</style>
    </footer>
  );
}