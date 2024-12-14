import { useState } from "react"
import Button from "../Button"
import Dropdown from "../Dropdown"
import Texto from "../Texto"
import "./Formulario.css"

export const Formulario = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [img, setImg] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (e) => {
        // impede que a página seja recarregada.
        e.preventDefault();
        props.onRegister({
            name,
            position,
            img,
            team
        })
        setName('');
        setPosition('');
        setImg('');
        setTeam('');
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Texto
                    obrigatorio={true} label="Name" placeholder="Input your full name"
                    onModify={value => setName(value)}
                />
                <Texto
                    obrigatorio={true} label="Position" placeholder="Input your position"
                    onModify={value => setPosition(value)}
                />
                <Texto
                    label="Img" placeholder="Give the img adress"
                    onModify={value => setImg(value)}
                />
                <Dropdown
                    obrigatorio={true} label="Team"
                    itens={props.teams}
                    value={team}
                    onModify={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}