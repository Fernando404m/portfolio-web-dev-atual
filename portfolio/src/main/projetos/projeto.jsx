import PropTypes from "prop-types"

function Projeto({projetoid = -1, titulo = "nao econtrado", imagem = ["nenhuma imagem encontrada", "nenhuma alternativa para a imagem encontrada"],  paragrafo = "sem descricao"}) {
    return(
        <div className="projeto" id={"projeto-" + projetoid}>
            <h1>{titulo}</h1>
            <img src={imagem[0]} alt={imagem[1]} />
            <p>{paragrafo}</p>
        </div>
    )
}

Projeto.propTypes = {
    projetoid: PropTypes.number,
    titulo: PropTypes.string,
    imagem: PropTypes.arrayOf(PropTypes.string),
    paragrafo: PropTypes.string
}

export default Projeto