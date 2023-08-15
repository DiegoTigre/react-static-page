import { Footer } from "../../Components/Footer"
import NavBar from "../../Components/NavBar"
import coahuilaPepi from '../Images/coahuilaPepi.png'
import planta_irapuato from '../Images/plantasaltillo.jpg'
import nuestraflotillaweb from '../Images/nuestraflotillaweb.jpg'


export const Abaout2 = () => {
  return (
    <>

    <NavBar/>

    <br></br>
<br></br>
    <div  style={{
        
        height: '5vh',
        backgroundColor: 'white',
        fontSize: '40px'
      
      }}>   <h1 className="text-black" style={{textAlign: "center"}}>Nuestras Plantas</h1></div>

    <br></br>

    




<div  style={{
        
        height: '4vh',
        backgroundColor: '#FA0429',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}>Planta Irapuato</h2></div>

<div className="row">
  <div className="col-sm-8"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85vh',
  }}
  >
  <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        width: '100%',
      
      }}
  src={nuestraflotillaweb} />

    
  </div>
  
  <div className="col-sm-4"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85vh',
  }}
  >
  
  <div className="card" 
  style={{
        
    alignItems: 'center',
    justifyContent: 'center',
    height: '45vh',
  
  }}>
  <div className="card-body">
    
    
    <br></br>
    <br></br>

    Contamos con las mejores instalaciones necesarias para apoyar en cualquier tipo de proyecto.
    <br></br>
    Tambien manejamos los materiales de la mas alta calidad en la región y una amplia gama de productos
    para cubrir las necesidades de tu empresa, hogar.
    <br></br>
    <br></br>
    Contamos con una flotilla Eficiente completa y siempre disponible para trabajar en cualquier momento.
    <br></br>
    <br></br>
    Trabajamos con un equipo excepcional que estara al pendinte de tu proyecto hasta finiquitarlo,
    con el cual encontraras flexibilidad y gran apoyo.
  </div>
</div>
  
  </div>
</div>


<div  style={{
        
        height: '4vh',
        backgroundColor: '#020881',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}>Planta Saltillo</h2></div>


<div className="row">
  <div className="col-sm-4"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85vh',
  }}
  >
  
  <div className="card" 
  style={{
        
    alignItems: 'center',
    justifyContent: 'center',
    height: '45vh',
  
  }}>
  <div className="card-body">
    
    
    <br></br>
    <br></br>

    Contamos con las mejores instalaciones necesarias para apoyar en cualquier tipo de proyecto.
    <br></br>
    Tambien manejamos los materiales de la mas alta calidad en la región y una amplia gama de productos
    para cubrir las necesidades de tu empresa, hogar.
    <br></br>
    <br></br>
    Contamos con una flotilla Eficiente completa y siempre disponible para trabajar en cualquier momento.
    <br></br>
    <br></br>
    Trabajamos con un equipo excepcional que estara al pendinte de tu proyecto hasta finiquitarlo,
    con el cual encontraras flexibilidad y gran apoyo.
  </div>
</div>

    
  </div>
  
  <div className="col-sm-8"
  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
      }}
  >
  
  
  <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
        width: '100%'
      
      }}
  src={planta_irapuato} />
  
  </div>
</div>





<Footer/>

    </>
  )
}
