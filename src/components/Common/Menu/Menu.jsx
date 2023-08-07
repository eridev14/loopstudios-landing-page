import './Menu.scss'

export function Menu() {
    return (
        <ul className='menu'>
            <li className="menu__item">
                <a href="#" className="menu__link">About</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Careers</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Events</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Products</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Support</a>
            </li>
        </ul>
    )
}

