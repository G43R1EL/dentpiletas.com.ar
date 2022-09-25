import {Icon} from "@iconify/react"

export const Section = ({title, icon, children}) => {
    return (
        <section className="footer__section">
            <div className="section__header">
                <div className="section__badge">
                    <Icon icon={icon} />
                </div>
                <h3> {title}</h3>
            </div>
            <div className="section__body">
                {children}
            </div>
        </section>
    )
}