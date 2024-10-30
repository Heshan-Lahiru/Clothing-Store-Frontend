
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Signup from './components/pages/registration/SignUp';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />  
      </Routes>
    </Router>

  )
}

export default App
