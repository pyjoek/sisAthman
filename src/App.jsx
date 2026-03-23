import { useState, useEffect, useRef } from "react";

// ── Fonts ──────────────────────────────────────────────────────────────────
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  `}</style>
);

// ── CSS ────────────────────────────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --sand:    #f5ede0;
      --clay:    #c8a97e;
      --earth:   #8b6340;
      --forest:  #2d4a3e;
      --dusk:    #1a2e28;
      --cream:   #fdf8f2;
      --smoke:   #6b6355;
      --gold:    #d4a853;
      --white:   #ffffff;
      --serif:   'Cormorant Garamond', Georgia, serif;
      --sans:    'DM Sans', sans-serif;
      --radius:  4px;
      --trans:   0.35s cubic-bezier(0.4,0,0.2,1);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: var(--sans);
      background: var(--cream);
      color: var(--dusk);
      overflow-x: hidden;
    }

    /* ── NAV ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2.5rem;
      height: 68px;
      background: rgba(26,46,40,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(212,168,83,0.2);
      transition: background var(--trans);
    }
    .nav-logo {
      font-family: var(--serif);
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--gold);
      letter-spacing: 0.03em;
      cursor: pointer;
    }
    .nav-links {
      display: flex; gap: 2rem; list-style: none;
    }
    .nav-links li button {
      background: none; border: none; cursor: pointer;
      font-family: var(--sans); font-size: 0.82rem; font-weight: 500;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: rgba(245,237,224,0.75);
      transition: color var(--trans);
      padding: 4px 0;
      position: relative;
    }
    .nav-links li button::after {
      content: ''; position: absolute; bottom: -2px; left: 0;
      width: 0; height: 1px; background: var(--gold);
      transition: width var(--trans);
    }
    .nav-links li button:hover, .nav-links li button.active {
      color: var(--gold);
    }
    .nav-links li button:hover::after, .nav-links li button.active::after {
      width: 100%;
    }
    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      background: none; border: none; cursor: pointer; padding: 4px;
    }
    .hamburger span {
      display: block; width: 24px; height: 2px;
      background: var(--sand); border-radius: 2px;
      transition: var(--trans);
    }

    /* ── HERO ── */
    .hero {
      position: relative; height: 100vh; min-height: 600px;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .hero-slides {
      position: absolute; inset: 0;
    }
    .hero-slide {
      position: absolute; inset: 0;
      background-size: cover; background-position: center;
      opacity: 0; transition: opacity 1.2s ease;
    }
    .hero-slide.active { opacity: 1; }
    .hero-slide::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, rgba(26,46,40,0.3) 0%, rgba(26,46,40,0.6) 100%);
    }
    .hero-content {
      position: relative; z-index: 2; text-align: center; color: var(--white);
      padding: 0 1.5rem; max-width: 720px;
      animation: fadeUp 1.2s ease both;
    }
    .hero-eyebrow {
      font-family: var(--sans); font-size: 0.78rem; font-weight: 500;
      letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--gold); margin-bottom: 1.2rem;
    }
    .hero-title {
      font-family: var(--serif); font-size: clamp(2.6rem, 6vw, 4.8rem);
      font-weight: 300; line-height: 1.12; margin-bottom: 1rem;
      letter-spacing: -0.01em;
    }
    .hero-title em { font-style: italic; color: var(--gold); }
    .hero-sub {
      font-size: 1rem; font-weight: 300; opacity: 0.85;
      margin-bottom: 2.5rem; letter-spacing: 0.02em;
    }
    .hero-dots {
      position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
      display: flex; gap: 8px; z-index: 2;
    }
    .hero-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.4); cursor: pointer;
      transition: background var(--trans), transform var(--trans);
      border: none;
    }
    .hero-dot.active { background: var(--gold); transform: scale(1.3); }

    /* ── BUTTONS ── */
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--sans); font-size: 0.8rem; font-weight: 500;
      letter-spacing: 0.14em; text-transform: uppercase;
      padding: 14px 32px; border-radius: var(--radius);
      cursor: pointer; transition: var(--trans); text-decoration: none;
      border: none;
    }
    .btn-gold {
      background: var(--gold); color: var(--dusk);
    }
    .btn-gold:hover { background: var(--clay); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(212,168,83,0.35); }
    .btn-outline {
      background: transparent; color: var(--white);
      border: 1px solid rgba(255,255,255,0.5);
    }
    .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
    .btn-forest { background: var(--forest); color: var(--white); }
    .btn-forest:hover { background: var(--dusk); transform: translateY(-1px); }
    .btn-whatsapp { background: #25D366; color: var(--white); }
    .btn-whatsapp:hover { background: #1ebe5d; }

    /* ── SECTIONS ── */
    .section { padding: 7rem 2rem; }
    .section-alt { background: var(--sand); }
    .container { max-width: 1100px; margin: 0 auto; }
    .section-label {
      font-family: var(--sans); font-size: 0.72rem; font-weight: 500;
      letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold);
      margin-bottom: 0.8rem; display: block;
    }
    .section-title {
      font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 300; line-height: 1.2; color: var(--dusk);
      margin-bottom: 1.2rem;
    }
    .section-title em { font-style: italic; color: var(--earth); }
    .divider {
      width: 48px; height: 2px; background: var(--gold); margin-bottom: 2rem;
    }

    /* ── ABOUT ── */
    .about-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 5rem; align-items: start; margin-bottom: 5rem;
    }
    .about-text p {
      font-size: 1.05rem; line-height: 1.85; color: var(--smoke);
      font-weight: 300;
    }

    /* ── ACTIVITIES ── */
    .activities-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem; margin-top: 3rem;
    }
    .activity-card {
      border-radius: 8px; overflow: hidden; background: var(--white);
      box-shadow: 0 2px 20px rgba(0,0,0,0.06);
      transition: transform var(--trans), box-shadow var(--trans);
    }
    .activity-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.12); }
    .activity-img {
      width: 100%; height: 220px; object-fit: cover; display: block;
    }
    .activity-body { padding: 1.5rem; }
    .activity-body h3 {
      font-family: var(--serif); font-size: 1.35rem; font-weight: 400;
      color: var(--dusk); margin-bottom: 0.6rem;
    }
    .activity-body p {
      font-size: 0.9rem; line-height: 1.7; color: var(--smoke); font-weight: 300;
    }

    /* ── SAFARI PAGE ── */
    .safari-hero {
      height: 420px; background-size: cover; background-position: center;
      display: flex; align-items: flex-end; padding: 3rem;
      border-radius: 8px; overflow: hidden; margin-bottom: 4rem;
      position: relative;
    }
    .safari-hero::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(26,46,40,0.75) 0%, transparent 60%);
    }
    .safari-hero-text { position: relative; z-index: 1; color: var(--white); }
    .safari-hero-text h1 {
      font-family: var(--serif); font-size: 2.8rem; font-weight: 300;
    }

    .safari-section { margin-bottom: 4rem; }
    .safari-section h2 {
      font-family: var(--serif); font-size: 1.8rem; font-weight: 400;
      color: var(--dusk); margin-bottom: 1rem;
    }
    .safari-section p {
      font-size: 0.97rem; line-height: 1.85; color: var(--smoke);
      font-weight: 300; margin-bottom: 1rem;
    }
    .safari-section img {
      width: 100%; border-radius: 6px; margin-top: 1.5rem; display: block;
    }

    /* ── ITINERARY ── */
    .itinerary {
      background: var(--forest); border-radius: 8px; padding: 3rem;
      margin-top: 3rem; color: var(--white);
    }
    .itinerary h2 {
      font-family: var(--serif); font-size: 1.8rem; font-weight: 300;
      color: var(--gold); margin-bottom: 2rem;
    }
    .itinerary-days { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
    .itin-day {
      background: rgba(255,255,255,0.07); border-radius: 6px; padding: 1.5rem;
      border-top: 2px solid var(--gold);
    }
    .itin-day h3 {
      font-family: var(--serif); font-size: 1.1rem; font-weight: 400;
      color: var(--gold); margin-bottom: 0.75rem;
    }
    .itin-day p, .itin-day li {
      font-size: 0.88rem; line-height: 1.7; color: rgba(245,237,224,0.8); font-weight: 300;
    }
    .itin-day ul { padding-left: 1.1rem; }
    .itin-day li { margin-bottom: 0.4rem; }

    /* ── KILIMANJARO ── */
    .kili-hero {
      width: 100%; height: 380px; object-fit: cover;
      border-radius: 8px; margin-bottom: 3rem; display: block;
    }
    .kili-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
    .kili-block h2 {
      font-family: var(--serif); font-size: 1.6rem; font-weight: 400;
      color: var(--dusk); margin-bottom: 1rem;
    }
    .kili-block p {
      font-size: 0.95rem; line-height: 1.85; color: var(--smoke); font-weight: 300;
    }
    .routes-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
    .routes-list li {
      padding: 1rem 1.25rem; background: var(--white); border-radius: var(--radius);
      border-left: 3px solid var(--gold);
      font-size: 0.9rem; line-height: 1.6; color: var(--smoke); font-weight: 300;
    }
    .routes-list li strong { color: var(--dusk); font-weight: 500; }
    .tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
    .tip-card {
      background: var(--forest); color: var(--white); border-radius: 6px;
      padding: 1.25rem; font-size: 0.88rem; line-height: 1.65; font-weight: 300;
    }
    .tip-card .tip-icon { font-size: 1.4rem; margin-bottom: 0.5rem; }

    /* ── ZANZIBAR ── */
    .zanzibar-packages { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem; }
    .zanzibar-card {
      border-radius: 8px; overflow: hidden; background: var(--white);
      box-shadow: 0 2px 16px rgba(0,0,0,0.07);
    }
    .zanzibar-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
    .zanzibar-card-body { padding: 1.5rem; }
    .zanzibar-card-body h3 {
      font-family: var(--serif); font-size: 1.3rem; font-weight: 400;
      color: var(--dusk); margin-bottom: 0.6rem;
    }
    .zanzibar-card-body p { font-size: 0.88rem; line-height: 1.7; color: var(--smoke); font-weight: 300; }

    /* ── GALLERY ── */
    .gallery-toggle { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .gallery-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px;
    }
    .gallery-item {
      aspect-ratio: 4/3; overflow: hidden; border-radius: 6px;
      background: var(--sand);
      display: flex; align-items: center; justify-content: center;
    }
    .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
    .gallery-item:hover img { transform: scale(1.05); }
    .gallery-placeholder {
      width: 100%; height: 100%; background: linear-gradient(135deg, var(--sand) 0%, var(--clay) 100%);
      display: flex; align-items: center; justify-content: center;
      color: var(--earth); font-family: var(--serif); font-size: 1.1rem; font-style: italic;
    }

    /* ── BOOKING ── */
    .booking-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
    .booking-info h2 {
      font-family: var(--serif); font-size: 2.2rem; font-weight: 300; color: var(--dusk); margin-bottom: 1rem;
    }
    .booking-info p { font-size: 0.95rem; line-height: 1.85; color: var(--smoke); font-weight: 300; margin-bottom: 2rem; }
    .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
    .contact-icon { width: 40px; height: 40px; background: var(--forest); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
    .contact-item span { font-size: 0.9rem; color: var(--smoke); font-weight: 300; }

    .booking-form-card {
      background: var(--white); border-radius: 8px; padding: 2.5rem;
      box-shadow: 0 4px 32px rgba(0,0,0,0.08);
    }
    .booking-form-card h3 {
      font-family: var(--serif); font-size: 1.5rem; font-weight: 400; color: var(--dusk); margin-bottom: 1.5rem;
    }
    .form-group { margin-bottom: 1.1rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group label {
      display: block; font-size: 0.75rem; font-weight: 500;
      letter-spacing: 0.1em; text-transform: uppercase; color: var(--smoke);
      margin-bottom: 0.4rem;
    }
    .form-group input, .form-group select, .form-group textarea {
      width: 100%; padding: 10px 14px;
      border: 1px solid rgba(139,99,64,0.25); border-radius: var(--radius);
      font-family: var(--sans); font-size: 0.9rem; color: var(--dusk);
      background: var(--cream); transition: border-color var(--trans);
      outline: none;
    }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
      border-color: var(--gold); box-shadow: 0 0 0 3px rgba(212,168,83,0.12);
    }
    .form-group textarea { resize: vertical; min-height: 90px; }
    .form-section-title {
      font-family: var(--serif); font-size: 1rem; font-weight: 400; color: var(--earth);
      margin: 1.5rem 0 0.8rem; padding-top: 1rem; border-top: 1px solid rgba(139,99,64,0.15);
    }
    .form-actions { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }

    /* ── FOOTER ── */
    .footer {
      background: var(--dusk); color: var(--sand); padding: 4rem 2rem 2rem;
    }
    .footer-grid {
      display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem;
    }
    .footer-brand { font-family: var(--serif); font-size: 1.8rem; color: var(--gold); font-weight: 400; margin-bottom: 1rem; }
    .footer-desc { font-size: 0.88rem; line-height: 1.75; color: rgba(245,237,224,0.6); font-weight: 300; }
    .footer-heading { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
    .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
    .footer-links li button { background: none; border: none; cursor: pointer; font-family: var(--sans); font-size: 0.88rem; color: rgba(245,237,224,0.6); transition: color var(--trans); padding: 0; text-align: left; }
    .footer-links li button:hover { color: var(--gold); }
    .footer-bottom { border-top: 1px solid rgba(245,237,224,0.1); padding-top: 1.5rem; font-size: 0.8rem; color: rgba(245,237,224,0.4); display: flex; justify-content: space-between; }

    /* ── ANIMATIONS ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-in { animation: fadeUp 0.7s ease both; }

    /* ── RESPONSIVE ── */
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-links.open { display: flex; flex-direction: column; position: fixed; top: 68px; left: 0; right: 0; background: var(--dusk); padding: 1.5rem 2rem; gap: 1.5rem; }
      .hamburger { display: flex; }
      .about-grid, .kili-grid, .booking-layout, .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
      .form-row { grid-template-columns: 1fr; }
      .section { padding: 4rem 1.25rem; }
    }
  `}</style>
);

