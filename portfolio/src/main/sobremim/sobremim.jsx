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

    return(
        <div id="container-sobremim">
            <div id="sobremim-resumo">
                <h1>Sobre min</h1>
            </div>
        </div>
    )
}

export default sobremim