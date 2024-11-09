import React,{useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
 
export default function ClothingStore() {
  const [data, setData] = useState([]);
 const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
const name = queryParams.get('name');

const showmencloths =async () => {
  axios.get('http://localhost:9070/getmencloths')
  .then(response => {
                setData(response.data); })
    .catch(error => {
   console.log("error")
});
}

if(name === "women"){alert('women')}
else if(name === "men"){showmencloths()}
else if(name === "kid"){alert('kid')}
else{alert('nothing')}



  return (
    <div>
       <h1>Welcome to the Clothing Store, {name}!</h1>
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
  )
}
