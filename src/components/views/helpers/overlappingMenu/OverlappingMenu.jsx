import {OverlappingCard} from "./overlappingCard/OverlappingCard";

export const OverlappingMenu = () => {
    return (
        <div className="overlapping__menu">
            <OverlappingCard
                icon="teenyicons:pool-outline"
                title="Piletas de fibra"
                link="/fibra"
                button="Ver m&aacute;s de fibra"
            />
            <OverlappingCard
                icon="teenyicons:pool-outline"
                title="Piletas de hormig&oacute;n"
                link="/hormigon"
                button="Ver m&aacute;s de hormig&oacute;n"
            />
        </div>
    )
}