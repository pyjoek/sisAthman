import React from 'react';
import spice from '../img/spice.jpg';
import hist from '../img/historical.jpeg';
import '../styles/island.css'; // Import your custom CSS file

function Island() {
  return (
    <div className='conts'>
      <header>
        <h1>Welcome to Zanzibar</h1>
      </header>
      <section className="spice-tour">
        <img src={spice} alt="" className='spice img-fluid mx-auto d-block'/>
        <h2>Zanzibar Spice Tour</h2>
        <center>
        <p>
          The history of Zanzibar would be incomplete without the cloves, nutmeg, cinnamon, pepper, and many other spices which are essential ingredients in a Zanzibari’s everyday life, it is the island’s connection to spices and herbs. Zanzibar and Spice is a romantic entanglement that dates back to the 16th century.
        </p>
        </center>
      </section>
      <section className="tour-package">
        <img src={hist} alt="" className='spice img-fluid mx-auto d-block'/>
        <h2>Historical & Cultural Tour Package</h2>
        <center>
        <p>
          Experience the 4-day Serengeti & Ngorongoro Crater expedition, showcasing the diverse wildlife, stunning landscapes, and cultural encounters awaiting travelers on this safari adventure.
        </p>
        </center>
      </section>
      <section className="luxury-package">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XnRPWQEVm4XbSog5EznKdY4TdZTeUtwSRahULZd6PqAhjEWUDI98rIi2ps6mf-QMR_A&usqp=CAU" alt="" className='spice img-fluid mx-auto d-block'/>
        <h2>Luxury Resort Package</h2>
        <center>
        <p>
          Luxury Resort Packages for Zanzibar often offer a combination of opulent accommodations, exclusive amenities, and personalized services. Here’s what you might find in such packages.
        </p>
        </center>
      </section>
      {/* <footer>
        <p>&copy; 2024 Zanzibar Tourism</p>
      </footer> */}
    </div>
  );
}

export default Island;
