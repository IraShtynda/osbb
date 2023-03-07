import './Header.scss';
import { NavLink } from "react-router-dom";
import logo from '../../images/logo_osbb.png';
import icon from '../../images/icon_person.png';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <img className="header__logo" src={logo} alt="OCББ" />
                <ul><li><NavLink activeclassname="active" to='/news'>НОВИНИ</NavLink></li></ul>
                <div className="header__profile"><NavLink to='/profile/*'>Увійти</NavLink>
                    <img src={icon} alt=""/>
                </div>
            </nav>
        </header>
    );
}

export default Header;
