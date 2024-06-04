import './App.css';
import './styles/style.css'
import { useState } from 'react';
import Home from './comp/home';
import Safari from './comp/safari';
import Kilimanjaro from './comp/kilimanjaro';
import Island from './comp/island';
import Menu from './comp/menu';
import home from './img/icons/homeicon.png';
import safari from './img/icons/safariicon.png';
import kili from './img/icons/kiliicon.png';
import island from './img/icons/islandicon.png';
import menu from './img/icons/menuicon.png';

function App() {
  const [body, setBody] = useState(<Home />);
  

  return (
    <section>
      <nav className="top">
            <h1>Jina la kampuni lina kaa hapa</h1>
        </nav>

      {body}

      <nav className="navy">
        <button className="btn mine" onClick={() => {
          if (body !== <Home/>) {setBody(<Home/>);}}}><img src={home} alt="Home" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Safari/>) {setBody(<Safari/>);}}}><img src={safari} alt="safari" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Kilimanjaro/>) {setBody(<Kilimanjaro/>);}}}><img src={kili} alt="kili" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Island/>) {setBody(<Island/>);}}}><img src={island} alt="island" /></button>

        <button className="btn mine" onClick={() => {
          if (body !== <Menu/>) {setBody(<Menu/>);}}}><img src={menu} alt="menu" /></button>
      </nav>
    </section>
  );
}

export default App;
