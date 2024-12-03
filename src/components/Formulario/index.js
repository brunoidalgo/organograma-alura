import Texto from "../Texto"
import "./Formulario.css"

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Texto label="Nome" placeholder="Digite seu nome" />
                <Texto label="Cargo" placeholder="Digite seu cargo" />
                <Texto label="Imagem" placeholder="Informe o endereço da imagem" />
                <Texto label="Time" />
            </form>
        </section>
    )
}