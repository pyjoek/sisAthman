import './App.css';
import './styles/conts.css'
import './styles/style.css'
import { useState, useEffect } from 'react';
import Home from './comp/home';
import Safari from './comp/safari';
import Kilimanjaro from './comp/kilimanjaro';
import Island from './comp/island';
// import Menu from './comp/menu';
import home from './img/icons/homeicon.png';
import safari from './img/icons/safariicon.png';
import kili from './img/icons/kiliicon.png';
import island from './img/icons/islandicon.png';
import menu from './img/icons/menuicon.png';

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
                <div className="col-sm-5">
                <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/+255769477422">Click here to chat on WhatsApp</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Email</h3>
                    <p><a href="mailto:joelnrlson@gmail.com">Send us an Email</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Instagram</h3>
                    <p><a href="https://www.instagram.com/afroniatourstz?igsh=NTc4MTIwNjQ2YQ==">Visit our Instagram</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Facebook</h3>
                    <p><a href="https://www.facebook.com/profile.php?id=61559525511160&mibextid=rS40aB7S9Ucbxw6v">Visit our Facebook</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Twitter</h3>
                    <p><a href="https://twitter.com/anonymous">Follow us on Twitter</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Location</h3>
                    <p>Arusha, Tanzania</p>
                </div>
                <div className="col-sm-5">
                <h3>WhatsApp</h3>
                    <p><a href="https://wa.me/+255769477422">Click here to chat on WhatsApp</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Email</h3>
                    <p><a href="mailto:joelnrlson@gmail.com">Send us an Email</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Instagram</h3>
                    <p><a href="https://www.instagram.com/afroniatourstz?igsh=NTc4MTIwNjQ2YQ==">Visit our Instagram</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Facebook</h3>
                    <p><a href="https://www.facebook.com/profile.php?id=61559525511160&mibextid=rS40aB7S9Ucbxw6v">Visit our Facebook</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Twitter</h3>
                    <p><a href="https://twitter.com/anonymous">Follow us on Twitter</a></p>
                </div>
                <hr/>
                <div className="col-sm-5">
                    <h3>Location</h3>
                    <p>Arusha, Tanzania</p>
                </div>
            </div>
      </div>

      <nav className="navy">
        <button className="btn mine" onClick={() => {
          if (body !== <Home/>) {setBody(<Home/>);}}}><img src={home} alt="Home" /></button>

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
