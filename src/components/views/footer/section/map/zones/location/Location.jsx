import {useState} from "react";

export const Location = ({title, address, city, state, phone, mobile, link, location, setLocation}) => {
    const [persistance, setPersistance] = useState(false)
    function onClickHndlr(e) {
        setPersistance(true)
        setLocation(link)
    }
    function onEnterHndlr(e) {
        setPersistance(false)
        setLocation(link)
    }
    function onLeaveHndlr(e) {
        if (!persistance) {
            setLocation(location)
        }
    }
    return (
        <div className="zones__location" onClick={onClickHndlr} onMouseEnter={onEnterHndlr} onMouseLeave={onLeaveHndlr}>
            <h4>{title}</h4>
            <ul>
                <li>Direcci&oacute;n: {address}</li>
                <li>{city}, {state}</li>
                <li>Tel.: {phone}</li>
                { mobile && <li>Cel.: {mobile}</li> }
            </ul>
        </div>
    )
}