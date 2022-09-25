import {Icon} from "@iconify/react"

export const Assistant = ({title, speech, whatsapp, number}) => {
    return (
        <div className="section__assistant">
            <h4>{title}</h4>
            <p>{speech}</p>
            <a href={"https://wa.me/" + number} target="_blank" rel="noreferrer" className="assistant__link"><Icon icon="bi:whatsapp" /> {whatsapp}</a>
        </div>
    )
}