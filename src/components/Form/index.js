import Button from "../Button"
import Dropdown from "../Dropdown"
import Texto from "../Texto"
import "./Formulario.css"

export const Formulario = () => {

    const onSave = (e) => {
        // impede que a página seja recarregada.
        e.preventDefault();
        console.log("Form foi submetido")
    }

    const itens = [
        "Selecione",
        "Front End",
        "Programação",
        "Mobile",
        "Inovação e Gestão",
        "Devops",
        "Data Science",
        "UX e Design"
    ]

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Texto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <Texto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <Texto label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown obrigatorio={true} label="Time" itens={itens} />

                {/* <Button texto="Criar card" /> */}
                <Button >
                    Criar card
                </Button>
            </form>
        </section>
    )
}