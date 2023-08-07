import './Header.scss';
import { Menu } from '../Common/Menu/Menu'
import { useState } from 'react';

export const Header = ({ imgLogo, burger }) => {
    const [men, setMen] = useState(false);

    const handleClick = () => {
        setMen(!men);
    }
    let menuActive = men ? ' nav__menu--active' : '';
    return (
        <header className="header">
            <nav className='nav'>
                <img src={imgLogo} alt="Logo" className='img-logo nav__logo' />
                <div className={`nav__menu${menuActive}`}>
                    <Menu />
                </div>
                <span className='nav__burger' onClick={handleClick}>
                    <img src={burger} alt="burger" className='nav__img' />
                </span>
            </nav>
            <h1 className='header__title'>
                immersive experiences that deliver
            </h1>
        </header >
    )
}



