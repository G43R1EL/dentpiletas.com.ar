import {Icon} from "@iconify/react"

export const Social = ({icon, title, link}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="social__button" title={'Seguínos en nuestras redes!'}>
            <Icon icon={icon} />
            {title}
        </a>
    )
}