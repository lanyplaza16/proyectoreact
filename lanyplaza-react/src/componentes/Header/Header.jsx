import "../../styles/componentes/Header/Header.css";

export const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
            <h1 className="header__logo">Repintar</h1>
            <nav className="navbar">
                <a className="navbar__link" href="#">3-5 años</a>
                <a className="navbar__link" href="#">6-8 años</a>
                <a className="navbar__link" href="#">9-12 años</a>
                <a className="navbar__link" href="#">para los mas grandes</a>
            </nav>
            </div>
        </header>
    )
}