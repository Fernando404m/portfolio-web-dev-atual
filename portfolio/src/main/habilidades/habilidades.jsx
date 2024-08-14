import cssImage from './../../assets/img/css.png';
import jsImage from './../../assets/img/javascript.png';
import htmlImage from './../../assets/img/html.png';
import reactImage from './../../assets/img/react.png';
import usaImage from './../../assets/img/usa.png';

import "./habilidades.css"

function Habilidades() {
    function mostrar(item) {
        let display = document.getElementById("display-hab")
        display.classList.remove("animacao-hab")
        document.getElementById("selecione-hab").style.display = "none"
        document.querySelectorAll(".display-hab-text").forEach(iten => {
            iten.style.display = "none"
        })
        setTimeout(() => {
            document.getElementById(item + "-on").style.display = "block"
            display.classList.add("animacao-hab")
        }, 10)
        
    }
    return(
        <section id="habilidades">
            <h1 className="titulo-section">Habilidades</h1>
            <div id="habilidades-container">
                <button className="hab" id="html" onClick={() => mostrar("html")}>
                    <div>
                        <img src={htmlImage} alt="HTML logo" />
                        <h2>HTML</h2>
                    </div>
                </button>
                <button className="hab" id="js" onClick={() => mostrar("js")}>
                    <div>
                        <img src={jsImage} alt="JavaScript logo" />
                        <h2>JavaScript</h2>
                    </div>
                </button>
                <button className="hab" id="css" onClick={() => mostrar("css")}>
                    <div>
                        <img src={cssImage} alt="CSS logo" />
                        <h2>CSS</h2>
                    </div>
                </button>
                <button className="hab" id="react" onClick={() => mostrar("react")}>
                    <div>
                        <img src={reactImage} alt="react logo" />
                        <h2>React</h2>
                    </div>
                </button>
                <button className="hab" id="ingles" onClick={() => mostrar("ingles")}>
                    <div>
                        <img src={usaImage} alt="bandeira dos eua" />
                        <h2>Ingles</h2>
                    </div>
                </button>

                <div id="display-hab">
                    <div className="display-hab-text" id="html-on">
                        <h1>HTML5</h1>
                        <p>O <strong>HTML</strong> (HyperText Markup Language) é a linguagem de marcação mais usada na criação de sites, devido à sua semântica poderosa que auxilia o sistema de busca do Google. <br/>o estudo sobre sua semântica é muito impotante, para facilitar o design de aplicações web.</p>
                    </div>
                    <div className="display-hab-text" id="css-on">
                        <h1>CSS</h1>
                        <p>O <strong>CSS</strong> (Cascading Style Sheets) é o que define os visuais do <strong onClick={() => mostrar('html')}>HTML</strong>, em outras palavras, é o componente essencial para a criação de designs dos elementos <strong onClick={() => mostrar('html')}>HTML</strong>. <br/>Eu particularmente sempre busco manter um site organizado, responsivo e adaptável ao público.</p>
                    </div>
                    <div className="display-hab-text" id="js-on">
                        <h1>JavaScript</h1>
                        <p><strong>JavaScript</strong> é uma linguagem de programação que define funções a serem executadas em um site. Juntamente com o <strong onClick={() => mostrar('css')}>CSS</strong> e <strong onClick={() => mostrar('html')}>HTML</strong>, o JavaScript é uma das três principais tecnologias da internet.</p>
                    </div>
                    <div className="display-hab-text" id="react-on">
                        <h1>React</h1>
                        <p>O React é uma biblioteca do <strong onClick={() => mostrar("js")}>JavaScript</strong>, que comumente é utilizada para facilitar a criação de sites, devido a sua capacidade de criar componetes reutilizaveis (que são blocos de codigo isolados).</p>
                    </div>
                    <div className="display-hab-text" id="ingles-on">
                        <h1>Inglês</h1>
                        <p>Eu possuo um nível de <strong>inglês medio-avançado</strong>, suficiente para manter uma conversa, mas admito não ser totalmente fluente na língua.</p>
                    </div>
                    <div id="selecione-hab">
                        <h1>Selecione uma opção acima</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Habilidades