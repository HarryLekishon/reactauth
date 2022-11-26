import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import { Nav } from 'react-bootstrap';
import Footer from './components/Footer';
import NavB from './components/NavB';
import Gallery from './components/Gallery';


function App() {
  return (
    <div>
      <NavB/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
