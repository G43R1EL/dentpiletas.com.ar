import {Social} from "./social/Social";

export const Banner = () => {
    return (
        <div className="banner__container">
            <h2>"Gana tiempo y ahorra dinero"</h2>
            <p>Construida con gente que sabe lo que hace y materiales nobles que duraran toda un vida</p>
            <small>Seguinos en:</small>
            <div className="social__container">
                <Social
                    icon="akar-icons:instagram-fill"
                    title="Instagram"
                    link="https://www.instagram.com/dentpiletas/"
                />
                <Social
                    icon="icon-park-outline:facebook"
                    title="Facebook"
                    link="https://www.facebook.com/dentpiletasmoreno"
                />
            </div>
        </div>
    )
}