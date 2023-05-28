import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import About from './routes/About';
import Service from './routes/Service';
function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='travel-website'>
        {/* <Navbar/> */}
          <Routes>
             <Route exact path="/travel-website/" element={<Home/>} ></Route>
             <Route path="/about" element={<About/>} ></Route>
             <Route path="/contact" element={<Contact/>} ></Route>
             <Route path="/service" element={<Service/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
