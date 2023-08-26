import ReactPlayer from "react-player";
import video2 from './/../assets/Videos/video2.mp4'

const VideoCarrusel = () => {
  return (
    <>

    <div style={{width:'100%'}}>
    <div ></div>
    
    <ReactPlayer
    url={video2}
    controls
    width='100%'
    height='100%'
    loop
    playing={true}
    />

</div>

    
    </>
    
  )
}

export default VideoCarrusel