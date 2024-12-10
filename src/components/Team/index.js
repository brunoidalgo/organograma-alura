import "./Team.css";
import Card from "../Card"

const Team = (props) => {
    return (
        <section className="team" style={{ backgroundColor: props.firstColor }}>
            <h3 style={{ borderColor: props.secondColor }}>{props.name}</h3>
            <Card secondColor={props.secondColor} />
            <Card secondColor={props.secondColor} />
        </section>
    )
}

export default Team;