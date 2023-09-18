

import { Footer } from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import Flotilla from '../Images/Flotilla2.jpg';
import equipoirapuato from '../Images/equipoirapuato.jpg';

import Concretopepiblockprecio from '../Images/Concretopepiblockprecio.jpg';
import VideoCarrusel from '../../Components/VideoCarrusel';
import Laboratorio from './Laboratorio';
import Clientes from './Clientes';
import Infraestructura from './Infraestructura';



const Home = () => {



  return (

    <>
    

    <NavBar/>
<br /> 
 


    <div style={{





display: 'flex',
alignItems: 'center',
justifyContent: 'center',
width:'100%',
height: '100vh',


}} 
    
    > 
   <VideoCarrusel/>

   </div>
   


<div  style={{
        
        height: '4vh',
        backgroundColor: '#FA0429',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}></h2></div>

<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#020881',
        height: '50vh',
      }} className="jumbotron jumbotron-fluid">
  <div className="container">
    --

    <div className="card-group mt-3">

&nbsp;


<div className="card">
<img src="https://odoo.harmak.com/web/image/42032-b9bd8205/Iconos%20concreto%20premezclado-06.png" alt="Avatar" />
<div className="container">
<h4><b></b></h4> 
<p>Siempre en constante busqueda de la excelencía.</p> 
</div>
</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<div className="card">
<img src="https://odoo.harmak.com/web/image/42034-00d93005/Iconos%20concreto%20premezclado-10.png" alt="Avatar" />
<div className="container">
<h4><b></b></h4> 
<p>Amplia gama de proveedores</p> 
</div>
</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div className="card">
<img src="https://odoo.harmak.com/web/image/42031-ae3a3321/Iconos%20concreto%20premezclado-07.png" alt="Avatar" />
<div className="container">
<h4><b></b></h4> 
<p>Materiales de Calidad</p> 
</div>
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



</div>



    --
    <h1 className="display-4 text-white" >Nuestras Garantías</h1>
  
  </div>
</div>

<Clientes/>

<div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
<div className="card mb-3" 
style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
}}>
  
  <br></br>
  <br></br>
  <br></br>

  <div className="card-body">
    <h5 className="card-title">SOLUCIONES A TU MEDIDA</h5>
    <p className="card-text">En constante busqueda de lo que necesitas siempre pensando en tu satisfacción</p>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  

    <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        borderRadius:'40px'
      }}> 
      
  <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        borderRadius:'10px'
      }}
  src={equipoirapuato} />

      </div>
  
  
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">BLOCK Y CONCRETOS PEPI</h5>
    <p className="card-text">Trabajando de la mano de los mas capacitados colaboradores.</p>
    <p className="card-text">Desde planta Irapuato Guanajuato y </p>
    <p className="card-text">planta Saltillo Coahuila. </p>
    <p className="card-text"><small className="text-muted">recent..</small></p>
  </div>
  
</div> 
      </div>



      
<br />
<br></br>

<div  style={{
        
        height: '8vh',
        backgroundColor: '#F7052A',
        
        fontSize: '40px'
      
      }}> <p className='text-center text-white'>Nuestros servicios de Concreto premezclado</p></div>

<br></br>
<br></br>
<h2 className='text-center'
     >Contamos con laboratorio donde realizamos pruebas de resistencia para dar la mejore solución a tu proyecto</h2> 
     <br></br>
<br></br>

<div 
style={{
        
  height: '8vh',
  
  fontSize: '20px'

}}
className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Tipo de Concreto Caracteristicas de Resistencia</h3>



        <table className="default">

<tr>

  <td>Concreto con resistencia a la compresión   </td>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br></br>
<br></br>
  <td>Concreto con resistencia a la flexión</td>

  

</tr>

<tr>

  <td>
    <li>100 km/cm2</li>
    <li>150 km/cm2</li>
    <li>200 km/cm2</li>
    <li>250 km/cm2</li>
    <li>300 km/cm2</li>
    <li>350 km/cm2</li>
    
    </td>
    <br></br>
    <br></br>
  <td>
  <li>30 km/cm2</li>
  <li>35 km/cm2</li>
  <li>40 km/cm2</li>
  <li>45 km/cm2</li>
  </td>

  

