
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Signup from './components/pages/registration/SignUp';
import Login from './components/pages/registration/Login';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/signup" element={<Signup />} />  
        <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>

  )
}

export default App
