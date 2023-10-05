import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <ul class="footer-menu-container">
                <li><Link to="/" class="footer-menu-enlaces">Inicio</Link></li>
                <li><Link to="/categorias" class="footer-menu-enlaces">Categorias</Link></li>
                <li><Link to="/sobreNosotros" class="footer-menu-enlaces">Sobre nosotros</Link></li>
                <li><Link to="/contacto" class="footer-menu-enlaces">Contacto</Link></li>
            </ul>
            <p>Llámanos: <span itemprop="telephone"><a class="footer-tel" href="tel:+54911767676">+54 9 11-767676</a></span>{" "}
                | Envíanos un correo electrónico:
                <button class="footer-mail" onclick="location.href='mailto:somosazerty@gmail.com'">
                    somosazerty@gmail.com</button></p><br />
            <p>Hacemos de tu educación la semilla de tu grandeza.</p><br />
            <span class="copyright">&copy;2023, Azerty. Todos los derechos reservados.</span>

        </footer>
    )
}

export default Footer;