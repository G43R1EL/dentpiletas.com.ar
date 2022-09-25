import {Navbar} from "./navbar/Navbar";
import {Container} from "../helpers/container/Container";

export const Header = () => {
    return (
        <header>
            <Container>
                <Navbar />
            </Container>
        </header>
    )
}