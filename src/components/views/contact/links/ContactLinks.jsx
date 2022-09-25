import {ContactLink} from "./ContactLink";

export const ContactLinks = () => {
    return (
        <div className="contact__links">
            <ul>
                <ContactLink
                    icon="bi:whatsapp"
                    link="https://wa.me/5491160140192"
                    displayLink="+54 9 11 6014-0192"
                    name="WhatsApp"
                />
                <ContactLink
                    icon="bxl:facebook"
                    link="https://www.facebook.com/dentpiletasmoreno"
                    displayLink="facebook.com/dentpiletasmoreno"
                    name="Facebook"
                />
                <ContactLink
                    icon="bi:instagram"
                    link="https://www.instagram.com/dentpiletas/"
                    displayLink="instagram.com/dentpiletas"
                    name="Instagram"
                />
            </ul>
        </div>
    )
}