// ── DATA ───────────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  { bg: "https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Serengeti-Hot-Air-Balloons.jpg" },
  { bg: "https://images.stockcake.com/public/3/d/6/3d63a6b9-6627-48eb-80b8-855c352deeea_large/safari-sunset-adventure-stockcake.jpg" },
  { bg: "https://cloudfront.safaribookings.com/blog/2021/11/00-top-10-best-tanzania-safari-lodges-camps-BW-header1200px.jpg" },
  { bg: "https://altezza.travel/upload/medialibrary/4f5/spn6zvn48ntlppwd3y0husljvqtc88tp.webp" },
];

const ACTIVITIES = [
  { title: "Waterfall Hiking", img: "https://www.exploretanzaniatours.com/wp-content/uploads/2022/08/materuni-waterfalls-beautiful-750x450.jpg", desc: "Hike to the foothills of Mount Kilimanjaro, discover picturesque waterfalls and take a refreshing dip. Visit a local village for lunch and explore a coffee farm." },
  { title: "Hot Air Balloon Safari", img: "https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Serengeti-Hot-Air-Balloons.jpg", desc: "Float above the Serengeti ecosystem, witnessing diverse wildlife and breathtaking landscapes from a completely unique vantage point." },
  { title: "Wildlife Safaris", img: "https://altezza.travel/upload/medialibrary/4f5/spn6zvn48ntlppwd3y0husljvqtc88tp.webp", desc: "Witness the Great Migration, spot the Big Five, and experience Tanzania's legendary national parks — Serengeti, Ngorongoro, Tarangire." },
  { title: "Cultural Tours & Markets", img: "https://www.leopard-tours.com/wp-content/uploads/2015/10/Tanzania-Cultural-Tours-2-1024x682.jpg", desc: "Immerse yourself in Maasai community life, visit schools, medical centers, and learn about local traditions and ways of life." },
  { title: "Meserani Snake Park", img: "https://img.truvvle.com/?src=aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby92Y2Nsb3RoaW5nJTJGMjAyMDAxMzBUMTEyMTQxODM1Wi1JTUdfMjAyMDAxMDFfMTgzNDAzXzEuanBn&width=1920", desc: "Learn about the world's most dangerous snakes, feed crocodiles, and hold a baby croc at this fascinating park near Arusha." },
  { title: "Coffee Walking Tour", img: "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s4f4dce6430c23411/image/ic4a8d19ce5075b2d/version/1499785221/image.jpg", desc: "Discover Tanzania's rich coffee heritage on a guided farm walk, from bean to cup, through lush highland plantations." },
];

