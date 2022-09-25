import {Link} from "react-router-dom";

export const PoolCard = ({pool}) => {
    const {id, name, description, category, sizes, picture} = pool
    const placeholder = 'assets/pools/noimage.svg'
    return (
        <div className="pool__card">
            <img src={picture ? picture : placeholder} alt={name} />
            <small>{category}</small>
            <h3>{name}</h3>
            <small>{sizes.length} tamaños disponibles</small>
            <Link to={'./' + id} className={'button'}>Ver más</Link>
        </div>
    )
}