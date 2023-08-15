import { Footer } from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import proyecto10 from '../Images/proyecto10.jpg';
import proyecto4 from '../Images/proyecto4.jpg';
import proyecto3 from '../Images/proyecto3.jpg';
import proyecto19 from '../Images/proyecto19.jpg';
import proyecto14 from '../Images/proyecto14.jpg';
import proyecto18 from '../Images/proyecto18.jpg';
import habitacional4 from '../Images/habitacional4.jpg';
import proyecto17 from '../Images/proyecto17.jpg';
import proyecto16 from '../Images/proyecto16.jpg';
import equipoirapuato from '../Images/equipoirapuato.jpg';


const Proyects = () => {
  return (
    <div>



    <NavBar/>

    
    <br></br>

    <div style={{





display: 'flex',
alignItems: 'center',
justifyContent: 'center',
width:'100%',
height: '100vh',


}} >

  <img src={habitacional4} alt="Avatar"
  style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}></img> 
   

   </div>
 

    <div  style={{
        
        height: '20%',
        backgroundColor: '#020881',
        
      
      }}>  <h2 className='text-white'
             style={{
              textAlign: "center",
              paddingTop:'1%',
              fontSize: '45px'
             }}
             >Proyectos Habitacionales</h2>
           <br></br>
           <p className='text-white'
           style={{
            textAlign: "center", 
            paddingBottom: "3%",
            fontSize: '20px',

            
            }}>Participamos en un sin numero de proyectos, ofrecemos todo tipo de soluciones para tu vivienda.  </p>
      
      
      </div>


      <div className="text-left"
      style={{
        fontSize:'45px',
        paddingLeft:'15%',
        paddingTop:'2.5%',

      }}>Nuestros Orgullosos Clientes</div>
    
    <div className="card-group mt-3"
    style={{
      paddingLeft:'15%',
      paddingRight:'15%'
    }}
    >

    &nbsp;


<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}>
  <img src={proyecto10} alt="Avatar"
  style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}
   />
  <div className="container">
    <h4><b>Proyecto Hogar 2 pisos</b></h4> 
    <p>Viajamos a proyecto para tirar una losa.</p> 
  </div>
  </div>


  &nbsp; &nbsp;


<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}
>
  <img src={proyecto3} alt="Avatar"
   style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
   }}
   />
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
  </div>

  &nbsp; &nbsp;
 

<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}>
  <img src={proyecto4} alt="Avatar"
   style={{ 
    paddingRight:'0%',
    width: '100%',
    height: '100%',
    }}
   />
  <div className="container">
    <h4><b>Proyecto Palapa</b></h4> 
    <p>Losa para palapa utilizando dos de nuestras unidades mas importantes, bombeo y revolvedora</p> 
  </div>
  </div>

  </div>



  <div className="card-group mt-3"
    style={{
      paddingLeft:'20%',
      paddingRight:'20%'
    }}
    >

    &nbsp;


<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}>
  <img src={proyecto19} alt="Avatar"
  style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}
   />
  <div className="container">
    <h4><b>Rancho</b></h4> 
    <p>Apoyando en ejido cercano.</p> 
  </div>
  </div>


  &nbsp; &nbsp;


<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}
>
  <img src={proyecto17} alt="Avatar"
   style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
   }}
   />
  <div className="container">
    <h4><b>Locales</b></h4> 
    <p>Apoyo surtiendo block y concreto para este complejo de loclaes</p> 
  </div>
  </div>

  &nbsp; &nbsp;
 

<div style={{width:'32%', height:'32%', paddingLeft:'0%'}}>
  <img src={proyecto16} alt="Avatar"
   style={{ 
    paddingRight:'0%',
    width: '100%',
    height: '100%',
    }}
   />
  <div className="container">
    <h4><b>Proyecto Palapa</b></h4> 
    <p>Losa para palapa utilizando dos de nuestras unidades mas importantes, bombeo y revolvedora</p> 
  </div>
  </div>

  </div>



<br></br>
<br></br>
<br></br>

<hr></hr>

<div 
style={{
  paddingLeft:'15%',
  paddingBottom:'2%'

}}
>
<h1>Respaldandote Siempre</h1>
<br></br>
<p>Cubriendo las necesidades de nuestros clientes.</p>
</div>

  <div className="card-group mt-3">

  

<div style={{width:'33%', height:'33%',paddingLeft:'0.5%'}}>
  <img src={proyecto14} alt="Avatar"
   style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}
    />
  <div className="container">
    <h4><b>Hogar con Numerosas habitaciones</b></h4> 
    <p>En este hermoso proyecto habitacional utilizamos dos revolvedoras y bomba para cubrir la necesidad de nuestro orgulloso cliente
      trabajo arduo que al final rindio frutos.</p> 
  </div>
  </div>
  &nbsp;

  <div style={{width:'33%', height:'33%', paddingLeft:'0%'}}>
  <img src={proyecto18} alt="Avatar"
   style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}
    />
  <div className="container">
    <h4><b>Proyecto casa Habitacion</b></h4> 
    <p>Un proyecto de un hogar mediano donde nuestro cliente solicito una bomba de concreto y revolvedora
      las cuales fueron mas que suficientes para cubrir su necesidad.</p> 
  </div>
  </div>


  &nbsp;

  <div style={{width:'33%', height:'33%', paddingLeft:'0%'}}>
  <img src={proyecto3} alt="Avatar"
   style={{ 
    padding: '0%',
    width: '100%',
    height: '100%',
    }}
    />
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
  </div>







  </div>





  <br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

  


--


<div  style={{
        
        height: '90vh',
        backgroundColor: 'rgba(0, 3, 0, 0.05)',
        fontSize: '60px'
      
      }}> 
<div 
style={{
        
  height: '10vh',
  backgroundColor: '#020881',
  fontSize: '60px',
  color: 'white'

}}>
<p className="text-center">  Juntos lo hacemos posible.</p>
</div>
<div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
      }}> 
      
  <img style={{
        
        alignItems: 'center',
        justifyContent: 'center',
        height: '75vh',
      
      }}
  src={equipoirapuato} />

      </div>
      
      
      
      </div>

--


  






<div  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '10vh',
  }}> <img  src="" />
</div>


<br></br>
<Footer/>
    </div>
  )
}

export default Proyects