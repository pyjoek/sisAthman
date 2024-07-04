// styles
import './App.css';
import './styles/conts.css'
import './styles/style.css'
// pages
import { useState, useEffect } from 'react';
import Home from './comp/home';
import Safari from './comp/safari';
import Kilimanjaro from './comp/kilimanjaro';
import Island from './comp/island';
// bottom icons
import home from './img/icons/home.png';
import safari from './img/icons/safariicon.png';
import kili from './img/icons/kiliicon.png';
import island from './img/icons/islandicon.png';
import menu from './img/icons/menuicon.png';
// menu icons
import wa from './img/icons/wa.jpeg'
import fb from './img/icons/fb.png'
import ig from './img/icons/ig.webp'
import twit from './img/icons/twit.webp'
import mail from './img/icons/em.jpg'
import lp from './img/icons/lp.png'

function App() {
  const [body, setBody] = useState(<Home />);
  const togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
  }

  useEffect(() => {
    // Add event listener for popup close button
    document.querySelector('.close-btn').addEventListener('click', togglePopup);
  }, []);
  
  return (
    <section>
      {/* <nav className="top">
            <h1>Jina la kampuni lina kaa hapa</h1>
        </nav> */}

      {body}

      <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn">&times;</div>
                <div className="icon">
                <div>
                    <p><a href="https://wa.me/+255769477422"><img src={wa} alt="" className='icons'/></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="mailto:joelnrlson@gmail.com"><img src={mail} alt="" className='icons'/></a></p>
                </div>
                <hr/>
                <div> 
                    <p><a href="https://www.instagram.com/afroniatourstz?igsh=NTc4MTIwNjQ2YQ=="><img src={ig} className='icons' alt="" /></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="https://www.facebook.com/profile.php?id=61559525511160&mibextid=rS40aB7S9Ucbxw6v"><img className='icons' src={fb} alt="" /></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="https://twitter.com/anonymous"><img src={twit} alt="" className='icons'/></a></p>
                </div>
                </div>
                <div>
                    <p><img src={lp} alt="" className='icons'/>Arusha, Tanzania</p>
                </div>
            </div>
      </div>

      <nav className="navy">
        <button className="btn mine" onClick={() => {
          if (body !== <Home/>) {setBody(<Home/>);}}}><img className="home" src={home} alt="Home" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Safari/>) {setBody(<Safari/>);}}}><img src={safari} alt="safari" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Kilimanjaro/>) {setBody(<Kilimanjaro/>);}}}><img src={kili} alt="kili" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Island/>) {setBody(<Island/>);}}}><img src={island} alt="island" /></button>
        <button className="btn mine menu" onClick={togglePopup}><img src={menu} alt="menu" /></button>
      </nav>
      
    </section>
  );
}

export default App;
