import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
      <div className="bg-white text-dark py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                  <small>NO 22, Panadura, Sri Lanka</small>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-clock-fill text-warning me-2"></i>
                  <small>Daily: 8.00 am to 10.00 pm</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end gap-3">
                <a href="+94123456789" className="text-dark text-decoration-none hover-effect">
                  <i className="bi bi-telephone-fill text-warning me-2"></i>
                  <small>+94 123 456 789</small>
                </a>
                <a href="clothify@gmail.com" className="text-dark text-decoration-none hover-effect">
                  <i className="bi bi-envelope-fill text-warning me-2"></i>
                  <small>clothify@gmail.com</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
        <div className="container">
          <a data-bs-toggle="modal" data-bs-target="#exampleModal"  className="navbar-brand" href="/">
            <img src="/logo.png" alt="Logo" height="60" className="d-inline-block align-top" />
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#home">HOME</a>
              </li>
         

              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link fw-bold" href="/" data-bs-toggle="dropdown">
                  WOMEN'S
                </a>
                <div className="dropdown-menu ">
                  <div className="dropdown-container">
                    <div className="submenu">
                      <h6 className="dropdown-header">Clothing</h6>
                      <a className="dropdown-item " href="/tshirts"> T-Shirts </a>
                      <a className="dropdown-item " href="/jeans">Shirts </a>
                      <a className="dropdown-item " href="/dresses">Jeans</a>
                      <a className="dropdown-item " href="/dresses">Shorts</a>
                      <a className="dropdown-item " href="/dresses">Skirts</a>
                    </div>
                    <div className="submenu">
                      <h6 className="dropdown-header">Accessories</h6>
                      <a className="dropdown-item " href="/jewelry">Earrings</a>
                      <a className="dropdown-item " href="/jewelry">Necklaces</a>
                      <a className="dropdown-item " href="/jewelry">Bracelets</a>
                       <a className="dropdown-item " href="/bags">Bags</a>
                       
                    
                    </div>
                  </div>
                </div>
              </li>

              
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link fw-bold" href="/" data-bs-toggle="dropdown">
                  MEN'S
                </a>
                <div className="dropdown-menu ">
                  <div className="dropdown-container">
                    <div className="submenu">
                      <h6 className="dropdown-header">Clothing</h6>
                      <a className="dropdown-item " href="/shirts">Shirts</a>
                      <a className="dropdown-item " href="/shirts">T Shirt</a>
                      <a className="dropdown-item " href="/shirts">Trousers</a>
                      <a className="dropdown-item " href="/shirts">Shorts</a>
                      <a className="dropdown-item " href="/shirts">Sarong</a>

                         </div>
                    <div className="submenu">
                      <h6 className="dropdown-header">Accessories</h6>
                      <a className="dropdown-item " href="/watches">Watches </a>
                      <a className="dropdown-item " href="/shoes">Shoes</a>
                      <a className="dropdown-item " href="/shoes">Bags</a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link fw-bold" href="/" data-bs-toggle="dropdown">
                  KIDS
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-container">
                    <div className="submenu">
                      <h6 className="dropdown-header">Boys</h6>
                      <a className="dropdown-item " href="/boys-clothing">Shirts</a>
                      <a className="dropdown-item " href="/boys-clothing">T-Shirts</a>
                      <a className="dropdown-item " href="/boys-clothing">Jeans</a>
                      <a className="dropdown-item " href="/boys-clothing">Shorts</a>
                      <a className="dropdown-item " href="/watches">Watches </a>
                      <a className="dropdown-item " href="/shoes">Shoes</a>
                      <a className="dropdown-item " href="/shoes">Bags</a>
                    </div>

                    <div className="submenu">
                      <h6 className="dropdown-header">Girls</h6>
                      <a className="dropdown-item " href="/boys-clothing">Frockes</a>
                      <a className="dropdown-item " href="/boys-clothing">Tops</a>
                      <a className="dropdown-item " href="/boys-clothing">Skirts</a>
                      <a className="dropdown-item " href="/boys-clothing">Shorts</a>
                      <a className="dropdown-item " href="/watches">Watches </a>
                      <a className="dropdown-item " href="/shoes">Shoes</a>
                      <a className="dropdown-item " href="/shoes">Bags</a>
                    </div>

                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold" href="/about">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/contact">CONTACT</a>
              </li>
            </ul>

            <div className="d-flex gap-3">
              <a href="/login" className="btn btn-outline-none">
                <i className="bi bi-person-fill me-2"></i>Login
              </a>
              <a href="/signup" className="btn btn-outline-none">
                <i className="bi bi-person-plus-fill me-2"></i>Sign Up
              </a>
              <a href="/whatsapp" ><img src="./WhatsApp_icon.png" alt="Logo" height="40" className="d-inline-block align-top" /></a>  
              <a href="/profile" > <img src="./Profile.png" alt="Logo" height="40" className="d-inline-block align-top" /></a>

            </div>
          </div>
        </div>
      </nav>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <img src="/logo.png" alt="Logo" height="60" className="d-inline-block align-top" />
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">NO 22, Panadura, Sri Lanka</label>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Daily: 8.00 am to 10.00 pm</label>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">+94 123 456 789</label>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">clothify@gmail.com</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>






      <style jsx>{`
        .hover-effect:hover {
          color: #ffc107 !important;
          transition: color 0.3s ease;
        }
        
        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #000;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link:hover::after {
          width: 70%;
        }

        /* Megamenu styles */
        .has-megamenu {
          position: static !important;
        }

        .megamenu {
          width: 100%;
          border: none;
          border-radius: 0;
          margin-top: 0;
          padding: 1rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .dropdown-container {
          display: flex;
          gap: 2rem;
          padding: 1rem;
        }

        .submenu {
          min-width: 200px;
        }

        /* Hover dropdown trigger */
        .dropdown:hover > .dropdown-menu {
          display: block;
        }

        .dropdown-menu {
          margin-top: 0;
        }

        /* Submenu styles */
        .has-submenu {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .has-submenu::after {
          content: '›';
          margin-left: 0.5rem;
          font-size: 1.2rem;
        }

        .submenu-content {
          display: none;
          position: absolute;
          left: 100%;
          top: 0;
          min-width: 200px;
          background: white;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;
          padding: 0.5rem 0;
        }

        .has-submenu:hover > .submenu-content {
          display: block;
        }

        .dropdown-item {
          padding: 0.5rem 1rem;
          color: #212529;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #000;
          padding-left: 1.;
        }

         @media (max-width: 550px) {
          .dropdown-container {
           display: grid;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;