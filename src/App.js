import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Service from './routes/Service';
import { HashRouter } from 'react-router-dom';
import Homeo from './components/Homeo'
import Aboutop from './components/Aboutop'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar/> */}
          <Routes>
             <Route exact path="/" element={<Homeo/>} ></Route>
             {/* <Route path="/about" element={<About/>} ></Route> */}
             <Route path="/about" element={<Aboutop/>} ></Route>
             {/* <Route path="/contact" element={<Contact/>} ></Route> */}
             {/* <Route path="/service" element={<Service/>}></Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