const GALLERY_IMAGES = [
  "https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Serengeti-Hot-Air-Balloons.jpg",
  "https://altezza.travel/upload/medialibrary/4f5/spn6zvn48ntlppwd3y0husljvqtc88tp.webp",
  "https://cloudfront.safaribookings.com/blog/2021/11/00-top-10-best-tanzania-safari-lodges-camps-BW-header1200px.jpg",
  "https://images.stockcake.com/public/3/d/6/3d63a6b9-6627-48eb-80b8-855c352deeea_large/safari-sunset-adventure-stockcake.jpg",
  "https://www.exploretanzaniatours.com/wp-content/uploads/2022/08/materuni-waterfalls-beautiful-750x450.jpg",
  "https://www.leopard-tours.com/wp-content/uploads/2015/10/Tanzania-Cultural-Tours-2-1024x682.jpg",
  "https://travelguide.co.tz/wp-content/uploads/2018/04/Marc-Mol_3_small.jpg",
  "https://www.backtoafricasafaris.com/wp-content/uploads/2021/07/luxury-tanzania-safari-tours.jpg",
  "https://img.truvvle.com/?src=aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby92Y2Nsb3RoaW5nJTJGMjAyMDAxMzBUMTEyMTQxODM1Wi1JTUdfMjAyMDAxMDFfMTgzNDAzXzEuanBn&width=1920",
  "https://image.jimcdn.com/app/cms/image/transf/dimension=2048x2048:format=jpg/path/s4f4dce6430c23411/image/ic4a8d19ce5075b2d/version/1499785221/image.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XnRPWQEVm4XbSog5EznKdY4TdZTeUtwSRahULZd6PqAhjEWUDI98rIi2ps6mf-QMR_A&usqp=CAU",
  "https://www.serengetiparktanzania.com/wp-content/uploads/2019/07/Serengeti-Hot-Air-Balloons.jpg",
];

