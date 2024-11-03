import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

export default function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', gender: '', mypassword: '', repassword: '', address: '', mobilenumber: '', image: null,});

    const handleInputChange = (e) => {const { name, value } = e.target; setFormData({ ...formData, [name]: value });};

    const handleImageChange = (e) => { setFormData({ ...formData, image: e.target.files[0] });};

    const saveCustomer = async () => {
        const { name, email, gender, mypassword, repassword, address, mobilenumber, image } = formData;

        if (!name || !email || !gender || !mypassword || !repassword || !address || !mobilenumber || !image) {alert("Please fill out all fields.");return;}

        if (mypassword !== repassword) {alert("Passwords do not match.");return;}

        if (mypassword.length <8 || mypassword.length >15) {alert("Password length must be 8");return;}

        if (mobilenumber.length !== 10) {alert("Invalid mobile number.");return;}

        const password = CryptoJS.SHA256(mypassword).toString(); 

    

        const datanew = new FormData();
        datanew.append('customerDao', JSON.stringify({ name, email, gender, password, address, mobilenumber }));
        datanew.append('multipartFile', image);

        
        const response =await  fetch("http://localhost:9070/register", { method: "POST", body: datanew, })

        if (!response.ok) {alert("An error Ocured ...");}

         await response.json();
        alert("Customer registered successfully");
           

    };

    return (
        <section className="vh-100 bg-light">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card shadow-lg rounded-4">
                  <div className="row g-0">
                    
                    <div className="col-md-6">
                      <div className="card-body p-4 p-md-5">
                        <h2 className="text-center fw-bold mb-5">Sign Up</h2>
                        
                        <form className="mx-1 mx-md-4" onSubmit={(e) => e.preventDefault()}>
                      
                          <div className="form-floating mb-4">
                            <input  type="text"  className="form-control rounded-3"  name="name"  placeholder="Your Name" onChange={handleInputChange} />
                            <label htmlFor="floatingName">Your Name</label>
                          </div>
    
                      <div className="form-floating mb-4">
                            <input type="email" className="form-control rounded-3" name="email"  placeholder="Email Address" onChange={handleInputChange} />
                            <label htmlFor="floatingEmail">Email Address</label>
                          </div>
    
                        
                          <div className="mb-4">
                            <label className="form-label">Profile Picture</label>
                            <input type="file" className="form-control rounded-3"onChange={handleImageChange} />
                          </div>
    
                        
                          <div className="form-floating mb-4">
                            <select className="form-select rounded-3" name="gender"onChange={handleInputChange} >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="non-binary">Non-binary</option>
                              <option value="transgender">Transgender</option>
                            </select>
                            <label htmlFor="floatingGender">Gender</label>
                          </div>
    
                       
                          <div className="form-floating mb-4">
                            <input type="password" className="form-control rounded-3" name="mypassword"  placeholder="Password" onChange={handleInputChange} />
                            <label htmlFor="floatingPassword">Password</label>
                          </div>
    
                         
                          <div className="form-floating mb-4">
                            <input type="password" className="form-control rounded-3" name="repassword"  placeholder="Confirm Password"onChange={handleInputChange}/>
                            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                          </div>
    
                        
                          <div className="form-floating mb-4">
                            <input type="text"   className="form-control rounded-3" name="address"  placeholder="Address" onChange={handleInputChange} />
                            <label htmlFor="floatingAddress">Address</label>
                          </div>
    
                         
                          <div className="form-floating mb-4">
                            <input type="tel" className="form-control rounded-3"  name="mobilenumber" placeholder="Mobile Number" onChange={handleInputChange} />
                            <label htmlFor="floatingMobile">Mobile Number</label>
                          </div>
    
                          
                          <div className="d-grid gap-2 mb-3">
                            <button type="button" className="btn btn-primary btn-lg rounded-3" onClick={saveCustomer}>Register</button>
                          </div>
    
                    
                          <div className="text-center"> Already have an account? <a href="/login" className="text-primary text-decoration-none ms-2">Login here</a></div>
                        </form>
                      </div>
                    </div>
    
                 
                    <div className="col-md-6 d-none d-md-block">
                      <img src="https://img.freepik.com/premium-photo/fashion-fabric-theme-3d-abstract-background_893012-52247.jpg" alt="Login"  className="w-100 h-100 rounded-end-4" style={{ objectFit: 'cover' }}  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
