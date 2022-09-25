import {Icon} from "@iconify/react"
export const ContactLink = ({icon, link, displayLink, name}) => {
    return (
        <li className="contact__link">
            <div className="link__badge"><Icon icon={icon} /></div>
            <div className="link__content">
                <a href={link} target={"_blank"} rel={"noreferrer"}><h4>{displayLink}</h4></a>
                <small>{name}</small>
            </div>
        </li>
    )
}