// ── COMPONENTS ─────────────────────────────────────────────────────────────

function Nav({ page, setPage, menuOpen, setMenuOpen }) {
  const pages = ["Home", "Safari", "Kilimanjaro", "Zanzibar", "Gallery", "Book Now"];
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage("Home")}>Afronia Tours</div>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {pages.map(p => (
          <li key={p}>
            <button
              className={page === p ? "active" : ""}
              onClick={() => { setPage(p); setMenuOpen(false); }}
            >{p}</button>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function Hero({ setPage }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      <div className="hero-slides">
        {HERO_SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide${i === slide ? " active" : ""}`}
            style={{ backgroundImage: `url(${s.bg})` }} />
        ))}
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Tanzania · Zanzibar · Kilimanjaro</p>
        <h1 className="hero-title">Time for your next<br /><em>African adventure</em></h1>
        <p className="hero-sub">Let us plan it for you — seamlessly, unforgettably.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-gold" onClick={() => setPage("Book Now")}>Book Now</button>
          <button className="btn btn-outline" onClick={() => setPage("Safari")}>Explore Safaris</button>
        </div>
      </div>
      <div className="hero-dots">
        {HERO_SLIDES.map((_, i) => (
          <button key={i} className={`hero-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} />
        ))}
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-label">Who Are We</span>
              <h2 className="section-title">Africa made <em>easy</em></h2>
              <div className="divider" />
              <div className="about-text">
                <p>Welcome to Afronia Tours, your gateway to discovering the vibrant beauty and rich cultures of Africa. We craft seamless, unforgettable travel experiences that bring the continent's breathtaking landscapes, diverse traditions, and hidden gems right to your doorstep.</p>
              </div>
            </div>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Unparalleled <em>expertise</em></h2>
              <div className="divider" />
              <div className="about-text">
                <p>Whether you seek the thrill of a Serengeti safari, the challenge of conquering Kilimanjaro, or the serenity of Zanzibar's pristine beaches, we have the perfect itinerary. Every journey with Afronia Tours is crafted with professionalism and personalized care.</p>
              </div>
            </div>
          </div>

          <span className="section-label">Activities & Things To Do</span>
          <h2 className="section-title">Curated <em>experiences</em></h2>
          <div className="divider" />
          <div className="activities-grid">
            {ACTIVITIES.map((a, i) => (
              <div key={i} className="activity-card">
                <img src={a.img} alt={a.title} className="activity-img" />
                <div className="activity-body">
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "var(--forest)", padding: "4rem 2rem", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ color: "var(--gold)" }}>Ready to explore?</span>
          <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 300, color: "var(--white)", marginBottom: "1.5rem" }}>Start planning your <em style={{ fontStyle: "italic", color: "var(--gold)" }}>dream trip</em> today</h2>
          <button className="btn btn-gold" onClick={() => setPage("Book Now")}>Get a Free Quote</button>
        </div>
      </section>
    </>
  );
}

function SafariPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="safari-hero" style={{ backgroundImage: "url(https://images.stockcake.com/public/3/d/6/3d63a6b9-6627-48eb-80b8-855c352deeea_large/safari-sunset-adventure-stockcake.jpg)" }}>
          <div className="safari-hero-text">
            <p style={{ fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>Tanzania</p>
            <h1>Wildlife Safaris 2024</h1>
          </div>
        </div>

        <div className="safari-section">
          <h2>Wildlife Safaris in Tanzania</h2>
          <p>Tanzania, Africa's safari gem, is a wildlife enthusiast's paradise. Imagine exploring the majestic Ngorongoro Crater and the vast Serengeti National Park. The country is home to the legendary Big Five and countless other species — graceful giraffes, playful hippos, stealthy caracals, and African wild dogs.</p>
          <p>On a Tanzanian safari, you're not just observing. You're part of the scene. Animals roam freely, offering a genuine glimpse into their daily lives. As dusk falls, relax in comfortable lodges with the unique sounds of the savannah as your lullaby.</p>
          <img src="https://altezza.travel/upload/medialibrary/4f5/spn6zvn48ntlppwd3y0husljvqtc88tp.webp" alt="Wildlife" />
        </div>

        <div className="safari-section">
          <h2>What happens on a Safari?</h2>
          <p>Picture yourself in a vehicle with a pop-up roof, offering stunning 360-degree views. Animals often approach close enough for fantastic photo opportunities. Your journey immerses you in Tanzania's natural wonders — from Maasai villages to the Olduvai Gorge, the "Cradle of Mankind."</p>
          <p>Afronia Tours also offers walking safaris, hot air balloon flights, and off-the-beaten-path adventures to enrich your experience.</p>
        </div>

        <div className="safari-section">
          <h2>The Big Five & More</h2>
          <p>Tanzania teems with lions, leopards, buffaloes, rhinos, and elephants — the legendary Big Five. Beyond them, you'll find cheetahs, wildebeests, zebras, and over 1,156 bird species.</p>
          <img src="https://altezza.travel/upload/medialibrary/4f5/spn6zvn48ntlppwd3y0husljvqtc88tp.webp" alt="Big Five" />
        </div>

        <div className="safari-section">
          <h2>Our Safari Vehicles</h2>
          <p>Our fleet includes customized Land Cruisers from 2016–2023, outfitted with Wi-Fi, a fridge, comfortable seating, and charging stations. Each vehicle is thoroughly checked before every safari, ensuring smooth travel across all national parks.</p>
          <img src="https://images.stockcake.com/public/3/d/6/3d63a6b9-6627-48eb-80b8-855c352deeea_large/safari-sunset-adventure-stockcake.jpg" alt="Safari vehicle" />
        </div>

        <div className="safari-section">
          <h2>Luxury Tanzania Tours</h2>
          <p>Luxury Tanzania safaris stand out with exceptional lodges, impeccable service, and gourmet dining featuring high-end wines, champagnes, and organic dishes. We collaborate with Four Seasons, Singita, One Nature, and others — reserving 3–4 months in advance is recommended for peak seasons.</p>
          <img src="https://www.backtoafricasafaris.com/wp-content/uploads/2021/07/luxury-tanzania-safari-tours.jpg" alt="Luxury lodge" />
        </div>

        <div className="itinerary">
          <h2>3-Day Ngorongoro Safari</h2>
          <div className="itinerary-days">
            <div className="itin-day">
              <h3>Day 1 · Arrival</h3>
              <p>Arrive from Dar es Salaam to Arusha Airport. Transfer to Summit Lodge in Arusha or Farm Lodge Karatu. Optional day trip to Napuru Waterfalls.</p>
            </div>
            <div className="itin-day">
              <h3>Day 2 · Arusha – Ngorongoro</h3>
              <p>Breakfast then game drive around the Ngorongoro Conservation Area. Visit a Maasai Boma and experience one of Africa's most spectacular drives.</p>
            </div>
            <div className="itin-day">
              <h3>Day 3 · Ngorongoro Crater</h3>
              <p>Descend into the crater for an afternoon tour. Ascend and transfer to Arusha airport for departure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KilimanjaroPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">The Roof of Africa</span>
        <h1 className="section-title">🏔️ Mount <em>Kilimanjaro</em></h1>
        <div className="divider" />
        <p style={{ marginBottom: "2rem", color: "var(--smoke)", fontSize: "1rem", lineHeight: 1.8 }}>A once-in-a-lifetime adventure in Tanzania</p>

        <img className="kili-hero" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kilimanjaro_from_Amboseli.jpg/1280px-Kilimanjaro_from_Amboseli.jpg" alt="Mount Kilimanjaro" onError={e => { e.target.src = "https://images.stockcake.com/public/3/d/6/3d63a6b9-6627-48eb-80b8-855c352deeea_large/safari-sunset-adventure-stockcake.jpg"; }} />

        <div className="kili-grid">
          <div className="kili-block">
            <h2>About Kilimanjaro</h2>
            <p>Mount Kilimanjaro, located in northern Tanzania, is Africa's highest peak — rising 5,895 meters (19,341 feet) above sea level. Known as the tallest free-standing mountain in the world, it attracts thousands of adventurers every year.</p>
            <p>Kilimanjaro is made up of three volcanic cones: <strong>Kibo</strong>, <strong>Mawenzi</strong>, and <strong>Shira</strong>. Home to diverse ecosystems ranging from lush rainforests to arctic-like glaciers at the summit.</p>
          </div>
          <div className="kili-block">
            <h2>Popular Trekking Routes</h2>
            <ul className="routes-list">
              <li><strong>Marangu Route</strong> — Known as the "Coca-Cola Route," the easiest path with hut accommodations.</li>
              <li><strong>Machame Route</strong> — The most popular and scenic route, offering breathtaking views.</li>
              <li><strong>Lemosho Route</strong> — Less crowded, longer, and highly recommended for acclimatization.</li>
              <li><strong>Rongai Route</strong> — Approaches from the north, quieter and less trafficked.</li>
            </ul>
          </div>
        </div>

        <h2 style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", fontWeight: 400, marginBottom: "1.5rem" }}>🌍 Travel Tips</h2>
        <div className="tips-grid">
          {[
            { icon: "📅", text: "Best time to climb: January–March or June–October" },
            { icon: "🧥", text: "Pack warm clothes — temperatures drop below freezing near the summit" },
            { icon: "🏃", text: "Train with cardio & hikes before your trip to prepare for altitude" },
            { icon: "🧭", text: "A guided trek is required — solo climbs are not permitted" },
          ].map((t, i) => (
            <div key={i} className="tip-card">
              <div className="tip-icon">{t.icon}</div>
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZanzibarPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">The Spice Island</span>
        <h1 className="section-title">Welcome to <em>Zanzibar</em></h1>
        <div className="divider" />

        <div className="zanzibar-packages">
          <div className="zanzibar-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XnRPWQEVm4XbSog5EznKdY4TdZTeUtwSRahULZd6PqAhjEWUDI98rIi2ps6mf-QMR_A&usqp=CAU" alt="Spice Tour" />
            <div className="zanzibar-card-body">
              <h3>Zanzibar Spice Tour</h3>
              <p>Zanzibar's romantic entanglement with spices dates to the 16th century. Discover cloves, nutmeg, cinnamon, and pepper — essential ingredients woven into everyday island life.</p>
            </div>
          </div>
          <div className="zanzibar-card">
            <img src="https://cloudfront.safaribookings.com/blog/2021/11/00-top-10-best-tanzania-safari-lodges-camps-BW-header1200px.jpg" alt="Historical tour" />
            <div className="zanzibar-card-body">
              <h3>Historical & Cultural Package</h3>
              <p>Walk through Stone Town's labyrinthine alleyways, explore slave history, and experience the living culture of this UNESCO World Heritage site.</p>
            </div>
          </div>
          <div className="zanzibar-card">
            <img src="https://www.backtoafricasafaris.com/wp-content/uploads/2021/07/luxury-tanzania-safari-tours.jpg" alt="Luxury resort" />
            <div className="zanzibar-card-body">
              <h3>Luxury Resort Package</h3>
              <p>Opulent accommodations, exclusive amenities, and personalized services at Zanzibar's finest beachfront properties — tailored to your every desire.</p>
            </div>
          </div>
        </div>

        <div className="itinerary">
          <h2>2-Night Mnazi Bay Adventure</h2>
          <div className="itinerary-days">
            <div className="itin-day">
              <h3>Day 1 · Arrival</h3>
              <ul>
                <li><strong>Dolphin Watching</strong> — Observe bottlenose dolphins in their natural habitat via boat trips</li>
                <li><strong>Whale Watching (Seasonal)</strong> — Humpback whales migrate July–November</li>
                <li><strong>Cultural Experiences</strong> — Visit local fishing villages</li>
              </ul>
            </div>
            <div className="itin-day">
              <h3>Day 2 · Exploration</h3>
              <ul>
                <li><strong>Birdwatching</strong> — Spot coastal and migratory birds across diverse ecosystems</li>
                <li><strong>Snorkeling & Diving</strong> — Explore coral reefs and marine biodiversity</li>
                <li><strong>Sand Dune Hiking</strong> — Trek Mtwara's striking coastal dunes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="itinerary" style={{ marginTop: "2rem" }}>
          <h2>3-Night Mnazi Bay Adventure</h2>
          <div className="itinerary-days">
            <div className="itin-day">
              <h3>Day 1 · Arrival</h3>
              <ul>
                <li>Dolphin watching boat trip</li>
                <li>Seasonal whale watching</li>
                <li>Local village visits</li>
              </ul>
            </div>
            <div className="itin-day">
              <h3>Day 2 · Nature</h3>
              <ul>
                <li>Birdwatching expedition</li>
                <li>Snorkeling & coral reef diving</li>
                <li>Sand dune hiking</li>
              </ul>
            </div>
            <div className="itin-day">
              <h3>Day 3 · Ruvuma Estuary</h3>
              <p>Cruise the Ruvuma Estuary through vast mangrove forests, spotting hippos and crocodiles where the river meets the Indian Ocean.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPage() {
  const [showPhotos, setShowPhotos] = useState(true);
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">Our Work</span>
        <h1 className="section-title">Tour <em>Gallery</em></h1>
        <div className="divider" />
        <div className="gallery-toggle">
          <button className={`btn ${showPhotos ? "btn-forest" : "btn-outline"}`} style={!showPhotos ? { color: "var(--dusk)", borderColor: "var(--clay)" } : {}} onClick={() => setShowPhotos(true)}>Photos</button>
          <button className={`btn ${!showPhotos ? "btn-forest" : "btn-outline"}`} style={showPhotos ? { color: "var(--dusk)", borderColor: "var(--clay)" } : {}} onClick={() => setShowPhotos(false)}>Videos</button>
        </div>
        {showPhotos ? (
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="gallery-item">
                <img src={src} alt={`Tour ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem", background: "var(--sand)", borderRadius: "8px" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: "var(--earth)", fontStyle: "italic" }}>Videos available on request</p>
            <p style={{ color: "var(--smoke)", marginTop: "0.5rem", fontSize: "0.9rem" }}>Contact us via WhatsApp to view our latest tour videos.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function BookingPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", travelDate: "", nationality: "",
    numberOfPeople: "", numberOfDays: "", budget: "",
    accommodation: "", safariType: "", specialRequest: "",
    emergencyName: "", emergencyPhone: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const body = `Hello, I would like to book a tour:
- Name: ${formData.name}
- Email: ${formData.email}
- Travel Date: ${formData.travelDate}
- Nationality: ${formData.nationality}
- Number of People: ${formData.numberOfPeople}
- Number of Days: ${formData.numberOfDays}
- Budget: ${formData.budget}
- Accommodation: ${formData.accommodation}
- Safari Type: ${formData.safariType}
- Special Requests: ${formData.specialRequest}
- Emergency Contact: ${formData.emergencyName} (${formData.emergencyPhone})`;
    window.location.href = `mailto:info@afroniatours.co.tz?subject=${encodeURIComponent("Tour Booking Request")}&body=${encodeURIComponent(body)}`;
  };

  const whatsappLink = `https://wa.me/255769477422?text=${encodeURIComponent("Hello, I'm interested in booking a tour.")}`;

  return (
    <section className="section">
      <div className="container">
        <div className="booking-layout">
          <div className="booking-info">
            <span className="section-label">Get in Touch</span>
            <h2>Plan your<br /><em style={{ fontStyle: "italic", color: "var(--earth)" }}>perfect journey</em></h2>
            <div className="divider" />
            <p>Fill out the form and our expert team will craft a personalized itinerary for you — completely free. We respond within 24 hours.</p>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <span>info@afroniatours.co.tz</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <span>+255 769 477 422</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span>Arusha, Tanzania</span>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="booking-form-card">
            <h3>Booking Request Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-section-title" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>Personal Information</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Nationality *</label>
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Travel Month / Date *</label>
                  <input type="text" name="travelDate" placeholder="e.g. July 2025" value={formData.travelDate} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-section-title">Travel Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Number of People *</label>
                  <input type="number" name="numberOfPeople" min="1" value={formData.numberOfPeople} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Number of Days *</label>
                  <input type="number" name="numberOfDays" min="1" value={formData.numberOfDays} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Budget (USD)</label>
                  <input type="text" name="budget" placeholder="e.g. $2,000 per person" value={formData.budget} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Safari Type</label>
                  <input type="text" name="safariType" placeholder="e.g. Wildlife, Cultural..." value={formData.safariType} onChange={handleChange} />
                </div>
              </div>

              <div className="form-section-title">Accommodation & Preferences</div>
              <div className="form-group">
                <label>Accommodation Type</label>
                <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
                  <option value="">Select preference</option>
                  <option value="Budget">Budget</option>
                  <option value="Mid-range">Mid-range</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div className="form-group">
                <label>Special Requests / Activities</label>
                <textarea name="specialRequest" rows="3" value={formData.specialRequest} onChange={handleChange} placeholder="Dietary needs, preferred activities, special occasions..." />
              </div>

              <div className="form-section-title">Emergency Contact</div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Name</label>
                  <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Contact Phone</label>
                  <input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-forest">Send Booking Request</button>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">WhatsApp Us</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  const pages = ["Home", "Safari", "Kilimanjaro", "Zanzibar", "Gallery", "Book Now"];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Afronia Tours</div>
            <p className="footer-desc">Your gateway to discovering the vibrant beauty and rich cultures of Africa — made easy.</p>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <ul className="footer-links">
              {pages.map(p => <li key={p}><button onClick={() => setPage(p)}>{p}</button></li>)}
            </ul>
          </div>
          <div>
            <p className="footer-heading">Contact</p>
            <ul className="footer-links">
              <li><button>info@afroniatours.co.tz</button></li>
              <li><button>+255 769 477 422</button></li>
              <li><button>Arusha, Tanzania</button></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Afronia Tours. All rights reserved.</span>
          <span>Tanzania · Zanzibar · Kilimanjaro</span>
        </div>
      </div>
    </footer>
  );
}

// ── APP ────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home":        return <HomePage setPage={setPage} />;
      case "Safari":      return <SafariPage />;
      case "Kilimanjaro": return <KilimanjaroPage />;
      case "Zanzibar":    return <ZanzibarPage />;
      case "Gallery":     return <GalleryPage />;
      case "Book Now":    return <BookingPage />;
      default:            return <HomePage setPage={setPage} />;
    }
  };

  return (
    <>
      <FontLink />
      <GlobalStyles />
      <Nav page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div style={{ paddingTop: page === "Home" ? 0 : "68px" }}>
        {renderPage()}
      </div>
      <Footer setPage={setPage} />
    </>
  );
}