import {FeatureCard} from "./FeatureCard/FeatureCard";

export const Features = () => {
    return (
        <div className="features__container">
            <FeatureCard
                icon="bi:bookmark-check"
                title="Calidad"
                description="Contamos con personal altamente capacitado y trabajamos los mejores materiales del mercado."
            />
            <FeatureCard
                icon="ep:service"
                title="Servicios"
                description="Contamos con una linea exclusiva de atenci&oacute;n post venta para que puedas evacuar todas tus inquietudes."
            />
            <FeatureCard
                icon="bx:medal"
                title="Garant&iacute;a"
                description="En Dent estamos seguros de lo que hacemos que te damos una garant&iacute;a escrita de hasta 20* a&ntilde;os sobre la piscina."
            />
        </div>
    )
}