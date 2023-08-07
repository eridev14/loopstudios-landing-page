import './Footer.scss';

import { Menu } from "../Common/Menu/Menu";
export const Footer = ({ imgLogo }) => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <img src={imgLogo} alt="logo" className='img-logo footer__img' />
                <Menu />
            </nav>
            <div className="footer__section">
                <div className="footer__social">
                    <SocialImg social="facebook" />
                    <SocialImg social="instagram" />
                    <SocialImg social="pinterest" />
                    <SocialImg social="twitter" />
                </div>
                <span className="footer__copy">
                    &copy; 2023 Loopstudios. All rights reserved
                </span>
            </div>
        </footer>
    )
}


export const SocialImg = ({ social }) => {
    return (
        <span className='social'>
            <img src={`../../../public/assets/images/icon-${social}.svg`} alt="social" className="social__icon" />
        </span>
    )
}


