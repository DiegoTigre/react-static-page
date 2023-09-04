import   "../../Styles/LabStyle.css";
import   "../../Styles/VerticalLine.css";
import lab3 from "../../assets/Images/lab3.jpg"
import lab2 from "../../assets/Images/lab2.jpg"

const Laboratorio = () => {
  return (
    <div >
        <div className="flexbox-container">
      <div style={{
        paddingLeft:'2%'
        }}>
        <img src={lab3} style={{
          borderRadius:'40px',
        }}></img>
        
      </div>

      <div style={{
        paddingLeft:'3%'
        }}>
      <img src={lab2} style={{
          borderRadius:'40px',
        }}></img>
      </div>
      
    </div>
    </div>
  )
}

export default Laboratorio