import home from '../img/homeTop.jpg';
import e from '../img/5.jpg';
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

                <div className="conts">
                    <h1>Activities & Things To Do</h1>
                    <hr />
                </div>

                <div className='divs'>
                    <div className=' order-sm-last'>
                        <p>
                            <h2>Waterfall</h2> 
                            Spend a day immersed in Tanzania’s beautiful 
                            nature on this waterfall hiking tour from Arusha. With a private guide, hike 
                            to the foothills of the UNESCO-listed Mount Kilimanjaro where you find 
                            picturesque waterfalls and take a refreshing dip. Visit a local village to have 
                            lunch and learn about the local culture before ending with a tour of a coffee farm.
                        </p>
                    </div>
                    <div className='order-sm-first'>
                        <img src="https://www.exploretanzaniatours.com/wp-content/uploads/2022/08/materuni-waterfalls-beautiful-750x450.jpg" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>

                <div className='divs'>
                    <div className=' order-sm-first'>
                        <p>
                        <h2>Coffee Walking Tour </h2>
                        1000 times rarer than diamonds, Tanzanite—similar in 
                        tone to sapphire—is only produced in a small region in Tanzania. On this experience, 
                        customize how long you’d like to spend diving deep into the history of this gem. Go 
                        from watching gem grading and cutting yourself to exploring its discovery and talking 
                        with locals about its importance. Of course, you’ll also tour locally owned boutiques 
                        to go home with a gem yourself.
                        </p>
                    </div>
                    <div className='order-sm-last'>
                        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s4f4dce6430c23411/image/ic4a8d19ce5075b2d/version/1499785221/image.jpg" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>

                <div className='divs'>
                    <div className=' order-sm-last'>
                        <p>
                        <h2>Meserani Snake Park </h2>
                        The snake park provides various activities, take a guided tour and 
                        learn about some of the most dangerous snakes in the world, from the Black and Green 
                        Mamba, Egyptian Cobra, Puff Adders and many more. Capture your special moment and hold
                         a real live snake. Check out the 3m plus crocodiles at feeding time and touch a baby
                          crocodile.
                        </p>
                    </div>
                    <div className='order-sm-first'>
                        <img src="https://img.truvvle.com/?src=aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby92Y2Nsb3RoaW5nJTJGMjAyMDAxMzBUMTEyMTQxODM1Wi1JTUdfMjAyMDAxMDFfMTgzNDAzXzEuanBn&width=1920" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>

                <div className='divs'>
                    <div className=' order-sm-first'>
                        <p>
                        <h2>Hot Air Balloon Safari </h2>
                        A hot air balloon safari is a unique and thrilling way to 
                        explore the breathtaking beauty of the Serengeti ecosystem. This adventurous journey
                         allows you to experience the serene landscape from above, witnessing the diverse
                         wildlife and natural landscapes while floating effortlessly in the sky. 
                        </p>
                    </div>
                    <div className='order-sm-last'>
                        <img src="https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Serengeti-Hot-Air-Balloons.jpg" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>

                <div className='divs'>
                    <div className=' order-sm-last'>
                        <p>
                        <h2>Safaris</h2> 
                        Safari in Tanzania refers to wildlife tours or expeditions which take visitors 
                        to Tanzania to observe and interact with its unique wildlife, including the famous
                        Serengeti National Park, the Ngorongoro Crater, and the Tarangire National Park. 
                        visitors can witness the Great Migration, see lions, leopards, cheetahs, zebras, and 
                        other animals in their natural habitat.
                        </p>
                    </div>
                    <div className='order-sm-first'>
                        <img src={e} alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>

                <div className='divs'>
                    <div className=' order-sm-first'>
                        <p>
                        <h2>Cultural Tours & Markets</h2>
                        Learn how to help the Massai community, know its schools, medical centers and its way 
                        of life in Tanzania
                        </p>
                    </div>
                    <div className='order-sm-last'>
                        <img src="https://www.leopard-tours.com/wp-content/uploads/2015/10/Tanzania-Cultural-Tours-2-1024x682.jpg" alt="pic 1" className='images img-fluid mx-auto d-block'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home