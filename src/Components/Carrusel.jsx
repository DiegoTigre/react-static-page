import { useState} from 'react';
import pepirevolvedora from '../assets/Images/pepirevolvedora.png';
import prototio1movilidad from '../assets/Images/prototio1movilidad.jpg';
import habitacional4 from '../assets/Images/habitacional4.jpg';
import proyectoespecializado6patrimonio from '../assets/Images/proyectoespecializado6patrimonio.jpg';
import styled from 'styled-components';

const Carrusel = () => {

  const CarouselImg = styled.img `
  
        width: 100%;
        height: 100%;
        opacity: 5;
  transition: 5s;
  &.loaded{
    opacity:1;
  }
        `

  const CarouselImg2 = styled.img `
  max-width: 100%;
  width:100%;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded{
    opacity:1;
  }

  `
  const CarouselButtonContainer = styled.div `
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 40%;

            
  border: ;             
  border-radius: 20px;  
  position: absolute; 
  `
  const CarouselButton = styled.button `
  color: gray;
  background-color: white;
 
  margin: 0 5px;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 35px;
  `

  const images = [pepirevolvedora,prototio1movilidad,habitacional4,proyectoespecializado6patrimonio];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images , next = true) => {
    setLoaded(false);
    setTimeout(() => {

      const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0; 
    const nextIndex = next ? (condition ?  selectedIndex +1 : 0) : condition ?  selectedIndex - 1 : images.length -1
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);

    },500)
    
  
   

  };


  const previous = () => {
 
    selectNewImage(selectedIndex, images, false)
   
   

  };

  const next = () => {

  
      selectNewImage(selectedIndex, images);


   

  };

  return (
    <>

 <CarouselImg
      src={selectedImage} alt='gentelman' className={loaded ? "loaded" : ""} onLoad={()=> setLoaded(true)}
      >



      </CarouselImg>

      <CarouselButtonContainer>
      <CarouselButton onClick={previous} >{'<'}</CarouselButton> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <CarouselButton onClick={next} >{'>'}</CarouselButton> 
  
  
  </CarouselButtonContainer>

 

    </>
  )
}

export default Carrusel

//<CarouselButton onClick={previous}>{'<'}</CarouselButton >#FA0429