import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        <div className="col-md-3 col-lg-2 p-3 text-bg-dark">
          <div className="d-flex flex-column h-100">
            <a
              href="#"
              className="d-flex align-items-center mb-3 mb-md-0 text-white text-decoration-none"
            >
              <span className="fs-4">Clothyfy</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <Link to="/adminprofile" className="nav-link text-white">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/adminaddcloths" className="nav-link text-white">
                  AddCloths
                </Link>
              </li>
              <li>
                <Link to="/men" className="nav-link text-white">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="nav-link text-white">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/child" className="nav-link text-white">
                  Child
                </Link>
              </li>
              <li>
                <Link to="/customers" className="nav-link text-white">
                  Customers
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
