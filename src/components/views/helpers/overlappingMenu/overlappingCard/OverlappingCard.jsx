import {Icon} from "@iconify/react"
import {Link} from "react-router-dom";

export const OverlappingCard = ({icon, title, link, button}) => {
    return (
        <div className="overlapping__card">
            <Icon icon={icon}/>
            <h2>{title}</h2>
            <Link to={link}>{button}</Link>
        </div>
    )
}