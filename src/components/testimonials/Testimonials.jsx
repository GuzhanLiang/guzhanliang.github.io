import { useState } from "react";
import "./testimonials.scss"

export default function Testimonials() {
    const [currentSlide,setCurrentSlide] = useState(0);
     
    const data = [
    {
      id:"1",
      title:"Project:'Relief'",
      desc1:"I discuseed with 2 teammates to come up with the project ideas and attempted to come up with a game.",
      desc2:"The Project is aimed towards to the millions of people who work from home isolated from their coworkers, family and friends.We offer a safe haven where individuals can wind down relax and have fun.",
      img:"assets/hp.png",
      lin:"https://devpost.com/software/the-escape-from-the-rat-race",
      pag:"Project"
    },
    {
      id:"2",
      title:"Case Study by Ryerson Science Society : Synergize ",
      desc1:"I worked with other 3 teamates to come up with the idea to increase individuals' mental health during pandamic by applying AI technology and feasibility of biomedical science",
      img:"assets/syg.png",
      lin:"https://www.instagram.com/p/CbVbWsHJtZE/",
      pag:"Case Study"
    },
    {
      id:"3",
      title:"",
      desc1:"",
      img:"assets/wip.png",
    },

  ];
  
    const handleClick =(way)=> {

        way=== "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1:2) 
        : setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1:0);
    };

    return (
    <div className="testimonials" id="testimonials" >
         <h2 className="tt">Award</h2>
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            
            {data.map((d)=>(
                <div className="container">
                
                <div className="item">
                    <div className="left">
                        <div className="leftcontainer">
                            <h2>{d.title}</h2>
                            <br />
                            <p>
                                {d.desc1}
                            </p>
                            <br />
                            
                       
                            <p>   
                                {d.desc2}
                            </p>

                            <br />
                       
                            <span><a href={d.lin} className="proj">{d.pag}</a></span>
                            </div>
                        </div>
                    <div className="right">
                        <a href={d.lin} className="proj"><img src={d.img} width="100%" height="100%" alt="" /></a>
                        
                    </div>
                </div>

            
            </div>))}
        </div>
        <img src="assets/ar.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/ar.png" className="arrow right" alt=""onClick={()=>handleClick()}/>
    </div>
    )
}
