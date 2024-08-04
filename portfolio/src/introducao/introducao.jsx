import "./introducao.css"
import { useState, useEffect, useRef } from "react"

function Introducao() {
    const [nome, setnome] = useState("")
    const [texto, setTexto] = useState("");
    const fullname = "  Fernando Marques"
    const fullText = "  Web Developer";
    const index = useRef(0)

    useEffect(() => {
      function escreverNome() {
        if (index.current < fullname.length) {
          setnome(p => p + fullname.charAt(index.current));
          index.current++;
          setTimeout(escreverNome, 150);
        }else {
            index.current = 0
            escrever()
        }
      }

      function escrever() {
        if (index.current === 1) {
          document.getElementById("linha").classList.add("animacao-titulo")
        }
        if (index.current < fullText.length) {
          setTexto(p => p + fullText.charAt(index.current));
          index.current++;
          setTimeout(escrever, 50);
        }
        
      }

      escreverNome()
  }, [])

    return(
        <header id="inicio">
            <div>
                <img id="eu" />
                <div id="container">
                    <div id="linha"></div>
                    <h1 id="nome" className="titulo">{nome}</h1>
                    <h2 id="funcao" >{texto}</h2>
                </div>
            </div>
        </header>
    )
}

export default Introducao