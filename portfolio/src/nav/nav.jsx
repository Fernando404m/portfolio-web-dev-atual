import { useEffect } from "react"
import "./nav.css"

function Nav() {
    let container;
    
    useEffect(() => {
        container = document.querySelector(".nav-bar-btn-container")
        container.classList.remove("nav-mostra")
        container.classList.remove("nav-oculta")
    }, [])

    function mostrarNav() {
        if (!container.classList.contains("nav-mostra")) {
            container.classList.add("nav-mostra")
            container.classList.remove("nav-oculta")
        } else {
            container.classList.add("nav-oculta")
            container.classList.remove("nav-mostra")
        }
    }

    function scroll(position) {
        let goTo = document.querySelector(`#${position}`)
        scrollTo({
            top: goTo.offsetTop,
            behavior: "smooth"
        })
        if (window.innerWidth < 720) {
            mostrarNav()
        }
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 720) {
            document.querySelector(".nav-bar-btn-container").classList.remove("nav-mostra")
            document.querySelector(".nav-bar-btn-container").classList.remove("nav-oculta")
        }
    })

    return(
        <nav className="nav-bar">
            <h1>F.M. Dev</h1>
            <button id="btn-nav" className="material-symbols-outlined" onClick={mostrarNav}>menu</button>
            <div className="nav-bar-btn-container nav-oculta">
                <button onClick={() => {scroll("inicio")}}>Inicio</button>
                <button onClick={() => {scroll("container-sobremim")}}>Sobre mim</button>
                <button onClick={() => {scroll("habilidades")}}>Habilidades</button>
                <button onClick={() => {scroll("projetos")}}>Projetos</button>
            </div>
        </nav>
    )
}

export default Nav