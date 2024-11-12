import React, { useState, useEffect } from 'react';
import Sidebarcomponent from '../admin_profile/admin';
import axios from 'axios';

export default function AdminCustomers() {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:9070/getcustomers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid p-0">
      <button 
        className="btn btn-dark d-lg-none position-fixed top-0 start-0 mt-2 ms-2 z-3"
        onClick={toggleSidebar}
        style={{ zIndex: 1030 }}
      >
        ☰
      </button>

      <div className="row g-0 min-vh-100">
        <div 
          className={`sidebar col-lg-2 bg-dark text-white ${isSidebarOpen ? 'show' : ''}`}
          style={{
            position: 'fixed',
            height: '100vh',
            zIndex: 1020,
            transition: 'transform 0.3s ease-in-out',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'
          }}
        >
          <div className="p-3">
            <button 
              className="btn btn-light d-lg-none float-end mb-3"
              onClick={toggleSidebar}
            >
              ×
            </button>
            <Sidebarcomponent />
          </div>
        </div>

        <div 
          className="col-12 col-lg-10 offset-lg-2"
          style={{
            minHeight: '100vh',
            overflowY: 'auto',
            paddingTop: '60px'
          }}
        >
          <div className="p-3 p-lg-5">
            <h1 className="mb-4">Customers</h1>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th scope="col">Mobile Number</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img 
                          src={`http://localhost:9070/images/users/${item.image}`}
                          alt={item.name}
                          className="rounded-circle"
                          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.address}</td>
                      <td>{item.mobilenumber}</td>
                      <td>
                       
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div 
          className="position-fixed top-0 start-0 h-100 w-100 bg-dark d-lg-none"
          style={{ opacity: 0.5, zIndex: 1010 }}
          onClick={toggleSidebar}
        ></div>
      )}

      <style>
        {`
          @media (min-width: 992px) {
            .sidebar {
              transform: translateX(0) !important;
            }
          }
          
          .sidebar.show {
            transform: translateX(0) !important;
          }
          
          .table-responsive {
            overflow-x: auto;
          }
          
          .table th, .table td {
            vertical-align: middle;
          }
          
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </div>
  );
}