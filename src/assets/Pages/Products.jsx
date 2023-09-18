
import { Footer } from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import { NavLink } from "react-router-dom"

import imagendespacho from '../Images/imagendespacho.png';


const Products = () => {
  return (
  <>
  <NavBar/>
  <br></br>
  <br></br>
    <div className='text-center' style={{paddingLeft: '200px'}}><h1>Servicios Despacho Concreto</h1></div>
    <br></br>
    

    <div className="" style={{paddingTop: '1px',width:'100%',height:'500px'}}>
 
      <img  src={imagendespacho} 
      style={{width:'100%',height:'500px'}} />
      
 
  
</div>

    <hr></hr>
<br></br>
<br></br>

<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Servicio de Bombeo</h3>
        <p className="card-text">Contamos con concreto de alta calidad .</p>
        <p>Características
        El concreto bombeado es aquel que se conduce a presión por medio de una tubería rígida o flexible, vaciando directamente en el elemento a colar. Es utilizado a nivel mundial para lograr acabados de calidad en las obras, mejorar los tiempos de entrega y sobretodo ahorrar considerablemente en mano de obra.</p>
        <p>Especificaciones técnicas</p>

        <a href="#" className="btn btn-primary">
        <NavLink to="/contact" className="nav-link" style={{color:'white'}}>Contacto</NavLink>
        </a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div 
      className="card-body">
   
        <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vh',
      
      }} src={"https://odoo.harmak.com/web/image/42406-8237e7ad/Iconos%20concreto%20premezclado_Mesa%20de%20trabajo%201.png"}  />
       
      </div>
    </div>
  </div>
</div>


<br></br>
<br></br>

<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Servicio de Tiro Directo </h3>
        <p className="card-text">Contamos con concreto de alta calidad.</p>
        <p>Características
        La función principal de la mayoría de los pisos de concreto, es la de brindar un adecuado soporte a la aplicación de cargas y resistir el uso para el que fue diseñado, esto depende en gran medida  de la resistencia del concreto, es por eso que Diseñamos mezclas de concreto para pisos de alta resistencia.</p>
        <p>Especificaciones técnicas</p>

        <a href="#" className="btn btn-primary">
        <NavLink to="/contact" className="nav-link" style={{color:'white'}}>Contacto</NavLink>
        </a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div 
      className="card-body">
   
        <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vh',
      
      }} src="https://odoo.harmak.com/web/image/42408-bcc48bf7/Iconos%20concreto%20premezclado_Mesa%20de%20trabajo%201%20copia.png"  />
       
      </div>
    </div>
  </div>
</div>


<br></br>
<br></br>



<Footer/>
    </>
  )
}

export default Products