import {Social} from "../social/Social";
import {DataFiscal} from "../datafiscal/DataFiscal";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className="section__twocolumns">
            <nav>
                <h4>Categorias</h4>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/fibra">Piletas de fibra</NavLink></li>
                    <li><NavLink to="/hormigon">Piletas de hormig&oacute;n</NavLink></li>
                    <li><NavLink to="/complementos">Complementos</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
            <div className="section__tworows">
                <Social
                    facebook="https://www.facebook.com/dentpiletasmoreno"
                    instagram="https://www.instagram.com/dentpiletas/"
                />
                <DataFiscal
                    provider="http://qr.afip.gob.ar/?qr=TLlBHCDeMYEp-P3JS1O3mQ,,"
                />
            </div>
        </div>
    )
}