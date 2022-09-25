import {Logo} from "./logo/Logo";
import {Menu} from "./menu/Menu";
import {MenuMobile} from "./menu/MenuMobile";

export const Navbar = () => {
    return (
        <nav className="header__navbar">
            <Logo />
            <Menu />
            <MenuMobile />
        </nav>
    )
}