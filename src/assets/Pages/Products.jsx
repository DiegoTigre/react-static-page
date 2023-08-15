
import { Footer } from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import block from '../Images/block.png';
import proyectoespecializado8 from '../Images/proyectoespecializado8.jpg';
import especializado1 from '../Images/especializado1.jpg';

const Products = () => {
  return (
  <>
  <NavBar/>
  <br></br>
  <br></br>
    <div className='text-center' style={{paddingLeft: '200px'}}><h1>Servicios Despacho Concreto</h1></div>
    <br></br>
    
  
    <hr></hr>
    <div className="" style={{paddingTop: '1px',width:'100%',height:'500px'}}>
 
      <img  src={proyectoespecializado8} 
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
        <p className="card-text">Contamos .</p>
        <p>Características
El bloque de concreto es una pieza prefabricada (vibrocomprimido) con forma de prisma recto y con uno o más huecos verticales para su utilización en sistemas de mampostería simples o estructurales, esto debido a la posibilidad de reforzar las piezas vertical y horizontalmente.</p>
        <p>Especificaciones técnicas</p>

        <a href="#" className="btn btn-primary">Contactame</a>
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
      
      }} src="https://odoo.harmak.com/web/image/42406-8237e7ad/Iconos%20concreto%20premezclado_Mesa%20de%20trabajo%201.png"  />
       
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
        <p className="card-text">Contamos con el block en alta calidad.</p>
        <p>Características
El bloque de concreto es una pieza prefabricada (vibrocomprimido) con forma de prisma recto y con uno o más huecos verticales para su utilización en sistemas de mampostería simples o estructurales, esto debido a la posibilidad de reforzar las piezas vertical y horizontalmente.</p>
        <p>Especificaciones técnicas</p>

        <a href="#" className="btn btn-primary">Contactame</a>
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