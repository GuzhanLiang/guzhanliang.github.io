import "./intro.scss"
import Typewriter from 'typewriter-effect'
// import {init} from 'ityped'
// import {useEffect,useRef}from"react"

export default function Intro() {

  // const textRef = useRef();

  // useEffect(()=>{
  //     init(textRef.current,{
  //       showCursor:false,
  //       strings: ["Developer", "Designer"],
  //     });
  // },[]);
  
  return (
    <div className="intro" id="intro">
      <div className="left">

        <div className="imageContainer">
          <img src="assets/picture2.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Chino</h1>
          <h3>
           App<span>
           <Typewriter options={{ strings:["Developer", "Designer"],
           backDelay:1500,
           autoStart:true,
           delay:75,
           backspeed:60,
           loop:true,
           showCursor:false,
           
           }}
           /></span> 
          </h3> 
        </div>
        </div>
    </div>
  )
}
