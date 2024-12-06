import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import Texto from "../Texto"
import "./Formulario.css"

export const Formulario = () => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [img, setImg] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (e) => {
        // impede que a página seja recarregada.
        e.preventDefault();
        console.log("Form foi submetido", name, position, img, team)
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
                <Texto
                    obrigatorio={true} label="Nome" placeholder="Digite seu nome"
                    onModify={value => setName(value)}
                />
                <Texto
                    obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"
                    onModify={value => setPosition(value)}
                />
                <Texto
                    label="Imagem" placeholder="Informe o endereço da imagem"
                    onModify={value => setImg(value)}
                />
                <Dropdown
                    obrigatorio={true} label="Time"
                    itens={itens}
                    value={team}
                    onModify={value => setTeam(value)}
                />
                <Button >
                    Criar card
                </Button>
            </form>
        </section>
    )
}