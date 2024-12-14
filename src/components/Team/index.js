import "./Team.css";
import Colaborator from "../Colaborator"

const Team = (props) => {

    const fisrtColor = { backgroundColor: props.firstColor };
    const secondColor = { borderColor: props.secondColor };

    return (
        <section className="team" style={fisrtColor}>
            <h3 style={secondColor}>{props.name}</h3>
            <div className="colaborators">
                {props.colaborators.map(colaborator => <Colaborator
                    key={colaborator.name}
                    name={colaborator.name}
                    position={colaborator.position}
                    photo={colaborator.img}
                    alt={colaborator.name}
                />)}
                {console.log(props.img)}
            </div>
        </section>
    )
}

// https://github.com/brunoidalgo.png

export default Team;