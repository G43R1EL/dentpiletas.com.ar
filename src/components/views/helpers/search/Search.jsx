import {Icon} from "@iconify/react"

export const Search = () => {
    return (
        <form className="search__form">
            <div>
                <Icon icon={"eva:search-outline"} />
                <input type="text" placeholder={"Buscar..."} />
            </div>
            <button type="submit">
                Buscar
            </button>
        </form>
    )
}