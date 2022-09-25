import {useLocation} from "react-router-dom";

export const Hero = () => {
    const { pathname } = useLocation()
    let showHero = pathname !== '/contacto'
    if (showHero) {
        return (
            <div className="site__hero">
                <video autoPlay muted loop>
                    <source src="./assets/hero/hero_video_02.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    } else {return (<></>)}
}