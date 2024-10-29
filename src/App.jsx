
// styles
import './App.css';
import './styles/conts.css'
import './styles/style.css'
import logo from './img/icons/afronia.png'
// pages
import { useState, useEffect } from 'react';
import Home from './comp/home';
import BookingForm from './comp/form'
import Safari from './comp/safari';
import Kilimanjaro from './comp/kilimanjaro';
import Island from './comp/island';
import Gallery from './comp/gallery';
// bottom icons
import home from './img/icons/home.png';
import safari from './img/icons/safariicon.png';
import kili from './img/icons/kiliicon.png';
import island from './img/icons/islandicon.png';
import menu from './img/icons/contacts.png';
// menu icons
// import wa from './img/icons/wa.jpeg'
// import fb from './img/icons/fb.png'
// import ig from './img/icons/ig.webp'
// import mail from './img/icons/em.jpg'
// import lp from './img/icons/lp.png'

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
      <nav className="top d-flex justify-content-between align-items-center">
        <img src={logo} alt="" />
        <div className="contacts d-flex justify-content-between align-items-center">
            <h2><b>AFRONIA TOURS</b></h2>
            <button className="btn" onClick={togglePopup}>
                {/* <img src={menu} alt="menu" /> */}
                <img src={menu} alt="menu" style={{ width: '24px', height: '24px' }} />

            </button>
        </div>
    </nav>


      {body}

      <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn">&times;</div>
                {/* <div className="icon">
                <div>
                    <p><a href="https://wa.me/+255769477422" target='_blank'><img src={wa} alt="" className='icons'/></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="mailto:Info@afroniatours.co.tz" target='_blank'><img src={mail} alt="" className='icons'/></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="https://www.instagram.com/afroniatourstz?igsh=NTc4MTIwNjQ2YQ==" target='_blank'><img src={ig} className='icons' alt="" /></a></p>
                </div>
                <hr/>
                <div>
                    <p><a href="https://www.facebook.com/profile.php?id=61559525511160&mibextid=rS40aB7S9Ucbxw6v" target='_blank'><img className='icons' src={fb} alt="" /></a></p>
                </div>
                <hr/>
                </div>
                <div>
                    <p><img src={lp} alt="" className='icons'/><a href="#">Arusha, Tanzania</a></p>
                </div> */}
                <BookingForm/>
            </div>
      </div>

      <nav className="navy">
        <button className="btn mine" onClick={() => {
          if (body !== <Home/>) {setBody(<Home/>);}}}><div><img className="home" src={home} alt="Home" /><p>Home</p></div></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Safari/>) {setBody(<Safari/>);}}}><div><img src={safari} alt="safari" /><p>Safari</p></div></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Kilimanjaro/>) {setBody(<Kilimanjaro/>);}}}><div><img src={kili} alt="kili" /><p>Kilimanjaro</p></div></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Island/>) {setBody(<Island/>);}}}><div><img src={island} alt="island" /><p>Island</p></div></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Gallery/>) {setBody(<Gallery/>);}}}><div><img src={island} alt="gallery" /><p>Gallery</p></div></button>

        {/* <button className="btn mine menu" onClick={togglePopup}><img src={menu} alt="menu" /><p>Menu</p></button> */}
      </nav>
      
    </section>
  );
}

export default App;
