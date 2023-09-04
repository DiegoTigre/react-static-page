import   "../../Styles/LabStyle.css";
import   "../../Styles/VerticalLine.css";
import lab3 from "../../assets/Images/mazda.png"
import fipasi from "../../assets/Images/fipasi.png"
import lan from "../../assets/Images/lan.png"
import sedena2 from "../../assets/Images/sedena2.png"


const Clientes = () => {
  return (
    <>
    <div style={{paddingLeft:'40%'}}><h1>CASOS DE ÉXITO</h1></div>
    <div style={{width:'100%'}} >
        <div className="flexbox-container" >
      <div style={{
       
        }}>
        <img src={lab3} style={{
          borderRadius:'40px',
          width:'400px'
        }}></img>
        
      </div>

      <div style={{
      
        }}>
      <img src={fipasi} style={{
          borderRadius:'40px',
        }}></img>
      </div>

      <div style={{

        }}>
      <img src={lan} style={{
          borderRadius:'40px',
          width:'400px'
        }}></img>
      </div>

      <div style={{

        }}>
      <img src={sedena2} style={{
          borderRadius:'40px',
          width:'400px',
          paddingTop:'250px'
        }}></img>
      </div>




      <div style={{
       
      }}>
      <img src={lab3} style={{
        borderRadius:'40px',
        width:'400px'
      }}></img>
      
    </div>

    <div style={{
    
      }}>
    <img src={fipasi} style={{
        borderRadius:'40px',
      }}></img>
    </div>

    <div style={{

      }}>
    <img src={lan} style={{
        borderRadius:'40px',
        width:'400px'
      }}></img>
    </div>

    <div style={{

      }}>
    <img src={sedena2} style={{
        borderRadius:'40px',
        width:'400px',
        paddingTop:'250px'
      }}></img>
    </div>
    




      
    </div>
    </div>





    


    </>
  )
}

export default Clientes