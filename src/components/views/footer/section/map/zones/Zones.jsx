import {Location} from "./location/Location";

export const Zones = ({location,setLocation}) => {
    return (
        <div className="map__zones">
            <h3>Visita nuestras sucursales:</h3>
            <Location
                title={"Zona Oeste"}
                address={"Av. Julio A. Roca 1818"}
                city={"Moreno"}
                state={"Buenos Aires"}
                phone={"(0237) 481-8434"}
                mobile={"(011) 15 6014-0192"}
                link={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9085517607054!2d-58.721851184278314!3d-34.60647388045873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe122dd9f41f%3A0x7f1ce4be6332eefc!2sAv.%20Julio%20A.%20Roca%201818%2C%20B1736IGP%20Trujui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1662150664032!5m2!1ses-419!2sar"}
                location={location}
                setLocation={setLocation}
            />
            <Location
                title={"Zona Sur"}
                address={"Mariano Castex 2335"}
                city={"Canning"}
                state={"Buenos Aires"}
                phone={"(011) 3533-1262"}
                link={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.379119277533!2d-58.50503198427277!3d-34.87182508039076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd6e74d7fcb0f%3A0x6b14c389b14bf3e4!2sMariano%20Castex%202335%2C%20Canning%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1662150812017!5m2!1ses-419!2sar"}
                location={location}
                setLocation={setLocation}
            />
        </div>
    )
}