</tr>

</table>


      </div>
    </div>
  </div>
  <div className="col-sm-6"
  
  >
<div>

</div>


    <div className="card"
    >
    
      <div 
      className="card-body"
      style={{
        
       
        backgroundColor: '#F92545',
        color: 'white',
        
      
      }}
      >
   
      <h2
     >Incorpora tus productos de concreto y mejora tu proyecto con:</h2> 

      <ul
      >
      
        <li > Acelerantes</li>
        <li > Retardantes</li>
        <li > Block Alta Resistencia</li>
        <li > Aditivos Reductores de Agua</li>
        <li > Aditivos Superplasificantes</li>

        
        
    
    </ul>
      <p></p>
      </div>
    </div>
  </div>
</div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<div  style={{
        
        height: '20vh',
        backgroundColor: 'white',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}></h2></div>

<Laboratorio/>


<div  style={{
        
        height: '8vh',
        backgroundColor: '#020881',
        
        fontSize: '40px'
      
      }}> <p className='text-center text-white'>Block de Calidad </p></div>

<br></br>
  <br></br>
  <br></br>

<div className="row" style={{paddingTop: '20px', paddingLeft:'10%'}}>
  <div className="col-sm-6">
    <div className="">
      <div className="">
      <img  style={{width:'82%',borderRadius:'10px'}}  src={Concretopepiblockprecio}  />
      </div>
    </div>
  </div>
  <div className="col-sm-6" style={{paddingRight:'5%'}}>
    <div className="">
      <div 
      className="">
   
        <img  style={{width:'100%', borderRadius:'10px'}}  src='https://blog.laminasyaceros.com/hs-fs/hubfs/BLOQUES/LAMINAS%20Y%20ACEROS%20BLOQUES%20EN%20CONSTRUCCION.jpg?width=695&name=LAMINAS%20Y%20ACEROS%20BLOQUES%20EN%20CONSTRUCCION.jpg'  />
        <div className="" style={{paddingLeft:'0%', paddingRight:'0%'}}
    >
      <div 
      className="card-body"
      style={{
        
       
        backgroundColor: '#F92545',
        color: 'white',
        paddingLeft:'5%',
        width:'100%',
        borderBlockStart:'0px',
        borderBlockEnd:'10px',
      
      }}
      >
     <br></br>
      <h2
     >Incorpora tu proyectos con nuestro calatalgo de Block:</h2> 

      <ul
      >
        <br></br>
        <li > Block 8 pulgadas 2 agujeros</li>
        <li > Block 6 pulgadas 2 agujerosRetardantes</li>
        <li > Block de concreto hueco alta resistencia</li>
        
        Entre otros productos dentro de nuestra <br></br>
        gama de servicios.
        
       
        
    
    </ul>
      <p></p>
      </div>
    </div>

      </div>
    </div>
  </div>
</div>






<br></br>
  <br></br>
  <br></br>
  
  <Infraestructura/>
  
  <br></br>
  <br></br>
  <br></br>



<div  style={{
        
        height: '20vh',
        backgroundColor: 'white',
        fontSize: '40px'
      
      }}>   <h2 className="text-white" style={{textAlign: "center"}}></h2></div>
 

<div  style={{
        
        height: '8vh',
        backgroundColor: '#FA0429',
        
        fontSize: '40px'
      
      }}> <p className='text-center text-white'>Nuestra Flotilla</p></div>

<br></br>
  <br></br>


<div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
      }}>
<div className="card mb-3" 
style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
}}>
  
  <br></br>
  <br></br>
  <br></br>
  
  





  <div className="card-body">
    <h5 className="card-title">SOLUCIONES A TU MEDIDA</h5>
    <p className="card-text">Contamos con una flotilla moderna siempre disponible.</p>
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  

    <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        width: '100%',
      }}> 
      
  <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
        width: '100%',
        borderRadius:'10px'
      }}
  src={Flotilla} />

      </div>
  
  
  </div>
</div>

      </div>










<Footer/>
   </>
  )
}

export default Home;

 /*style={{





        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'95%',
        height: '100vh',
       
       
      }} */ 