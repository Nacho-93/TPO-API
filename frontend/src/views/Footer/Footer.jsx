import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer id="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3 className='logo-title'>Azerty</h3>
                            <p>
                                Argentina <br />
                                <strong>Teléfono:</strong> +54 11 5279 9760<br />
                                <strong>Email:</strong> somosazerty@gmail.com<br />
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Navegación</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Inicio</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/categorias">Categorias</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/sobreNosotros">Sobre Nosotros</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Algunos servicios</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/categorias">Física</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/categorias">Matemática</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/categorias">Música</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/categorias">Idiomas</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>¿Quieres estar al tanto de nuestras novedades educativas?</h4>
                            <p>¡Suscríbete para recibir actualizaciones, noticias y recursos educativos directamente en tu bandeja de entrada!</p>
                            <form action="" method="">
                                <input type="email" name="email" /><input type="submit" value="Suscribirse" />
                            </form>

                        </div>


                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Azerty</span></strong>.
                    </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}

                        Todos los derechos reservados.
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="arrow"><i className="bx bxl-twitter"></i></a>
                </div>
            </div>

        </footer>
    )
}
export default Footer;