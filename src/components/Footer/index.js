import "./Footer.css";
import logo from "../../images/logo.png";
import fb from "../../images/fb.png";
import tw from "../../images/tw.png";
import ig from "../../images/ig.png";
import fundo from "../../images/fundo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src={fb} alt="face" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src={tw} alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src={ig} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo} alt="logo" />
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Footer;