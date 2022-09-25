import logo from "./logo.svg"
export const Logo = () => {
    return (
        <div className="navbar__brand">
            <img src={logo} alt="Dent Piletas" className="brand__logo" />
        </div>
    )
}