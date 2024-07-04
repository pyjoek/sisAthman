import home from '../img/homeTop.jpg';
import a from '../img/1.jpeg';
import b from '../img/2.jpg';
import c from '../img/3.jpg';
import d from '../img/4.jpg';
import e from '../img/5.jpg';
import f from '../img/6.webp';
import '../styles/home.css';


function Home() {
    return(
        <>
        <section>
            <div><img src={home} alt="pic 1" className='topimg'/></div>
            <div className="aboutUs">
                <div>
                    <h1>Who Are We?</h1>
                    <hr />
                    <div className="ourstory">
                        Welcome to Afronia Tours, your ultimate destination for unforgettable adventures
                        in Tanzania. As a premier tour operator in East Africa, we specialize in providing
                        top-notch services for safari excursions, Mount Kilimanjaro trekking expeditions,
                        Zanzibar holidays, marine tourism experiences, balloon safaris, Serengeti wildlife
                        encounters, immigration assistance, and bird watching tours.
                    </div>
                </div>

                <div>
                    <h1>What's Our Mission?</h1>
                    <hr />
                    <div className="mission">
                        At Afronia Tours, we pride ourselves on offering unparalleled expertise, professionalism,
                        and personalized attention to ensure that your journey with us is nothing short of
                        exceptional. Whether you are seeking the thrill of a safari in the heart of the African
                        savannah, the challenge of conquering Africa's highest peak, Kilimanjaro, or the serenity
                        of exploring the pristine beaches of Zanzibar, we have the perfect itinerary to cater to
                        your every need and desire.
                    </div>
                </div>

                <div>
                    <h1>What's Our Desire For You?</h1>
                    <hr />
                    <div className="desire">
                        Our team of experienced guides, naturalists, and travel experts are dedicated to 
                        providing you with an immersive and authentic Tanzanian experience that will leave
                        you with memories to last a lifetime. From the majestic wildlife of the Serengeti 
                        to the vibrant underwater world of marine tourism, we are committed to showcasing 
                        the best that Tanzania has to offer.
                    </div>
                </div>

                <div>
                    <h1>Our Hopes For You</h1>
                    <hr />
                    <div className="desire">
                        Embark on a journey with Afronia Tours and let us take you on an adventure of a 
                        lifetime. Explore the wonders of Tanzania with us and discover why we are the 
                        preferred choice for travelers seeking exceptional service, unparalleled expertise, 
                        and unforgettable experiences in this breathtaking corner of the world.
                    </div>
                    <h1>Activities & Things To Do</h1>
                    <hr />
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-first'>
                        <img src="https://www.exploretanzaniatours.com/wp-content/uploads/2022/08/materuni-waterfalls-beautiful-750x450.jpg" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-6 order-sm-last'>
                        <p>
                            <h2>Waterfall & Coffee Walking Tour</h2> 
                            Spend a day immersed in Tanzania’s beautiful 
                            nature on this waterfall hiking tour from Arusha. With a private guide, hike 
                            to the foothills of the UNESCO-listed Mount Kilimanjaro where you find 
                            picturesque waterfalls and take a refreshing dip. Visit a local village to have 
                            lunch and learn about the local culture before ending with a tour of a coffee farm.
                        </p>
                    </div>
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-last'>
                        <img src={b} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-7 order-sm-first'>
                        <p>
                        <h2>Waterfall & Coffee Walking Tour </h2>
                        1000 times rarer than diamonds, Tanzanite—similar in 
                        tone to sapphire—is only produced in a small region in Tanzania. On this experience, 
                        customize how long you’d like to spend diving deep into the history of this gem. Go 
                        from watching gem grading and cutting yourself to exploring its discovery and talking 
                        with locals about its importance. Of course, you’ll also tour locally owned boutiques 
                        to go home with a gem yourself.
                        </p>
                    </div>
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-first'>
                        <img src={c} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-7 order-sm-last'>
                        <p>
                        <h2>Meserani Snake Park </h2>
                        The snake park provides various activities, take a guided tour and 
                        learn about some of the most dangerous snakes in the world, from the Black and Green 
                        Mamba, Egyptian Cobra, Puff Adders and many more. Capture your special moment and hold
                         a real live snake. Check out the 3m plus crocodiles at feeding time and touch a baby
                          crocodile.
                        </p>
                    </div>
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-last'>
                        <img src={d} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-7 order-sm-first'>
                        <p>
                        <h2>Hot Air Balloon Safari </h2>
                        A hot air balloon safari is a unique and thrilling way to 
                        explore the breathtaking beauty of the Serengeti ecosystem. This adventurous journey
                         allows you to experience the serene landscape from above, witnessing the diverse
                         wildlife and natural landscapes while floating effortlessly in the sky. 
                        </p>
                    </div>
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-first'>
                        <img src={e} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-7 order-sm-last'>
                        <p>
                        <h2>Safaris</h2> 
                        Safari in Tanzania refers to wildlife tours or expeditions which take visitors 
                        to Tanzania to observe and interact with its unique wildlife, including the famous
                        Serengeti National Park, the Ngorongoro Crater, and the Tarangire National Park. 
                        visitors can witness the Great Migration, see lions, leopards, cheetahs, zebras, and 
                        other animals in their natural habitat.
                        </p>
                    </div>
                </div>

                <div className="conts row">
                    <div className='col-sm-4 order-sm-last'>
                        <img src={f} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                    <div className='desc col-sm-7 order-sm-first'>
                        <p>
                        <h2>Cultural Tours & Markets</h2>
                        Learn how to help the Massai community, know its schools, medical centers and its way 
                        of life in Tanzania
                        </p>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default Home