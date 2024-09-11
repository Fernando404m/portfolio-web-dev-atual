import "./projetos.css"
import Projeto from "./projeto"
import landingPage from './capas/landing-page.png';

function Projetos() {
    let idAtual = 0

    let listaProjetos = [
        {
            id: 0,
            titulo: "landing-page",
            img: [landingPage, "foto de um site landing-page"],
            descricao: "esse é um site de uma empresa ficticia que crie com o intuito de praticar",
            link: "https://ecotech-gadgets.web.app/",
        },
        {
            id: 1,
            titulo: undefined,
            img: [undefined, undefined],
            descricao: undefined,
            link: undefined,
        },
        {
            id: 2,
            titulo: undefined,
            img: [undefined, undefined],
            descricao: undefined,
            link: undefined,
        },
    ]
    let listaProjetosProcessados = []

    let numProjetos = listaProjetos.length

    listaProjetos.forEach(projeto => {
        listaProjetosProcessados.push(<Projeto key={projeto.id} projetoid={projeto.id} titulo={projeto.titulo} imagem={projeto.img} paragrafo={projeto.descricao} link={projeto.link}/>)
    })

    function trocarProjeto(proximo) {
        let atual = document.getElementById("projeto-" + idAtual)
        atual.classList.remove("trocar-projeto")
    
        if(proximo) {
            if(idAtual + 1 > numProjetos - 1) {
                idAtual = 0
            } else {
                idAtual+= 1
            }
        } else {
            if(idAtual - 1 < 0) {
                idAtual = numProjetos - 1
            } else {
                idAtual -= 1
            }
        }

        let novo = document.getElementById("projeto-" + idAtual)
        novo.classList.add("trocar-projeto")
        setTimeout(() => {
            atual.style.zIndex = 9
            novo.style.zIndex = 10
            setTimeout(() => {
                atual.style.zIndex = 5
            }, 300)
        }, 500)
        
    }

    return(
        <section id="projetos">
            <h1 className="titulo-section">Projetos</h1>
            <div id="container-projetos">
                
                {listaProjetosProcessados}
                <div id="papelada"></div>
                
                <button className="material-symbols-outlined" id="right-arrow" onClick={() => trocarProjeto(true)}>arrow_forward_ios</button>
                <button className="material-symbols-outlined" id="left-arrow" onClick={() => trocarProjeto(false)}>arrow_back_ios</button>
            </div>
        </section>
    )
}

export default Projetos