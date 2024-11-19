
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Signup from './components/pages/registration/SignUp';
import Login from './components/pages/registration/Login';
import UserProfile from './components/pages/user/UserProfile';
import AdminProfile from './components/pages/admin/admin_profile/adminprofile/AdminProfile';
import Admin from './components/pages/admin/admin_profile/admin';
import Adminaddcloths from './components/pages/admin/adminaddcloths/AdminAddCloths';


import Profile from './components/pages/admin/admin_profile/adminprofile/AdminProfile';
import Men from './components/pages/admin/admin_profile/admindashboardmen/AdminMen';
import Child from './components/pages/admin/admin_profile/admindashboardchild/AdminChild';
import Women from './components/pages/admin/admin_profile/admindashboardwomen/AdminWomen';
import Customers from './components/pages/admin/admincustomers/AdminCustomers';

import ClothingStore from './components/pages/clothingstore/ClothingStore';
import Cart from './components/pages/user/cart/Cart';

import AboutUs from './components/pages/aboutus/AboutUs';
import ContactUs from './components/pages/contactus/ContactUs';
import Category from './components/pages/category/Category';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/signup" element={<Signup />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/admin" element={<Admin />} />
                <Route path="/adminprofile" element={<Profile />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/child" element={<Child />} />
                <Route path="/customers" element={<Customers />} />
         <Route path="/adminaddcloths" element={<Adminaddcloths />} />
         <Route path="/clothingstore" element={<ClothingStore />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/contactus" element={<ContactUs />} />
         <Route path="/category" element={<Category />} />

      </Routes>
    </Router>

  )
}

export default App
