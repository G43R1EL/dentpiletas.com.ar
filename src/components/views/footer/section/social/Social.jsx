import logo_facebook from "./facebook.svg"
import logo_instagram from "./instagram.svg"

export const Social = ({facebook, instagram}) => {
    return (
        <div className="section__social">
            <h4>Redes Sociales</h4>
            <a href={facebook} target="_blank" rel="noreferrer">
                <img src={logo_facebook} alt="Facebook"/>
            </a>
            <a href={instagram} target="_blank" rel="noreferrer">
                <img src={logo_instagram} alt="Instagram"/>
            </a>
        </div>
    )
}