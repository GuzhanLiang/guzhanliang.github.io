import "./topbar.scss"





export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Guzhan Liang</a>

        <div className="container">
          <a href="https://github.com/GuzhanLiang">
          <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/guzhan-chino-liang-ab2039193/">
          <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
        <div>
          <a href="https://discordapp.com/users/755491741288759458">
          <ion-icon name="logo-discord"></ion-icon>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/chino50091/">
          <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>

        <div>
          <a href="assets/wechat.jpg">
          <ion-icon name="logo-wechat"></ion-icon>
          </a>
        </div>


      </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="list1"></span>
                <span className="list2"></span>
                <span className="list3"></span>
          </div>
        </div>
      </div>
    </div>
   
  );



}
