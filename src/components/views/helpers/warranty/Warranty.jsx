export const Warranty = ({duration}) => {
    return (
        <div className="warranty__container">
            <span>{duration} años de garantía</span>
            <div className="warranty__bar" />
        </div>
    )
}