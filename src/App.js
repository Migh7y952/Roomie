import './App.css';
import Account from "./pages/Account";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './pages/Works';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/works" exact element={<Works />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/account" exact element={<Account />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
