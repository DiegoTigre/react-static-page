import { NavLink } from "react-router-dom";
import NavBar from "../../Components/NavBar";




const Abaout5 = () => {
  return (
    <>
  <NavBar/>

    <div  style={{
      
      height: '5vh',
      backgroundColor: 'white',
      fontSize: '40px',
      paddingTop: '2%'
    
    }}>   <h1 className="text-black" style={{textAlign: "center"}}>About Pepi</h1></div>



  <div className="row" style={{ paddingLeft:'15%',paddingTop: '3%',}}>
<div className="col-sm-4" style={{width:'25%', height:'25%'}} >
  <div className="">
    <div className="">
    <img  style={{width:'100%', height:'10%',paddingTop: '20px'}} src='http://localhost:5173/src/assets/Images/concretoyblocklogo2.jpg'  />
    </div>
   
<div className="col-sm-9"  >
  <div className="" style={{paddingleft:'%'}}>
    <div 
    className="">
 
      <img style={{width:'150%',height:'100%'}} src='http://localhost:5173/src/assets/Images/nuestraflotillaweb.jpg'  />
     
    </div>
  </div>
</div>





  </div>
</div>




<div className="col-sm-6" style={{width:'58%', height:'58%'}}>
  <div className="" style={{paddingTop: '20px'}}>
    <div 
    className="">
 
      <img style={{width:'100%'}} src='http://localhost:5173/src/assets/Images/pepirevolvedora.png'  />
     
    </div>
  </div>
</div>
</div>



<hr></hr>

<div className="contenedor" 
style={{ 
  paddingTop:'5%', 
  background:'white', 
  width:'100%', 
  color:'black', 
  paddingLeft:'15%',
  paddingRight: '15%',
  fontSize:'25px'}}>

      <h2>Concretos y Block Pepi</h2> 

      <NavLink to="/about4" className="nav-link" style={{color:'black'}}>Español</NavLink>
    
      
  
      
      &nbsp;


  <p style={{textAlign:'left'}} >
  At Concretos y Block Pepi, a company founded in 1999, we have the mission of providing extraordinary Solutions, <br></br>
Service and Quality for our clients. All of this, through our organizational culture based on 4 fundamental competencies: Teamwork, Permanent advisory services, Focus on Results, and Reliability for our clients.<br></br>

Located in the city of Saltillo, Coahuila and Irapuato, Guanajuato, at Concretos y Block Pepi we spare no effort, which is why our plants are equipped with state-of-the-art technology, capable of satisfying the most <br></br>
stringent requests in the markets where we operate. In this manner, we ensure continuity and efficiency in all our processes and services.<br></br>

With personalized, professional attention and advice, we recommend to our<br></br>
 clients the right products and the best way to use them, according to the ultimate needs of their jobs and projects.<br></br>

As part of our continuous improvement, at Concretos y Block Pepi we fulfill scheduled deliveries in a timely manner, supporting our clients to comply with the progress of their work and to minimize the down time <br></br>
of their personnel, saving labor costs, work and/or penalties for their clients, <br></br>
due to delays in the completion of their projects.
We offer guaranteed quality to our clients, because all our products and services meet and exceed the quality specifications <br></br>
established in the current Mexican Standards. In this way we also ensure that rework of construction elements is avoided in each of the projects where we provide our services. <br></br>
<br></br>

To achieve this, we rely on the use of automated weigh-dosing equipment, <br></br>
and testing laboratories governed by standardized <br></br>
procedures and our 100% qualified technical staff. We provide peace of mind and <br></br>
certainty in deliveries to our customers,  <br></br>
because we have the necessary and sufficient infrastructure to meet your requirements <br></br>
in a correct and timely manner, <br></br>
which is why at Concretos y Block Pepi, we rely on our concrete plants, <br></br>
our 100% automated block plants, our fleet of trucks, <br></br>
both for concrete and block transport, as well as with mobile plants, <br></br>
boom pumps and stationary pumps, for which we also maintain our plants <br></br>
and equipment in optimal conditions and always available to provide <br></br>
the best possible service and availability.<br></br>
<br></br>
At Concretos y Block Pepi we not only deliver the best ready-mix hydraulic concrete and concrete block; <br></br>
we also offer flexibility of negotiation in price and terms, as well as periodic commercial promotions.<br></br>
We serve our clients mainly in their residential, commercial, industrial and light infrastructure projects,<br></br> 
which allows us to focus on products and services for this type of jobs.<br></br>
We offer all this and more to our clients. However, beyond the quality and efficiency of our products and processes, <br></br>
also above the technology we use, is the value we offer our clients thanks to the talent and eagerness to serve of our people. <br></br>
We are certain that all this enormous effort will benefit our clients, who are the main reason for everything we undertake.<br></br>
<br></br>
<br></br>
Concretos y Block PEPI:
Solutions with extraordinary Service and Quality for our Clients
  </p>



</div>



  </>
  )
}

export default Abaout5