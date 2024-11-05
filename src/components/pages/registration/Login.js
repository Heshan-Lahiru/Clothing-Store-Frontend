import React,{useState}  from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
const [formData,setFormData]=useState({email:'', passowrd : ''});

const handleInputChange =(e) =>{const { name, value } = e.target; setFormData({ ...formData, [name]: value });};

const logincustomer = async () => {
    const { email, password } = formData;
    const mypassword = CryptoJS.SHA256(password).toString();
  
    try {
      const response = await fetch("http://localhost:9070/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, mypassword }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Login failed. Please try again."}`);
      } else {
        const responseData = await response.json();
        alert("Customer found: " + responseData.email);
  
        if (responseData.token) {
            localStorage.setItem("jwtToken", responseData.token);
            navigate('/');
         if(responseData.role === "admin"){
          navigate('/adminprofile');
         }
         else{
          navigate('/userprofile');
         }


          }}
      
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

    return (
        <section className="vh-100 bg-light">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card shadow-lg rounded-4">
                  <div className="row g-0">
                    
                  <div className="col-md-6 d-none d-md-block">
                      <img src="https://img.freepik.com/premium-photo/fashion-fabric-theme-3d-abstract-background_893012-52247.jpg" alt="Login"  className="w-100 h-100 rounded-end-4" style={{ objectFit: 'cover' }}/>
                    </div>

                    <div className="col-md-6">
                      <div className="card-body p-4 p-md-5">
                        <h2 className="text-center fw-bold mb-5">Login</h2>
                        
                        <form className="mx-1 mx-md-4">
                     
                          <div className="form-floating mb-4">
                            <input type="email" name="email" className="form-control rounded-3" onChange={handleInputChange}  placeholder="Email Address"  />
                            <label htmlFor="floatingEmail">Email Address</label>
                          </div>

                         <div className="form-floating mb-4">
                            <input  type="password" name="password"  className="form-control rounded-3" onChange={handleInputChange}   placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                          </div>
                         <div className="d-grid gap-2 mb-3">
                            <button  type="button" onClick={logincustomer}   className="btn btn-primary btn-lg rounded-3"  > Login</button>
                          </div>
    
                    
                          <div className="text-center"> Dont have an account? <a href="/signup" className="text-primary text-decoration-none ms-2">Create account </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
