import {OverlappingMenu} from "../helpers/overlappingMenu/OverlappingMenu";
import {Branding} from "../helpers/branding/Branding";
import {About} from "../helpers/about/About";
import {Features} from "../helpers/features/Features";
import {Banner} from "../helpers/banner/Banner";
import {Map} from "../footer/section/map/Map";

export const Home = () => {
    return (
            <main>
                <OverlappingMenu />
                <Branding />
                <About />
                <Features />
                <Banner />
                <Map />
            </main>
    )
}