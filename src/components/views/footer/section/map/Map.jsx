import {GoogleMaps} from "./google/GoogleMaps";
import {Zones} from "./zones/Zones";
import {useState} from "react";

export const Map = () => {
    const defaultLocation = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249811.30082570264!2d-58.57102639983145!3d-34.650154327729325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1662122333230!5m2!1ses-419!2sar"
    const [location, setLocation] = useState(defaultLocation)
    return (
        <div className="map__container">
            <GoogleMaps
                location={location}
            />
            <Zones
                location={defaultLocation}
                setLocation={setLocation}
            />
        </div>

    )
}
