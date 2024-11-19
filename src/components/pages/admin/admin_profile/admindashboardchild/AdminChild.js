import React, { useState, useEffect } from 'react';
import Sidebarcomponent from '../admin';
import axios from 'axios';

export default function AdminWomen() {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [updatedata, setUpdateData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [imagedata, setImageData] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:9070/getadminkidcloths')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9070/deletekidcloth/${id}`)
      .then(() => {
        fetchData();
      })
      .catch(error => {
        console.log("Delete error:", error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  const updatesetdata = (item) =>{
    setUpdateData(item);
    setImagePreview(item.image);
    setImageData(item.image);
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    
     const handleFileChange = (e) => {
        const file = e.target.files[0];
        setUpdateData({
          ...updatedata,
          image: file, 
        });
        setImagePreview(URL.createObjectURL(file)); 
      };
    
      const updateform = () => {
        const { kidid, name, type, price, qty, description, isactive, image } = updatedata;
        if (!name || !type || !price || !qty || !description) {
          alert("Please fill all required fields!");
          return;
        }
        const formData = new FormData();
        formData.append(
          'ClothDao',
          JSON.stringify({ kidid, name, type, price, qty, description, isactive })
        );
      
        if (image instanceof File) {
          formData.append('multipartFile', image);
        } else {
          formData.append('imageName', imagedata);
        }
      
        console.log("Form data:", Array.from(formData.entries()));
      
        axios
          .put('http://localhost:9070/kidclothupdate', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log("Update successful:", response.data);
            fetchData();
            alert("Update successful");
            const modalCloseButton = document.querySelector('.btn-close');
            if (modalCloseButton) {
              modalCloseButton.click();
            }
          })
          .catch((error) => {
            console.error("Update error:", error);
            alert("Failed to update item");
          });
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
            <h1 className="mb-4">Child's Clothing</h1>
            
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img 
                          src={`http://localhost:9070/images/child/${item.image}`}
                          alt={item.name}
                          className="rounded"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>${item.price}</td>
                      <td>{item.qty}</td>
                      <td>
                        <div style={{ maxWidth: '200px', whiteSpace: 'pre-wrap' }}>
                          {item.description}
                        </div>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button 
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(item.kidid)}
                          >
                            Delete
                          </button>
                          <button 
                            className="btn btn-primary btn-sm"
                          data-bs-toggle="modal" data-bs-target="#exampleModal"
                          onClick={() => updatesetdata(item)}
                          >
                            Update
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


 {/* update box form */}

 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
          <div class="mb-3">
            <label class="col-form-label">Name:</label>
            <input type="text" class="form-control" value={updatedata.name} onChange={handleChange}  name='name' />
          </div>

          <div className="mb-4">
                <label className="form-label">Dress Picture:</label>
                <input type="file" onChange={handleFileChange} className="form-control rounded-3" />
                {imagePreview && (
                  <img 
                    src={imagePreview.startsWith("blob:") ? imagePreview : `http://localhost:9070/images/child/${imagePreview}`} 
                    alt="Selected" 
                    className="mt-3 rounded" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                  />
                )}
              </div>

          <div class="mb-3">
            <label class="col-form-label">Type:</label>
            <select className="form-select rounded-3" value={updatedata.type} onChange={handleChange}  name="type" >
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
          </div>
          <div class="mb-3">
            <label class="col-form-label">Price:</label>
            <input type="text" class="form-control" onChange={handleChange}  value={updatedata.price} name='price' />
          </div>
          <div class="mb-3">
            <label class="col-form-label">Quantity:</label>
            <input type="text" class="form-control" onChange={handleChange}  value={updatedata.qty} name='qty' />
          </div>
          <div class="mb-3">
            <label class="col-form-label">Description:</label>
            <input type="text" class="form-control" onChange={handleChange}  value={updatedata.description} name='description' />
          </div>
          <div class="mb-3">
            <label class="col-form-label">Is Active:</label>
             <select className="form-select rounded-3"  value={updatedata.isactive} onChange={handleChange}  name="isactive" >
              <option value="true">True</option>
              <option value="false">False</option>
              </select>
            </div>
         
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={updateform} class="btn btn-primary">Update</button>
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
          
          .table td {
            max-width: 250px;
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