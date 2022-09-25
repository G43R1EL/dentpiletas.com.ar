export const MenuMobile = () => {
    const mobileToggle = (e) => {
        const menu = document.getElementById("main__nav")
        menu.classList.toggle("visible")
        e.target.classList.toggle("active")
    }

    return (
        <div className="navbar__nav-mobile">
            <button type="button" onClick={mobileToggle}></button>
        </div>
    )
}