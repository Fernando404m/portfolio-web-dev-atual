import "./habilidades.css"

function Habilidades() {
    return(
        <div id="habilidades">
            <h1>Habilidades</h1>
            <div id="habilidades-container">
                <div className="hab" id="html">
                    <div>
                        <img src="src\assets\img\html.png" alt="HTML logo" />
                        <h2>HTML</h2>
                    </div>
                </div>
                <div className="hab" id="js">
                    <div>
                        <img src="src\assets\img\javascript.png" alt="JavaScript logo" />
                        <h2>JavaScript</h2>
                    </div>
                </div>
                <div className="hab" id="css">
                    <div>
                        <img src="src\assets\img\css.png" alt="CSS logo" />
                        <h2>CSS</h2>
                    </div>
                </div>
                <div className="hab" id="react">
                    <div>
                        <img src="src\assets\img\react.png" alt="react logo" />
                        <h2>React</h2>
                    </div>
                </div>
                <div className="hab" id="ingles">
                    <div>
                        <img src="src\assets\img\usa.png" alt="bandeira dos eua" />
                        <h2>React</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habilidades