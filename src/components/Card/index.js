import "./Card.css";

const Card = (props) => {
    return (
        <div className="colaborator">
            <div style={{ backgroundColor: props.secondColor }} className="cabecalho">
                <img src="https://github.com/brunoidalgo.png" alt="foto-perfil" />
            </div>
            <div className="rodape">
                <h4>Bruno Empke</h4>
                <h5>Full Stack Engineer</h5>
            </div>
        </div >
    )
}

export default Card;