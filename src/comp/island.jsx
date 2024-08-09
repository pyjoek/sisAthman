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

      <div className="itinerary-container">
        <h1>2 Nights Mnazi Bay Adventure</h1>

        <div className="row">
            <div className="day col-sm-12 col-md-6">
                <h2>Day 1: Arrival Day</h2>
                <p>
                    A whale and dolphin adventure tour in this area can be an unforgettable experience for nature lovers and adventure seekers alike.
                    Here are some key details you might consider for planning such a tour:
                </p>
                <p><strong>Tour Highlights:</strong></p>
                <ul>
                    <li><strong>Dolphin Watching:</strong> Mnazi Bay is famous for its resident populations of dolphins, particularly bottlenose dolphins. Tours often include boat trips where you can observe these playful creatures in their natural habitat.</li>
                    <li><strong>Whale Watching (Seasonal):</strong> Depending on the time of year, you might have the opportunity to see migrating whales. The best season for whale watching typically runs from July to November, when humpback whales migrate along the coast.</li>
                    <li><strong>Cultural Experiences:</strong> Some tours may incorporate visits to nearby fishing villages, giving you a glimpse of local culture and ways of life.</li>
                </ul>
            </div>

            <div className="day col-sm-12 col-md-6">
                <h2>Day 2</h2>
                <ul>
                    <li><strong>Birdwatching:</strong> Mnazi Bay, known for its stunning natural beauty and diverse ecosystems, offers an exciting experience for enthusiasts. The area is home to various bird species, including coastal and migratory birds, making it a prime location for spotting unique avian wildlife.</li>
                    <li><strong>Snorkeling and Diving:</strong> The waters around Mnazi Bay offer excellent snorkeling and diving opportunities, allowing you to explore coral reefs and marine biodiversity.</li>
                    <li><strong>Hiking on Sand Dunes:</strong> The sand dunes in the Mtwara region, particularly around the Mnazi Bay area, are a unique and striking feature of the coastline. This area is known for its diverse ecosystems, including stunning beaches, marine life, and of course, captivating sand dunes.</li>
                </ul>
            </div>
        </div>
    </div>
      
    <div className="itinerary-container">
    <h1>3 Days Nights Mnazi Bay Adventure</h1>

    <div className="row">
        <div className="day col-sm-12 col-md-6">
            <h2>Day 1: Arrival Day</h2>
            <p>
                A whale and dolphin adventure tour in this area can be an unforgettable experience for nature lovers and adventure seekers alike. Here are some key details:
            </p>
            <p><strong>Tour Highlights:</strong></p>
            <ul>
                <li><strong>Dolphin Watching:</strong> Mnazi Bay is famous for its resident populations of dolphins, particularly bottlenose dolphins. Tours often include boat trips where you can observe these playful creatures in their natural habitat.</li>
                <li><strong>Whale Watching (Seasonal):</strong> Depending on the time of year, you might have the opportunity to see migrating whales. The best season for whale watching typically runs from July to November, when humpback whales migrate along the coast.</li>
                <li><strong>Cultural Experiences:</strong> Some tours may incorporate visits to nearby fishing villages, giving you a glimpse of local culture and ways of life.</li>
            </ul>
        </div>

        <div className="day col-sm-12 col-md-6">
            <h2>Day 2</h2>
            <ul>
                <li><strong>Birdwatching:</strong> Mnazi Bay, known for its stunning natural beauty and diverse ecosystems, offers an exciting experience for bird enthusiasts. The area is home to various bird species, including coastal and migratory birds, making it a prime location for spotting unique avian wildlife.</li>
                <li><strong>Snorkeling and Diving:</strong> The waters around Mnazi Bay offer excellent snorkeling and diving opportunities, allowing you to explore coral reefs and marine biodiversity.</li>
                <li><strong>Hiking on Sand Dunes:</strong> The sand dunes in the Mtwara region, particularly around the Mnazi Bay area, are a unique and striking feature of the coastline. This area is known for its diverse ecosystems, including stunning beaches, marine life, and captivating sand dunes.</li>
            </ul>
        </div>

        <div className="day col-sm-12 col-md-6 mx-auto mt-2">
            <h2>Day 3</h2>
            <p>
                Cruising along the Ruvuma Estuary, famous for its extensive mangrove forests and rich biodiversity, offers a unique and rewarding experience. You will enjoy sightings of wildlife, including groups of hippos and crocodiles, while observing the connection of the Ruvuma River as it flows into the Indian Ocean. This scenic journey allows you to appreciate the natural beauty and ecological significance of the area, making for an unforgettable adventure.
            </p>
        </div>
    </div>
</div>


    </div>
  );
}

export default Island;
