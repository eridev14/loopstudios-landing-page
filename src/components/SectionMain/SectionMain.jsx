import cardImg from '../../../public/assets/images/desktop/image-interactive.jpg';
import { Gallery } from '../Gallery/Gallery';
import './SectionMain.scss';

export const MainSection = () => {
    return (
        <main className="main">
            <div className="card-main">
                <div className="card-main__img">
                    <img src={cardImg} alt="img" className="img" />
                </div>
                <div className="card-main__lader">
                    <h2 className="card-main__title">The leader in interactive VR</h2>
                    <p className="card-main__text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand</p>
                </div>
            </div>
            <Gallery />

        </main>
    )
}
