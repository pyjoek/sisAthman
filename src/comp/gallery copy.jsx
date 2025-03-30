import React from 'react';
import '../styles/gallery.css';

// Import all images
import img1 from '../img/gallery/1.jpeg';
import img2 from '../img/gallery/2.jpeg';
import img3 from '../img/gallery/3.jpeg';
import img4 from '../img/gallery/4.jpeg';
import img5 from '../img/gallery/5.jpeg';
import img6 from '../img/gallery/6.jpeg';
import img7 from '../img/gallery/7.jpeg';
import img8 from '../img/gallery/8.jpeg';
import img9 from '../img/gallery/9.jpeg';
import img10 from '../img/gallery/10.jpeg';
import img11 from '../img/gallery/11.jpeg';
import img12 from '../img/gallery/12.jpeg';
import img13 from '../img/gallery/13.jpeg';
import img14 from '../img/gallery/14.jpeg';
import img15 from '../img/gallery/15.jpeg';
import img16 from '../img/gallery/16.jpeg';
import img17 from '../img/gallery/17.jpeg';
import img18 from '../img/gallery/18.jpeg';
import img19 from '../img/gallery/19.jpeg';
import img20 from '../img/gallery/20.jpeg';
import img21 from '../img/gallery/21.jpeg';
import img22 from '../img/gallery/22.jpeg';
import img23 from '../img/gallery/23.jpeg';
import img24 from '../img/gallery/24.jpeg';
import img25 from '../img/gallery/25.jpeg';
import img26 from '../img/gallery/26.jpeg';
import img27 from '../img/gallery/27.jpeg';
import img28 from '../img/gallery/28.jpeg';
import img29 from '../img/gallery/29.jpeg';
import img30 from '../img/gallery/30.jpeg';
import img31 from '../img/gallery/31.jpeg';
import img32 from '../img/gallery/32.jpeg';
import img33 from '../img/gallery/33.jpeg';
import img34 from '../img/gallery/34.jpeg';
import img35 from '../img/gallery/35.jpeg';
import img36 from '../img/gallery/36.jpeg';
import img37 from '../img/gallery/37.jpeg';
import img38 from '../img/gallery/38.jpeg';
import img39 from '../img/gallery/39.jpeg';
import img40 from '../img/gallery/40.jpeg';

// Array of images
const images = [
    { src: img1, alt: 'Tour Image 1' },
    { src: img2, alt: 'Tour Image 2' },
    { src: img3, alt: 'Tour Image 3' },
    { src: img4, alt: 'Tour Image 4' },
    { src: img5, alt: 'Tour Image 5' },
    { src: img6, alt: 'Tour Image 6' },
    { src: img7, alt: 'Tour Image 7' },
    { src: img8, alt: 'Tour Image 8' },
    { src: img9, alt: 'Tour Image 9' },
    { src: img10, alt: 'Tour Image 10' },
    { src: img11, alt: 'Tour Image 11' },
    { src: img12, alt: 'Tour Image 12' },
    { src: img13, alt: 'Tour Image 13' },
    { src: img14, alt: 'Tour Image 14' },
    { src: img15, alt: 'Tour Image 15' },
    { src: img16, alt: 'Tour Image 16' },
    { src: img17, alt: 'Tour Image 17' },
    { src: img18, alt: 'Tour Image 18' },
    { src: img19, alt: 'Tour Image 19' },
    { src: img20, alt: 'Tour Image 20' },
    { src: img21, alt: 'Tour Image 21' },
    { src: img22, alt: 'Tour Image 22' },
    { src: img23, alt: 'Tour Image 23' },
    { src: img24, alt: 'Tour Image 24' },
    { src: img25, alt: 'Tour Image 25' },
    { src: img26, alt: 'Tour Image 26' },
    { src: img27, alt: 'Tour Image 27' },
    { src: img28, alt: 'Tour Image 28' },
    { src: img29, alt: 'Tour Image 29' },
    { src: img30, alt: 'Tour Image 30' },
    { src: img31, alt: 'Tour Image 31' },
    { src: img32, alt: 'Tour Image 32' },
    { src: img33, alt: 'Tour Image 33' },
    { src: img34, alt: 'Tour Image 34' },
    { src: img35, alt: 'Tour Image 35' },
    { src: img36, alt: 'Tour Image 36' },
    { src: img37, alt: 'Tour Image 37' },
    { src: img38, alt: 'Tour Image 38' },
    { src: img39, alt: 'Tour Image 39' },
    { src: img40, alt: 'Tour Image 40' },
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="mt-4">Tour Gallery</h1>
            <div className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
