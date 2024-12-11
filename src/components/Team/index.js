import "./Team.css";
import Colaborator from "../Colaborator"

const Team = (props) => {
    return (
        <section className="team" style={{ backgroundColor: props.firstColor }}>
            <h3 style={{ borderColor: props.secondColor }}>{props.name}</h3>
            {props.colaborators.map(colaborator => <Colaborator />)}
        </section>
    )
}

export default Team;