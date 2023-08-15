import Carrusel from "../../Components/Carrusel"
import { Footer } from "../../Components/Footer"
import NavBar from "../../Components/NavBar"


const Contact = () => {
  return (<>
  <NavBar/>
   

    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Contactanos</h1>
   --
   --

<div className="card-group mt-3">

&nbsp;


<div className="card">
<img style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '18.8vh',
      }}
src="https://fotografias.lasexta.com/clipping/cmsimages02/2019/06/23/74994AF9-0E54-4F57-B663-11B3483086DD/default.jpg?crop=1300,731,x0,y6&width=1900&height=1069&optimize=low" alt="Avatar" />
<div className="container">
<h4><b></b></h4> 
<p className="lead">Whatsapp 8444135120</p>
</div>
</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<div className="card">
<img style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '18.8vh',
      }}
src="https://previews.123rf.com/images/barbulat/barbulat1603/barbulat160300004/53598736-tel%C3%A9fonos-ip-de-sombra-fotos.jpg" alt="Avatar" />
 
<div className="container">
<h4><b></b></h4> 
<p>Concreto 8444135144 ext-12</p> 
<p>Block 8444135144 ext-10 </p> 
</div>
</div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<div className="card">
<img style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '18.8vh',
      }}
src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/12/hipertextual-ios-14-outlook-y-gmail-defecto-enviar-correos-electronicos-2020888122.webp?resize=1200%2C800&quality=50&strip=all&ssl=1" alt="Avatar" />
<div className="container">
<h4><b></b></h4> 
<p>ventasblock@concretospepi.com</p> 
<p>ventasConcreto@concretospepi.com</p> 
</div>
</div>

</div>

   --
   
  </div>
</div>

<Footer/>


<Carrusel></Carrusel>

    </>
  )
}

export default Contact