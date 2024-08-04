import { useEffect } from "react"
import "./nav.css"

function Nav() {
    let container;
    
    useEffect(() => {
        container = document.querySelector(".nav-bar-btn-container")
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
        mostrarNav()
    }

    return(
        <nav className="nav-bar">
            <h1></h1>
            <button className="material-symbols-outlined" onClick={mostrarNav}>menu</button>
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