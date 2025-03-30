import React, { useState, useEffect } from 'react';
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

// Import all videos
import vid1 from '../videos/1.mp4';
import vid2 from '../videos/2.mp4';
import vid3 from '../videos/3.mp4';
import vid4 from '../videos/4.mp4';
import vid5 from '../videos/5.mp4';
import vid6 from '../videos/6.mp4';
import vid7 from '../videos/7.mp4';
import vid8 from '../videos/8.mp4';
import vid9 from '../videos/9.mp4';
import vid10 from '../videos/10.mp4';
import vid11 from '../videos/11.mp4';
import vid12 from '../videos/12.mp4';

const images = Array.from({ length: 40 }, (_, i) => ({ src: require(`../img/gallery/${i + 1}.jpeg`), alt: `Tour Image ${i + 1}` }));
const videos = Array.from({ length: 12 }, (_, i) => ({ src: require(`../videos/${i + 1}.mp4`), alt: `Tour Video ${i + 1}` }));

const Gallery = () => {
    const [showPhotos, setShowPhotos] = useState(true);

    useEffect(() => {
        if (!showPhotos) {
            document.querySelectorAll('video').forEach(video => {
                video.muted = true;
                video.play();
            });
        }
    }, [showPhotos]);

    return (
        <div className="gallery-container">
            <h1 className="mt-4">Tour Gallery</h1>
            <button onClick={() => setShowPhotos(!showPhotos)} className="btn btn-primary">
                {showPhotos ? 'Show Videos' : 'Show Photos'}
            </button>
            {showPhotos ? (
                <div className="gallery">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="gallery">
                    {videos.map((video, index) => (
                        <div key={index} className="gallery-item">
                            <video width="320" height="240" controls autoPlay muted>
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Gallery;
