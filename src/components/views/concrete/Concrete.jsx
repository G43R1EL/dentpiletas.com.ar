import {Warranty} from "../helpers/warranty/Warranty";
import {Contact} from "../contact/Contact";

export const Concrete = () => {
    return (
        <main className="concrete__container">
            <section>
                <Warranty duration={10} />
            </section>
            <section>
                <h2>Proceso de construcción</h2>
                <p>Dar lo mejor es darte una piscina que tenga durabilidad y calidad.</p>
            </section>
            <section>

            </section>
            <Contact />
        </main>
    )
}