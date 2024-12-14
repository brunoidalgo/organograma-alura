import "./Colaborator.css";

const Colaborator = ({ name, photo, position, secondColor }) => {
    return (
        <div className="colaborator">
            <div style={secondColor} className="cabecalho">
                <img src={photo} alt={name} />
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div >
    )
}

export default Colaborator;