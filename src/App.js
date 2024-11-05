
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Signup from './components/pages/registration/SignUp';
import Login from './components/pages/registration/Login';
import UserProfile from './components/pages/user/UserProfile';
import AdminProfile from './components/pages/admin/admin_profile/AdminProfile';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/signup" element={<Signup />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
      </Routes>
    </Router>

  )
}

export default App
