import React from 'react'

export default function SignUp() {

    function savecustomer(){

    let name = document.getElementById("inputname").value;
    let email = document.getElementById("inputemail").value;
    let image = document.getElementById("inputimage").value;
    let gender = document.getElementById("inputgender").value;
    let password = document.getElementById("inputpassword").value;
    let repassword = document.getElementById("inputrepeatpassword").value;
    let address = document.getElementById("inputaddress").value;
    let mobilenumber = document.getElementById("inputmobilenumber").value;

    if(name === "" || email === "" || image === "" || gender ==="" || password === "" || repassword === "" || address === "" || mobilenumber === "" ){alert("form correctly fill please ......")}
    else{ 
   if(password === repassword){
       
            let jsondata={
                    "name" : name,
                    "email" : email,
                    "image" : image,
                    "gender" : gender,
                    "password" : password,
                    "address" : address,
                    "mobilenumber" : mobilenumber
                 }
                  savedata(jsondata);
              }
   else{alert("password Isnt Match .....") }
  }
    }

function emailcheck(jsondata){
  fetch("http://localhost:9070/register",
    {
      method: "POST" ,
      body: JSON.stringify(jsondata),
      headers:
      {
        "content-type" : "application/json"
      }
    }
  )
  .then(res => res.json())
  .then(data => {
   alert("register successfull ....");
  })
}


function savedata(jsondata){
  fetch("http://localhost:9070/emailvalidation",
    {
      method: "POST" ,
      body: JSON.stringify(jsondata),
      headers:
      {
        "content-type" : "application/json"
      }})
  .then(res => res.json())
  .then(data => {
  if(data === true){ alert("email already exits  ....")}
  else{emailcheck(jsondata);}
  })}
  return (
    <div>

 <section className="vh-100" >
  <div className="container h-100" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px' }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" >

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="inputname" className="form-control" />
                      <label className="form-label">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="inputemail" className="form-control" />
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="file" id="inputimage" className="form-control" />
                      <label className="form-label">Your Image</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                    <select  className="form-control" name="inputgender" id="inputgender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="transgender">Transgender</option>
                  </select>
                      <label className="form-label">Gender</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="inputpassword" className="form-control" />
                      <label className="form-label" >Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="inputrepeatpassword" className="form-control" />
                      <label className="form-label" >Repeat your password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="inputaddress" className="form-control" />
                      <label className="form-label">Your Address</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="inputmobilenumber" className="form-control" />
                      <label className="form-label">Your Mobile Number</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" >
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={savecustomer}  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="/signupcover.gif"
                  className="img-fluid" alt="Sample "/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
