import "./habilidades.css"

function Habilidades() {
    function mostrar(item) {
        document.getElementById("selecione_hab").style.display = "none"
        document.querySelectorAll(".display_hab_text").forEach(iten => iten.style.display = "none")
        document.getElementById(item + "_on").style.display = "block"
    }
    return(
        <div id="habilidades">
            <h1>Habilidades</h1>
            <div id="habilidades-container">
                <button className="hab" id="html" onClick={() => mostrar("html")}>
                    <div>
                        <img src="src\assets\img\html.png" alt="HTML logo" />
                        <h2>HTML</h2>
                    </div>
                </button>
                <button className="hab" id="js" onClick={() => mostrar("js")}>
                    <div>
                        <img src="src\assets\img\javascript.png" alt="JavaScript logo" />
                        <h2>JavaScript</h2>
                    </div>
                </button>
                <button className="hab" id="css" onClick={() => mostrar("css")}>
                    <div>
                        <img src="src\assets\img\css.png" alt="CSS logo" />
                        <h2>CSS</h2>
                    </div>
                </button>
                <button className="hab" id="react" onClick={() => mostrar("react")}>
                    <div>
                        <img src="src\assets\img\react.png" alt="react logo" />
                        <h2>React</h2>
                    </div>
                </button>
                <button className="hab" id="ingles" onClick={() => mostrar("ingles")}>
                    <div>
                        <img src="src\assets\img\usa.png" alt="bandeira dos eua" />
                        <h2>Ingles</h2>
                    </div>
                </button>

                <div id="display_hab">
                    <div class="display_hab_text" id="html_on">
                        <h1>HTML5</h1>
                        <p>O <strong>HTML</strong> (HyperText Markup Language) é a linguagem de marcação mais usada na criação de sites, devido à sua semântica poderosa que auxilia o sistema de busca do Google. <br/>o estudo sobre sua semântica é muito impotante, para facilitar o design de aplicações web.</p>
                    </div>
                    <div class="display_hab_text" id="css_on">
                        <h1>CSS</h1>
                        <p>O <strong>CSS</strong> (Cascading Style Sheets) é o que define os visuais do <strong onClick={() => mostrar('html')}>HTML</strong>, em outras palavras, é o componente essencial para a criação de designs dos elementos <strong onClick={() => mostrar('html')}>HTML</strong>. <br/>Eu particularmente sempre busco manter um site organizado, responsivo e adaptável ao público.</p>
                    </div>
                    <div class="display_hab_text" id="js_on">
                        <h1>JavaScript</h1>
                        <p><strong>JavaScript</strong> é uma linguagem de programação que define funções a serem executadas em um site. Juntamente com o <strong onClick={() => mostrar('css')}>CSS</strong> e <strong onClick={() => mostrar('html')}>HTML</strong>, o JavaScript é uma das três principais tecnologias da internet.</p>
                    </div>
                    <div class="display_hab_text" id="react_on">
                        <h1>React</h1>
                        <p>O React é uma biblioteca do <strong onClick={() => mostrar("js")}>JavaScript</strong>, que comumente é utilizada para facilitar a criação de sites, devido a sua capacidade de criar componetes reutilizaveis (que são blocos de codigo isolados).</p>
                    </div>
                    <div class="display_hab_text" id="ingles_on">
                        <h1>Inglês</h1>
                        <p>Eu possuo um nível de <strong>inglês medio-avançado</strong>, suficiente para manter uma conversa, mas admito não ser totalmente fluente na língua.</p>
                    </div>
                    <div id="selecione_hab">
                        <h1>Selecione uma opção acima</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades