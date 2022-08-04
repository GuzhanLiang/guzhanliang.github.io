
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import"./portfolio.scss"

export default function Portfolio() {
  const [selected, setSeleted] = useState("featured")
  
  const list=[
    {
    id:"featured",
    title:"Website",
    },
    {
    id:"mobile",
    title:"Mobile App"
    },
    {
    id:"game",
    title:"Game"
    },
    {    
    id:"sql",
    title:"SQL",
    },
  ];
  return (
    <div className='portfolio' id="portfolio">
      <h1>Projects</h1>
      <ul>
          {list.map((item) => (
            <PortfolioList title = {item.title} 
            acctive = {selected === item.id} 
            setSelected={setSeleted}
            id={item.id}
            />
          ))}
      </ul>
      <div className="container">
        <div className="item">
          <a href="#intro" ><img src="assets/pw.png"  alt=""></img></a>
          <h3>Website</h3>
        </div>
          <div className="item" >
          <a href="assets/pa.mp4" ><img src="assets/ma.png"  alt=""></img></a>
          <h3>Mobile App</h3>
        </div>
        <div className="item">
          <a href="assets/ga.mp4"><img src="assets/pg.png"  alt="">
          </img></a>
          <h3>Game</h3>
        </div>
        <div className="item">
          <a href="https://github.com/GuzhanLiang/first-SQL/blob/main/first%20sql.sql" ><img src="assets/SQL.png"  alt=""></img></a>
          <h3>SQL</h3>
        </div>
        
      </div>
    </div>
  )
}
