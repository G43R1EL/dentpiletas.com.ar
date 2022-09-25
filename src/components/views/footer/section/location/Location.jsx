export const Location = ({title,address,phone,mobile}) => {
    return (
        <div className="section__location">
            <h4>{title}</h4>
            <p>Direcci&oacute;n: {address}</p>
            <p>Tel: {phone}</p>
            {mobile ? <p>Cel: {mobile}</p> : ""}
        </div>
    )
}