import monitor from "../../assets/Images/monitor.jpg"
import monitor2 from "../../assets/Images/monitor2.jpg"
import tablero from "../../assets/Images/tablero.jpg"
import estacion from "../../assets/Images/estacion.jpg"
import sistemacarga2 from "../../assets/Images/sistemacarga2.png"


const Infraestructura = () => {
  return (<>
<hr></hr>
<br></br>
<br></br>
<center><h1> Tecnologia de Sistemas en Logistica y Control Industrial </h1></center>
<br></br>
<br></br>
<br></br>



<div className="row" style={{paddingTop: '20px', paddingLeft:'7%'}}>
  <div className="col-sm-6">
    <div className="">
      <div className="">




      <div>
    <div className="img"  >
    <img src={monitor} width="550px" height="300px" style={{borderRadius:'10px'}}/>
</div>


<br/>


    <div className="img" id="div2" >
    <img src={monitor2} width="550px" height="300px" style={{borderRadius:'10px'}}/>
</div>

<br/>


    <div className="img" >
    <img src={tablero} width="550px" height="700px" style={{borderRadius:'10px'}}/>
</div> 
</div>
    <br /> <br />



      </div>
    </div>
  </div>
  <div className="col-sm-6" >
    <div className="" style={{paddingTop:'150px', paddingRight:'0px'}}>
      <div 
      className="">
   
        <img style={{width:'95%',height:'100%',borderRadius:'10px'}} src={estacion}  />
<br></br>
        <div className="" style={{width:'95%',height:'100%'}}>
            <br></br>
            <p>SISTEMA DE CARGA ( SYSDYNE ) 
                EN PLANTA FIJA 100% AUTOMATIZADO, ENLAZADO VIA INTERNET CON AREA DE DESPACHO, 
                CON RASTREO EN TELEFONO MOVIL</p>
        </div>
        <br></br>
        <img style={{width:'95%',height:'100%',borderRadius:'10px'}} src={sistemacarga2}  />
       
      </div>
    </div>
  </div>
</div>



  




    </>
  )
}

export default Infraestructura