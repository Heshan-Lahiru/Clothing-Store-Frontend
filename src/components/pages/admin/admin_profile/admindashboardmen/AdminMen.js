import React,{useState} from 'react'
import Sidebarcomponent from '../admin';
import axios from 'axios'

export default function AdminMen() {
  const [data, setData] = useState([]);

  axios.get('http://localhost:9070/getmencloths')
  .then(response => {
      setData(response.data); })
    .catch(error => {
   console.log("error")
});

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3 col-lg-2 p-3 text-bg-dark">
          <Sidebarcomponent />
        </div>

        <div className="col-md-9 col-lg-10 p-5">
          <div className="card shadow-lg">
          <h1>Men</h1>
          <ul>
                {data.map((item, index) => (
                    <ul key={index}>
                    <li >{item.name}</li> 
                    <li >{item.type}</li> 
                    <img src={`http://localhost:9070/images/men/${item.image}`} alt="dress" className="img-fluid rounded-circle" style={{ maxWidth: '150px' }} />
                    <li >{item.price}</li> 
                    <li >{item.qty}</li> 
                    <li >{item.description}</li>
                    </ul>
                    
                ))}
            </ul>
          </div>
          </div>
          </div>
          </div>
  )
}
