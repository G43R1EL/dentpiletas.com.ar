import {Icon} from "@iconify/react"

export const Filter = () => {
    return (
        <label className={'filter__toggle'}>
            <input type="checkbox"/>
            <Icon icon={'ci:filter-outline'} />
            <span>Filtros...</span>
        </label>
    )
}