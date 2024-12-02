import bg from "../../images/banner.png";
import "./Banner.css"

export default function Banner() {
    return (
        <header className="banner" >
            <img src={bg} alt="banner" />
        </header>
    )
}