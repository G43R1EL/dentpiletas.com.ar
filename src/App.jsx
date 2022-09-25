import {Header} from "./components/views/header/Header";
import {Footer} from "./components/views/footer/Footer";
import {Outlet} from "react-router-dom";
import {Hero} from "./components/views/helpers/hero/Hero";

export const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Outlet />
            <Footer />
        </>
    )
}