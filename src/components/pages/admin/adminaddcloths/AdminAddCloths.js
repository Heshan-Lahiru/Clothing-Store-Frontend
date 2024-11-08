import React,{useState} from 'react';
import Sidebarcomponent from '../admin_profile/admin';

export default function AdminAddCloths() {
  const [formData, setFormData] = useState({ gendertype : '' , name: '', type: '', price: '', qty: '', description: '', image: null,});

  const handleInputChange = (e) => {const { name, value } = e.target; setFormData({ ...formData, [name]: value });};

  const handleImageChange = (e) => { setFormData({ ...formData, image: e.target.files[0] });};

  const addcloths = async() =>{
  const {gendertype,name, type , price,qty,description,image}  = formData;

  if (!gendertype || !name || !type || !price || !qty || !description || !image) {alert("Please fill out all fields.");return;}
   let isactive = true;
  const datanew = new FormData();
  datanew.append('menClothDao', JSON.stringify({ name, type, price, qty, description ,isactive}));
  datanew.append('multipartFile', image);
 
  if(gendertype==="men"){
    const response =await  fetch("http://localhost:9070/menclothadd", { method: "POST", body: datanew, })
    if (!response.ok) {alert("An error Ocured ...");}
    else{
      await response.json();
      alert("Cloth Added successfully");
    }
    
  }
 else if(gendertype==="women"){  alert(" Women");}
 else if(gendertype==="child"){  alert(" Child");}
  else{
    alert(" Something went wrong");
  }

}


  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3 col-lg-2 p-3 text-bg-dark">
          <Sidebarcomponent />
        </div>

        <div className="col-md-9 col-lg-10 p-5">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="text-center fw-bold mb-5">Add Clothes</h2>
              <form className="mx-1 mx-md-4" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  
                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <select className="form-select rounded-3" name="gendertype" onChange={handleInputChange}>
                        <option value="">Select Gender Type</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="child">Child</option>
                      </select>
                      <label htmlFor="floatingGender">Gender Type</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className="form-control rounded-3"
                        name="name"
                        onChange={handleInputChange}
                        placeholder="Dress Name"
                      />
                      <label htmlFor="floatingName">Dress Name</label>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Dress Picture</label>
                      <input type="file" onChange={handleImageChange} className="form-control rounded-3" />
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="number"
                        className="form-control rounded-3"
                        name="price"
                        onChange={handleInputChange}
                        placeholder="Dress Price"
                      />
                      <label htmlFor="floatingPrice">Dress Price</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating mb-4">
                      <select className="form-select rounded-3" name="type" onChange={handleInputChange}>
                        <option value="">Select Type</option>
                        <option value="tshirts">T-Shirts</option>
                        <option value="shirts">Shirts</option>
                        <option value="trousers">Trousers</option>
                        <option value="jeans">Jeans</option>
                        <option value="shorts">Shorts</option>
                        <option value="skirts">Skirts</option>
                        <option value="watches">Watches</option>
                        <option value="bags">Bags</option>
                        <option value="shoes">Shoes</option>
                      </select>
                      <label htmlFor="floatingType">Type</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="number"
                        className="form-control rounded-3"
                        name="qty"
                        onChange={handleInputChange}
                        placeholder="Dress Qty"
                      />
                      <label htmlFor="floatingQty">Dress Qty</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className="form-control rounded-3"
                        name="description"
                        onChange={handleInputChange}
                        placeholder="Dress Description"
                      />
                      <label htmlFor="floatingDescription">Dress Description</label>
                    </div>
                  </div>
                </div>

                <div className="d-grid gap-2 mb-3">
                  <button type="button" className="btn btn-primary btn-lg rounded-3" onClick={addcloths}>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
