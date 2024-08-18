import { useEffect, useRef } from "react"
import "./sobremim.css"

function sobremim() {
    
    window.addEventListener("scroll", () => {
        var posicao = document.getElementById("container-sobremim").getBoundingClientRect().top
        
        if (0 > posicao - (window.innerHeight/100*15) && -400 < posicao - (window.innerHeight/100*15)) {
            document.getElementById("sobremim").classList.add("animacao-sobremim")
            document.getElementById("sobremim").classList.remove("animacao-sobremim-reverso")
            document.getElementById("sobremim").style.display = "block"
        }else {
            document.getElementById("sobremim").classList.remove("animacao-sobremim")
            document.getElementById("sobremim").classList.add("animacao-sobremim-reverso")
        }
        if(100 < posicao - (window.innerHeight/100*15) || -600 > posicao - (window.innerHeight/100*15)) {
            document.getElementById("sobremim").style.display = "none"
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

    function foundBob() {
        if (document.getElementById("face").style.display != "block") {
            document.getElementById("face").style.display = "block"
            setTimeout(() => window.alert("parabens você achou o Bob"), 50)
        } else {
            window.alert("você ja havia encontrado o Bob")
        }
    }

    return(
        <section id="container-sobremim">
            <div id="mais-sobremim">
                <button id="close" className="material-symbols-outlined" onClick={mostrarMais}>close</button>
                <h1>Linha do tempo</h1>
                <div id="timeline">
                    <div id="linha-timeline"></div>
                    <div><h2 className="sub-timeline">Python</h2><p className="paragrafo-timeline">ao final dos meus 16 anos eu comecei a programar com o curso de Python do canal curso em video.</p></div>

                    <div><h2 className="sub-timeline">Automação de jogo</h2><p className="paragrafo-timeline">aos 17 anos comecei a criar projetos de automoçao de jogos com Python junto com a biblioteca pyautogui, PIL e numpy.</p></div>

                    <div><h2 className="sub-timeline">HTML & CSS</h2><p className="paragrafo-timeline">ainda com 17 comecei a aprender HTML e CSS pelo canal curso em video que ja tinha minha confiança.</p></div>

                    <div><h2 className="sub-timeline">1° Portfolio</h2><p className="paragrafo-timeline">apos aprender bastante sobre, eu fiz meu primeiro portfolio, onde usei apenas o HTML E CSS, para testar meus conhecimentos.</p></div>

                    <div><h2 className="sub-timeline">freecodecamp</h2><p className="paragrafo-timeline">pouco depois eu fiz o curso do freecodecamp que me possibilitou aprender ainda mais sobre HTML e CSS.</p></div>

                    <div><h2 className="sub-timeline">JavaScript</h2><p className="paragrafo-timeline">ainda com 17 decidi experimentar o JavaScript pois facilitaria o meu desenvolvimento web, então optei pelo curso de js do brocode.</p></div>

                    <div><h2 className="sub-timeline">2° Portfolio</h2><p className="paragrafo-timeline">após aprender o js basico testei minhas habilidades criando um segundo portfolio.</p></div>

                    <div><h2 className="sub-timeline">Hospedagem</h2><p className="paragrafo-timeline">fui atras de descobrir como funciona os endereços e serviços de hospedagem, que até então eu estiva usando o github pages.</p></div>

                    <div><h2 className="sub-timeline">Pausa</h2><p className="paragrafo-timeline">fiz uma pausa da programação e parei para estudar outros assuntos, alem de desenvolver meu ingles.</p></div>

                    <div><h2 className="sub-timeline">Retomada</h2><p className="paragrafo-timeline">ao completar meus 18 anos retomei os estudos de programaçao e desenvolvimento.</p></div>

                    <div><h2 className="sub-timeline">React</h2><p className="paragrafo-timeline">aprendi react com o canal brocode.</p></div>

                    <div><h2 className="sub-timeline">Git & GitHub</h2><p className="paragrafo-timeline">apos minha retomada dessidi entender mais sobre git e githup pra meu controle de versionamento.</p></div>

                    <div><h2 className="sub-timeline">Agora</h2><p className="paragrafo-timeline">atualmente decidi fazer esse portfolio para tentar iniciar uma carreira profissional.</p></div>
                </div>
            </div>
            <div id="sobremim">
                <h1>Sobre mim</h1>
                <p>Meu nome é Fernando marques, sou um dev FullStack tentando iniciar minha carreira.</p>
                <p>No momento estou tentando me desenvolver no mundo tecnologico pois sempre tive um fascinio sobre ele.</p>
                <button id="mais-sobremim-btn" onClick={mostrarMais}>mais</button>
            </div>
            <div id="container-animacao-sobremim">
                <div id="animacao-decoracao-sobremim">
                    <div id="barra-rotatoria" onClick={() => foundBob()}>
                        <div id="face">
                            <div id="eye-left"></div>
                            <div id="eye-right"></div>
                            <div id="mount"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default sobremim