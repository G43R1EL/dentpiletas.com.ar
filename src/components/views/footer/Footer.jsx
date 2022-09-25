import {Section} from "./section/Section"
import {Location} from "./section/location/Location";
import {Assistant} from "./section/assistant/Assistant";
import {Navigation} from "./section/navigation/Navigation";
import {Container} from "../helpers/container/Container";

export const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer__grid">
                    <Section title="Ubicaciones" icon="cil:location-pin">
                        <Location
                            title="Zona Oeste"
                            address="Av. Julio Argentino Roca 1818 - Moreno (Trujui) - Buenos Aires"
                            phone="(0237) 481-8434"
                            mobile="(011) 6014-0192"
                        />
                        <Location
                            title="Zona Sur"
                            address="Mariano Castex 2335 - Canning - Buenos Aires"
                            phone="(011) 3533-1262"
                            mobile=""
                        />
                    </Section>
                    <Section title="Asistencia" icon="ep:service">
                        <Assistant
                            title="Asistencia postventa"
                            speech="Si necesitas ayuda con tu piscina contactanos por WhatsApp tocando el siguiente contacto:"
                            whatsapp="+54 9 11 3787-9671"
                            number="5491137879671"
                        />
                    </Section>
                    <Section title="Web" icon="fluent:desktop-24-regular">
                        <Navigation />
                    </Section>
                </div>
            </Container>
        </footer>
    )
}