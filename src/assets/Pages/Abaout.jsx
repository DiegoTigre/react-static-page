import { Footer } from "../../Components/Footer"
import NavBar from "../../Components/NavBar"
import coahuilaPepi from '../Images/coahuilaPepi.png'


export const Abaout = () => {
  return (
    <>

    <NavBar/>
<br></br>
<br></br>
    <div  style={{
        
        height: '5vh',
        backgroundColor: 'white',
        color:'black',
        fontSize: '40px'
      
      }}>   <h1 className="text-black" style={{textAlign: "center"}}>Nuestra Presencia</h1></div>

    <br></br>
    <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      
      }}> <img  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      
      }}
      src={coahuilaPepi}  />
</div>



<Footer/>

    </>
  )
}
