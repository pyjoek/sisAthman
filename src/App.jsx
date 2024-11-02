// styles
import './App.css';
import './styles/conts.css';
import './styles/style.css';
import logo from './img/icons/afronia.png';

// pages
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './comp/home';
import BookingForm from './comp/form';
import Safari from './comp/safari';
import Kilimanjaro from './comp/kilimanjaro';
import Island from './comp/island';
import Gallery from './comp/gallery';
import SafariBookingForm from './comp/booking';

// bottom icons
import home from './img/icons/home.png';
import safari from './img/icons/safariicon.png';
import kili from './img/icons/kiliicon.png';
import island from './img/icons/islandicon.png';
import menu from './img/icons/contacts.png';

function App() {
  const togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
  };

  return (
    <Router>
      <section>
        <nav className="top d-flex justify-content-between align-items-center">
          <div className='logo-container'>
            <img src={logo} alt="" />
            <Link to="/">
              <h2><b>AFRONIA TOURS</b></h2>
            </Link>
          </div>
          <div className="contacts d-flex justify-content-between align-items-center">
            <h2><b>PLAN YOUR TRIP</b></h2>
            <Link to="/booking" className="book-now-link">
              <h2><b>BOOK NOW</b></h2>
            </Link>
            <button className="btn" onClick={togglePopup}>
              <img src={menu} alt="menu" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/safari" element={<Safari />} />
          <Route path="/kilimanjaro" element={<Kilimanjaro />} />
          <Route path="/island" element={<Island />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<SafariBookingForm />} />
        </Routes>

        <div className="popup" id="popup-1">
          <div className="overlay"></div>
          <div className="content">
            <div className="close-btn" onClick={togglePopup}>&times;</div>
            <BookingForm />
          </div>
        </div>

        <nav className="navy">
          <Link to="/" className="btn mine"><div><img className="home" src={home} alt="Home" /><p>Home</p></div></Link>
          <Link to="/safari" className="btn mine"><div><img src={safari} alt="safari" /><p>Safari</p></div></Link>
          <Link to="/kilimanjaro" className="btn mine"><div><img src={kili} alt="kili" /><p>Kilimanjaro</p></div></Link>
          <Link to="/island" className="btn mine"><div><img src={island} alt="island" /><p>Island</p></div></Link>
          <Link to="/gallery" className="btn mine"><div><img src={island} alt="gallery" /><p>Gallery</p></div></Link>
        </nav>
      </section>
    </Router>
  );
}

export default App;
