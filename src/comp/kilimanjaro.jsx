import "../styles/kili.css";
import RouteKili from '../img/landscape.webp';
import Summit from '../img/summit.jpg';
import Climbing from '../img/climbing.jpeg';
import Kilimanjaros from '../img/kilimanjaro.jpg';

function Kilimanjaro() {
  return (
    <main className="container">
      <h1 className="mt-6 text-center text-4xl font-bold">🏔️ Mount Kilimanjaro</h1>
      <p className="text-center text-lg mt-2">
        The Roof of Africa – A once-in-a-lifetime adventure in Tanzania
      </p>

      {/* Hero Image */}
        <img
          className="rounded-lg shadow-md w-full h-48 md:h-32 object-cover"
          src={Kilimanjaros}
          alt="Mount Kilimanjaro"
        />

      {/* About Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">About Mount Kilimanjaro</h2>
        <p className="leading-relaxed">
          Mount Kilimanjaro, located in northern Tanzania, is Africa’s highest peak, 
          rising 5,895 meters (19,341 feet) above sea level. Known as the 
          <b> tallest free-standing mountain in the world</b>, it attracts thousands of adventurers 
          every year. Kilimanjaro is made up of three volcanic cones: <b>Kibo</b>, <b>Mawenzi</b>, 
          and <b>Shira</b>. While dormant, the mountain is home to diverse ecosystems ranging 
          from lush rainforests to arctic-like glaciers at the summit.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">📸 Stunning Views</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="justify-center">
              <img
                className="rounded-lg shadow-md col-md-5 w-5/12"
                src={Summit}
                alt="Kilimanjaro Landscape"
              />
              <img
                className="rounded-lg shadow-md col-md-7 w-7/12"
                src={Climbing}
                alt="Climbing the summit"
              />
          </div>
          <img
            className="rounded-lg shadow-md col-md-12 w-/12"
            src={RouteKili}
            alt="Climbing routes"
          />
        </div>
      </section>

      {/* Trekking Routes */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🚶 Popular Trekking Routes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <b>Marangu Route</b> – Known as the “Coca-Cola Route,” the easiest path with hut accommodations.
          </li>
          <li>
            <b>Machame Route</b> – The most popular and scenic route, offering breathtaking views.
          </li>
          <li>
            <b>Lemosho Route</b> – Less crowded, longer, and highly recommended for acclimatization.
          </li>
          <li>
            <b>Rongai Route</b> – Approaches Kilimanjaro from the north, quieter and less trafficked.
          </li>
        </ul>
      </section>

      {/* Travel Tips */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">🌍 Travel Tips</h2>
        <div className="space-y-3">
          <p>✅ Best time to climb: <b>January–March</b> or <b>June–October</b></p>
          <p>✅ Pack warm clothes – temperatures drop below freezing near the summit.</p>
          <p>✅ Train with cardio & hikes before your trip to prepare for altitude.</p>
          <p>✅ A guided trek is required – solo climbs are not permitted.</p>
        </div>
      </section>
    </main>
  );
}

export default Kilimanjaro;
