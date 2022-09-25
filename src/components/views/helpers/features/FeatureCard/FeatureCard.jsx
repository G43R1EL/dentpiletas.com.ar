import {Icon} from "@iconify/react"

export const FeatureCard = ({icon, title, description}) => {
    return (
        <div className="features__card">
            <div className="feature__badge">
                <Icon icon={icon} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}