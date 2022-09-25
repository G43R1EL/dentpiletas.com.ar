import {NavLink} from "react-router-dom";

export const Menu = () => {
    return (
        <div className="navbar__nav" id="main__nav">
            <ul>
                <li><NavLink to="/">Inicio</NavLink><hr /></li>
                <li><NavLink to="/fibra">Piletas de fibra</NavLink><hr /></li>
                <li><NavLink to="/hormigon">Piletas de hormigón</NavLink><hr /></li>
                {/*<li><NavLink to="/complementos">Complementos</NavLink><hr /></li>*/}
                <li><NavLink to="/contacto">Contacto</NavLink><hr /></li>
            </ul>
        </div>
    )
}