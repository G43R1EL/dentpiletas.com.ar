import {PoolCard} from "./poolcard/PoolCard";

export const PoolsContainer = () => {
    const pools = [
        {
            id: "FIBER0001",
            name: "Piscina con solarium húmedo",
            description: "Este Modelo en particular cuenta con generoso Solárium en forma de escalera donde pueden sentarse de 6 a 8 personas cómodas. El mismo mide 1.35 mts. de largo por 3.30 mts. de ancho y 60 cm de profundidad.",
            category: "Piscinas de fibra",
            sizes: ["10,00 x 3,60 x 1,50 mts.", "9,00 x 3,60 x 1,50 mts.", "8,00 x 3,60 x 1,50 mts.", "7,00 x 3,60 x 1,50 mts."],
            tags: [],
            picture: "assets/pools/piscina_arco_romano_box.webp"
        },
        {
            id: "FIBER0002",
            name: "Piscina minimalista con playa húmeda",
            description: "La particularidad de este modelo es que cuenta con una Playa Húmeda incorporada, la misma forma parte de la escalera y mide 1.50 mts. de largo por 3.30 mts. de ancho con 20 cm de profundidad, proporcionando un espacio ideal para el descanso y disfrute en familia.",
            category: "Piscinas de fibra",
            sizes: ["8,00 x 3,60 x 1,50 mts.", "7,00 x 3,60 x 1,50 mts.", "6,00 x 3,60 x 1,50 mts."],
            tags: [],
            picture: "assets/pools/piscina_playa_humeda_box.webp"
        },
        {
            id: "FIBER0003",
            name: "Piscina con desnivel",
            description: "Lo lindo de estos modelos es el desnivel , permitiendo que la familia, grandes y chicos puedan disfrutar la piscina en cada sector particular.",
            category: "Piscinas de fibra",
            sizes: ["8,45 x 3,40 x 1,55 a 1,92 mts."],
            tags: [],
            picture: "assets/pools/piscina_desnivel_box.webp"
        },
        {
            id: "FIBER0004",
            name: "Piscina con arco romano",
            description: "",
            category: "Piscinas de fibra",
            sizes: ["6,50 x 3,10 x 1,45 mts.", "5,50 x 3,10 x 1,45 mts.", "4,50 x 2,50 x 1,20 mts."],
            tags: [],
            picture: "assets/pools/piscina_arco_romano_box.webp"
        },
        {
            id: "FIBER0005",
            name: "Playa húmeda",
            description: "Es el espacio ideal, que cada familia necesita. Ya sea para poder tomar sol o bien disfrutar con los más pequeños.",
            category: "Piscinas de fibra",
            sizes: ["3,60 x 2,50 x 0,20 mts."],
            tags: [],
            picture: "assets/pools/playa_humeda_box.webp"
        },
        {
            id: "FIBER0006",
            name: "Minipiscina con hidromasaje",
            description: "Las piscinas mini tienen muchas ventajas. En primer lugar, y seguramente la más obvia, requieren poco espacio. Podemos instalar una pequeña piscina en una terraza, un pequeño patio o jardín. También se puede anexar a la piscina que ya tenemos y convertirlo en un hermoso jacuzzi.",
            category: "Piscinas de fibra",
            sizes: ["2,20 x 2,20 x 1,00 mts."],
            tags: []
        }
    ]
    return (
        <div className="pools__container">
            { pools.map(pool =>
                <PoolCard
                    key={pool.id}
                    pool={pool}
                />
            )}
        </div>
    )
}