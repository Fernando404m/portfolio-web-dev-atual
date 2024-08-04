import { useEffect, useRef } from "react"
import "./sobremim.css"

function sobremim() {
    
    window.addEventListener("scroll", () => {
        var posicao = document.getElementById("container-sobremim").getBoundingClientRect().top
        
        if (0 > posicao - (window.innerHeight/100*15)) {
            document.getElementById("sobremim-resumo").classList.add("animacao-sobremim-resumo")
            document.getElementById("sobremim-resumo").classList.remove("animacao-sobremim-resumo-reverso")
            document.getElementById("sobremim-resumo").style.display = "block"
        } else {
            document.getElementById("sobremim-resumo").classList.remove("animacao-sobremim-resumo")
            document.getElementById("sobremim-resumo").classList.add("animacao-sobremim-resumo-reverso")
        }
    })

    function mostrarMais() {
        const mostramais = document.getElementById("mais-sobremim")
        if (mostramais.style.display == "block") {
            mostramais.style.display = "none"
        } else {
            mostramais.style.display = "block"
        }
    }

    return(
        <div id="container-sobremim">
            <div id="mais-sobremim">
                <button id="close" className="material-symbols-outlined" onClick={mostrarMais}>close</button>
                <h1>Linha do tempo</h1>
                <div>
                    <div>16 python curso em video</div>
                    <div>17 projetos de automoçao de jogos com python</div>
                    <div>17html e css do curso em video</div>
                    <div>17 primeiro portfolio</div>
                    <div>17 fiz o curso do freecodecamp</div>
                    <div>17 aprendi js com o brocode</div>
                    <div>17 segundo portfolio</div>
                    <div>17 descobri como usar os serviços da hostinger e sobre os endereços</div>
                    <div>parei para estudar outros assuntos, alem de desenvolver meu ingles</div>
                    <div>18 retomei os estudos</div>
                    <div>18 aprendi react com o brocode</div>
                    <div>18 entendi mais sobre git e githup</div>
                    <div>18 fiz esse portfolio</div>
                </div>
            </div>
            <div id="sobremim-resumo">
                <h1>Sobre mim</h1>
                <p>Meu nome é Fernando marques, sou um dev FullStack tentando iniciar minha carreira.</p>
                <p>No momento estou tentando me desenvolver no mundo tecnologico pois sempre tive um fascinio sobre ele.</p>
                <button id="mais-sobremim-btn" onClick={mostrarMais}>mais</button>
            </div>
        </div>
    )
}

export default sobremim