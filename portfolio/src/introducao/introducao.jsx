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
          setTimeout(escreverNome, 80);
        }else {
            index.current = 0
            escrever()
        }
      }

      function escrever() {
        if (index.current < fullText.length) {
          setTexto(p => p + fullText.charAt(index.current));
          index.current++;
          setTimeout(escrever, 50);
        }else {
          document.querySelector("#inicio #contatos").classList.add("animacao-contatos")
        }
      }
      document.getElementById("linha").classList.add("animacao-titulo")
      setTimeout(escreverNome, 800)
  }, [])

    return(
        <header id="inicio">
          <div className="led"></div>
          <div>
              <img id="eu" />
              <div id="container">
                  <div id="linha"></div>
                  <h1 id="nome" className="titulo">{nome}</h1>
                  <h2 id="funcao" >{texto}</h2>
              </div>
          </div>
          <div id="contatos">
            <img id="github-icon" className="contatos-icons" />
            <img id="linkedin-icon" className="contatos-icons" />
            <img id="instagram-icon" className="contatos-icons" />
          </div>
        </header>
    )
}

export default Introducao