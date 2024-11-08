import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Sidebarcomponent from '../admin';

export default function UserProfile() {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        setUserData(decoded);

        fetch("http://localhost:9070/checkadmin", {
          method: "POST",
          body: JSON.stringify({ email: decoded.email }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data === false) {
            navigate('/login'); 
          } 
        })
        .catch(error => {
          console.error("Error checking admin status:", error);
          navigate('/login'); 
        });
      } catch (error) {
        console.error("Failed to decode token", error);
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  if (!userData) return <div className="text-center">Loading...</div>;

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3 col-lg-2 p-3 text-bg-dark">
          <Sidebarcomponent />
        </div>

        <div className="col-md-9 col-lg-10 p-5">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Admin Dashbord</h1>
              
              <div className="text-center mb-4">
                <img
                  src={`http://localhost:9070/images/${userData.image}`}
                  alt="User Profile"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: '150px' }}
                />
              </div>

              <div className="mb-3">
                <h5>Name: <span className="text-muted">{userData.name || "Name not available"}</span></h5>
              </div>
              <div className="mb-3">
                <h5>Email: <span className="text-muted">{userData.email || "Email not available"}</span></h5>
              </div>
              <div className="mb-3">
                <h5>Gender: <span className="text-muted">{userData.gender || "Gender not available"}</span></h5>
              </div>
              <div className="mb-3">
                <h5>Address: <span className="text-muted">{userData.address || "Address not available"}</span></h5>
              </div>
              <div className="mb-3">
                <h5>Mobile Number: <span className="text-muted">{userData.mobilenumber || "Mobile number not available"}</span></h5>
              </div>

              <div className="d-flex justify-content-center mt-4">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
