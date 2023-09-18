import { Footer } from '../../Components/Footer'
import NavBar from '../../Components/NavBar'
import concretofluido from '../Images/concretofluido.jpg'
import concretoautocompactable from '../Images/concretoautocompactable.jpg'
import concretoaltaresistencia from '../Images/concretoaltaresistencia.jpg'
import canalconcreto from '../Images/canalconcreto.jpg'
import especializado8 from '../Images/especializado8.jpg'
import altaresistencia from '../Images/altaresistencia.jpg'
import { NavLink } from "react-router-dom"

//import concretopremezclado from '../Images/concreto-premezclado.webp';
const Products3 = () => {
  return (
  <>
  <NavBar/>
  <br></br>
  <br></br>
    <div className='text-center'><h1>Concreto Premezclado</h1></div>

    <hr></hr>
    <div className="" style={{paddingTop: '10px',width:'100%',height:'400px'}}>
 
      <img  src='data:image/jpeg;base64,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' 
      style={{width:'100%',height:'400px'}} />
      
 
  
</div>

    <hr></hr>



    <br></br>
    <br></br>
    <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Concreto premezclado Estandar</h3>
        <p className="card-text">Contamos Concretopremezclado de alta calidad.</p>
        <p>El concreto premezclado estándar es la forma más común de concreto. Se prepara para su entrega en una planta de concreto 
            en lugar de mezclarse en el sitio de la obra, lo que garantiza la calidad del concreto.</p>
        <p>Especificaciones técnicas</p>
Usos <br></br>
Para la construcción de muros y paredes.<br></br>

<br></br>
<br></br>
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
   
        <img  src='data:image/jpeg;base64,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'  />
       
      </div>
    </div>
  </div>
</div>

<hr></hr>
<br></br>
<br></br>

<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Concreto Fluido</h3>
        <p className="card-text"></p>
        <p>Sí, para el proyecto son necesarias bases, terraplenes, rellenar zanjas o huecos de difícil acceso, el Relleno fluido es la solución profesional.</p>
        <p>Especificaciones técnicas</p>
        Usos: <br></br>
<ul>
        <li>Bases y subbases para carreteras y pavimentos</li>
<li>Rellenos de zanjas para la instalación de toda clase de tuberías</li>
<li>Construcción de terraplenes</li>
<li>Rellenos en general</li>
<li>Relleno de depósitos de desechos tóxicos</li>
<li>Construcción de plataformas para el desplante de viviendas y firmes</li>
<li>Relleno de cavernas</li>
<li>Construcción de pendientes en azoteas</li>
<li>Nivelación de azoteas, entrepisos y terrenos</li>
</ul>

<br></br>
<br></br>

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
      
      }} src={concretofluido}  />
       
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
        <h3 className="card-title">Concreto Autocompactable</h3>
        <p className="card-text"></p>
        <p>El concreto autocompactante (“self consolidating concrete” por su sigla en inglés) es una clase de concreto tan fluido que no hace falta el uso de vibradores para compactarlo de diferentes formas, y satisface unas necesidades específicas del mercado, entre ellas, los lugares de acceso limitado</p>
        <p>Especificaciones técnicas</p>

        Usos <br></br>
        <ul>
       <li> Por las razones anteriormente expuestas, el concreto autocompactante es ideal para la construcción de muros de concreto, porque fluye a grandes distancias, incluyendo movimiento alrededor de las esquinas en las formaletas, y proporciona buena adherencia con el acero de refuerzo.</li>

<li>Sin embargo, vale la pena resaltar que la formaleta debe diseñarse para contener gran cantidad de líquido y deben garantizar una adecuada estanqueidad para evitar fugas de concreto.</li>

<li>Comparte con nosotros tus opiniones e inquietudes.</li>

</ul>
<br></br>
<br></br>

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
      
      }} src={concretoautocompactable} />
       
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
        <h3 className="card-title">Concreto Alta Resistencias</h3>
        <p className="card-text"></p>
        <p>Concreto Alta Resistencia logra responder a la necesidad de construcción de edificios de gran altura asegurando la calidad</p>
        <p>Especificaciones técnicas</p>

        Usos <br></br>
<ul>
<li>Edificios de gran altura</li>
<li>Cimentaciones</li>
<li>Columnas</li>
<li>Trabes de gran claro</li>
<li>Pilas</li>
<li>Zapatas y contratrabes</li>
  </ul>

<br></br>
<br></br>

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
      
      }} src={altaresistencia}  />
       
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
        <h3 className="card-title">Concreto de baja contracción</h3>
        <p className="card-text"></p>
        <p>disminuye el espaciamiento entre las juntas, ya que presenta una menor contracción que los concretos convencionales, y proporciona una superficie menos propensa al agrietamiento y al alabeo, incrementando su desempeño.</p>
        <p></p>

        Usos <br></br>
<ul>
<li>Pisos industriales</li>
<li>Naves industriales</li>
<li>Pisos para centros comerciales</li>
<li>Estacionamientos pulidos con acabados </li>
<li>Pisos para tiendas de autoservicio</li>

  </ul>

<br></br>
<br></br>

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
      
      }} src={especializado8}  />
       
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
        <h3 className="card-title">Concreto Resistente a los Sulfatos</h3>
        <p className="card-text"></p>
        <p>proporciona mayor resistencia química para concretos en contacto con aguas o suelos agresivos, como aguas marinas y suelos con alto contenido de sulfatos o sales.</p>
        <p>Especificaciones técnicas</p>

        Usos <br></br>
<ul>
<li>Se puede utilizar en estructuras normales y en miembros expuestos a suelos o agua subterránea donde la concentración de sulfatos o el calor proveniente de la hidratación sean más altos de lo normal pero no severos.</li>
<li>usado cuando se necesita remover las cimbras</li>
<li>Se puede utilizar en estructuras normales </li>
<li>en miembros expuestos a suelos o agua subterránea</li>

  </ul>

<br></br>
<br></br>

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
      
      }} src={canalconcreto}  />
       
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
        <h3 className="card-title">Concreto Resistencia Rápida 24 hrs</h3>
        <p className="card-text"></p>
        <p>Muestran un gran desempeño y resistencia a la compresión, su principal característica es alcanzar su resistencia a edades tempranas, alcanzando el 100% </p>
        <p></p>

        Usos <br></br>
<ul>
<li>Zapatas y muros</li>
<li>Cimentaciones Simples y Reforzadas</li>
<li>Concreto Alta Resistencias</li>
<li>Vigas y Muros Armados</li>
<li>Cisternas y Canales</li>
<li>Castillos y Trabes</li>
<li>Lozas y Pavimentos</li>
  </ul>

<br></br>
<br></br>

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
      
      }} src={concretoaltaresistencia}  />
       
      </div>
    </div>
  </div>
</div>




<Footer/>
    </>
  )
}

export default Products3