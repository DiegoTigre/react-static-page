import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import concretoyblocklogo2 from '../assets/Images/concretoyblocklogo2.jpg'

const NavBar = () => {
  return (<>
   
   { /*  menu start */}
    <nav className='navbar navbar-dark navbar-expand-lg'
    style={{
       background: '#020881',
       
     
    
     }}
    >

      { /* Nav container start */}
      <div className='container-fluid'>
        <a href='' className='navbar-brand text-info fw-semibold fs-4'></a>
        <div style={{
        
        height: '100%',
        color:'white',
        fontSize: '40px'
      
      }}>  <img
        
         className='home-card-image' src={concretoyblocklogo2}
         style={{ 
          paddingLeft: '0px',
          width: '250px',
          height: '150%',
          borderRadius:'55px',
          }}/>
</div>

        {/*  NavButton   */}
        <button className='navbar-toggler' type='button'
        data-bs-toggle="offcanvas"
        data-bs-target="#menuLateral"
        >
          <span className='navbar-toggler-icon'></span>

        </button>
         {/* offcanvas main container start  */}  
         <section 
         className='offcanvas offcanvas-start bg-dark'
         id="menuLateral"
         tabIndex={-1}
         
         >
          <div 
          className='offcanvas-header'
          data-bs-theme="dark"
          >
            <h5 className='offcanvas-title text-info'>CONCRETOS PEPI</h5>
            <button 
            className='btn-close' 
            type='button'
            aria-label='Close' 
            data-bs-dismiss="offcanvas"></button>
          </div>
          <div className='offcanvas-body d-flex flex-column
          justify-content-between px-0'>
            <ul className='navbar-nav fs-5 justify-content-evenly'>
              <li className='nav-item p-3 py-md-1'><NavLink to="/" className="nav-link">INICIO</NavLink></li>

        

        
              <li className="nav-item dropdown"style={{}}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            PROYECTOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
          <li className='nav-item p-3 py-md-1' ><NavLink to="/proyectos" className="nav-link" style={{color:'black'}}>Proyectos Habitacionales</NavLink></li>
         <hr/> 
          <li className='nav-item p-3 py-md-1'><NavLink to="/proyectos2" className="nav-link" style={{color:'black'}}>Proyectos Industirales</NavLink></li>
          
           
          </ul>
        </li>
              

              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS Y SERVICIOS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
          <li className='nav-item p-3 py-md-1'><NavLink to="/productos" className="nav-link" style={{color:'black'}}>Servicios de Despacho de Concreto</NavLink></li>
          <hr/>      <li className='nav-item p-3 py-md-1'><NavLink to="/productos2" className="nav-link" style={{color:'black'}}>Block para Construccion</NavLink></li>
          <hr/>      <li className='nav-item p-3 py-md-1'><NavLink to="/productos3" className="nav-link" style={{color:'black'}}>Concretos Premezclados</NavLink></li>
          <hr/>      <li className='nav-item p-3 py-md-1'><NavLink to="/productos4" className="nav-link" style={{color:'black'}}>Aditivos para Concreto</NavLink></li>
              
   
          </ul>
        </li>

              

             


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SOBRE NOSOTROS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
          <li className='nav-item p-3 py-md-1'><NavLink to="/about4" className="nav-link" style={{color:'black'}}>Acerca De Pepi</NavLink></li>
              
          <hr></hr> <li className='nav-item p-3 py-md-1'><NavLink to="/about" className="nav-link" style={{color:'black'}}>Donde nos encontramos</NavLink></li>
          <hr/><li className='nav-item p-3 py-md-1'><NavLink to="/about2" className="nav-link" style={{color:'black'}}>Nuestras Plantas</NavLink></li>
          <hr/><li className='nav-item p-3 py-md-1'><NavLink to="/about3" className="nav-link" style={{color:'black'}}>Nuestra Historia</NavLink></li>
          
   
          </ul>
        </li>


              <li className='nav-item p-3 py-md-1'><NavLink to="/contact" className="nav-link">CONTACTANOS</NavLink></li>

              
       
              
            </ul>

           {/* Enlaces Redes Sociales  */}  
           <div className='d-lg-none align-self-center py-3'>
            <a href=''><i className='bi bi-twitter px-2 text-info fs-2' ></i></a>
            <a href='https://www.facebook.com/people/Concretos-Pepi-Saltillo/100020718017902/'><i className='bi bi-facebook px-2 text-info fs-2'></i></a>
            <a href=''><i className='bi bi-github px-2 text-info fs-2'></i></a>
            <a href=''><i className='bi bi-whatsapp px-2 text-info fs-2'></i></a>
           </div>

          </div>
         </section>
         {/* offcanvas main container end  */} 

      </div>

    </nav>

    


    </>
  )
}

export default NavBar;