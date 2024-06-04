import '../styles/style.css'
// import Contacts from './contacts';
import { useState } from 'react';
import About from './about';
import Home from './home';

const Bottom = () => {
    const [body, setBody] = useState(<Home />)
    return (
        <>
            {{body}}
            <nav className="navy">
                <button className="btn btn-primary" onClick={setBody(<Home/>)}>HOME</button>
                <button className="btn btn-primary" onClick={setBody(<About/>)}>ABOUT</button>
            </nav>
        </>
    )
}

export default Bottom