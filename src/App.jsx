
import './App.css'
import Carrusel from './Components/Carrusel';
import { Abaout } from './assets/Pages/Abaout';
import Contact from './assets/Pages/Contact';
import Home from './assets/Pages/Home';
import Products from './assets/Pages/Products';
import Proyects from './assets/Pages/Proyects';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Proyects2 from './assets/Pages/Proyects2';
import Products2 from './assets/Pages/Products2';
import Products3 from './assets/Pages/Products3';
import { Abaout2 } from './assets/Pages/Abaout2';
import { Abaout3 } from './assets/Pages/Abaout3';

function App() {
 

  return (
    <>
      

      <BrowserRouter basename="">
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/proyectos" element={ <Proyects /> } />
      <Route path="/proyectos2" element={ <Proyects2 /> } />
      <Route path="/productos" element={ <Products /> } />
      <Route path="/productos2" element={ <Products2 /> } />
      <Route path="/productos3" element={ <Products3 /> } />
      <Route path="/about" element={ <Abaout /> } />
      <Route path="/about2" element={ <Abaout2 /> } />
      <Route path="/about3" element={ <Abaout3 /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/carrusel" element={ <Carrusel /> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
