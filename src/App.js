import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
