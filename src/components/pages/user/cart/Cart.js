import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from '../../../navigationbar/nav'

export default function Cart() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                if (token) {
                    const decodedToken = jwtDecode(token);
                    const cusid = decodedToken.cus_id;
                    const response = await axios.get(`http://localhost:9070/getcartdata`, { params: { id: cusid } });
                    setData(response.data);
                } else {
                    setError('User not authenticated. Please log in.');
                    navigate('/');
                }
            } catch (error) {
                setError('Failed to fetch cart data');
                navigate('/');
            } finally {
                setIsLoading(false);
            }
        };
        fetchCartData();
    }, [navigate]);

    const deletecartitem = async (id) => {
        try {
            await axios.delete('http://localhost:9070/cartdelete/' + id);
            window.location.reload();
        } catch (error) {
            setError('Failed to delete item');
        }
    };

  
    const formatPrice = (price) => {
        const numPrice = Number(price);
        return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
    };

    const calculateTotal = () => {
        return data.reduce((total, item) => total + (Number(item.price) * item.qty), 0);
    };

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <Nav />
       
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="display-4 text-center mb-4">Shopping Cart</h1>
                </div>
            </div>

            {data.length === 0 ? (
                <div className="text-center">
                    <div className="alert alert-info">
                        Your cart is empty
                    </div>
                    <button 
                        className="btn btn-primary mt-3"
                        onClick={() => navigate('/products')}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <img
                                                        src={`http://localhost:9070/images/${item.gendertype}/${item.image}`}
                                                        alt={item.name}
                                                        className="img-thumbnail"
                                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                    />
                                                </td>
                                                <td className="fw-semibold">{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>
                                                    <small className="text-muted">
                                                        {item.description}
                                                    </small>
                                                </td>
                                                <td className="fw-bold">${formatPrice(item.price)}</td>
                                                <td>{item.qty}</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deletecartitem(item.cartsid)}
                                                    >
                                                        <i className="bi bi-trash"></i> Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-4 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <button 
                                        className="btn btn-outline-primary"
                                        onClick={() => navigate('/')}
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                                <div className="col-md-6 text-end">
                                    <h4 className="mb-3">
                                        Total: <span className="text-primary">${formatPrice(calculateTotal())}</span>
                                    </h4>
                                    <button className="btn btn-primary btn-lg">
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
        </>
    );
}