import './Gallery.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export const CardGallery = ({ imgId, page }) => {
    let imm = imgId;
    const text = imm.split("-").join(" ").toUpperCase();
    return (
        <div className='card-gallery'>
            <div className="card-gallery__container">
                <img
                    src={`../../../public/assets/images/${page}/image-${imgId}.jpg`}
                    alt="primary"
                    className='card-gallery__img'
                />
                <div className="card-gallery__overlay"></div>
            </div>
            <h2 className='card-gallery__title'>{text}</h2>
        </div>

    )
}


export const Gallery = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let page = viewportWidth > 700 ? 'desktop' : 'mobile';

    return (
        <section className="gallery">
            <header className="gallery__header">
                
                <h1 className="gallery__title">
                    our creation
                </h1>
                <button className="gallery__btn">
                    see all
                </button>
            </header>
            <section className="gallery__section">
                <CardGallery imgId="deep-earth" page={page} />
                <CardGallery imgId="curiosity" page={page}/>
                <CardGallery imgId="fisheye" page={page}/>
                <CardGallery imgId="from-above" page={page}/>
                <CardGallery imgId="grid" page={page}/>
                <CardGallery imgId="night-arcade" page={page}/>
                <CardGallery imgId="pocket-borealis" page={page}/>
                <CardGallery imgId="soccer-team" page={page}/>
            </section>
        </section>
    )
}
