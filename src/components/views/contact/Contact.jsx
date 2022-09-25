import {ContactLinks} from "./links/ContactLinks";
import {ContactForm} from "./form/ContactForm";

export const Contact = () => {
    return (
        <main className="site__contact">
            <ContactForm />
            <ContactLinks />
        </main>
    )
}