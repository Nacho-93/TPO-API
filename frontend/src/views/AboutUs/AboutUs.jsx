import React from 'react'
import "./AboutUs.css"
import { Link } from 'react-router-dom'
function AboutUs() {

    return (
        <>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3>Sobre Nosotros</h3>
                            <p>Somos un equipo comprometido con la excelencia educativa y estamos aquí para ayudarte a alcanzar tus objetivos de aprendizaje. En Azerty estamos orgullosos de proporcionar servicios de clases particulares de alta calidad durante 2 años.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about py-5">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="images/about.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Nuestra Historia</h3>
                            <p className="fst-italic">
                                Nos dedicamos a la enseñanza y la tutoría desde nuestros inicios. Nuestra pasión por la educación y nuestro compromiso con el éxito de nuestros estudiantes nos han convertido en líderes en el campo de las clases particulares.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> Nuestra experiencia nos avala como expertos en la enseñanza.</li>
                                <li><i className="bi bi-check-circle"></i> Creemos en la importancia de la educación personalizada para cada estudiante.</li>
                                <li><i className="bi bi-check-circle"></i> Hemos ayudado a miles de estudiantes a alcanzar sus metas académicas y profesionales.</li>
                            </ul>
                            <p>
                                Estamos comprometidos con la excelencia educativa y esperamos ser tu socio en tu viaje de aprendizaje. Si deseas obtener más información sobre nuestros servicios, no dudes en
                                {" "}<Link to="/contacto" className='text-dark'>contactarnos</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section> {/*<!--<!-- End About Section --> --> */}


            {/* <!-- ======= Counts Section ======= --> */}
            <section id="counts" className="counts section-bg" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="container">

                    <div className="row counters">

                        <div className="col-lg-4 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="107"
                                data-purecounter-duration="1" className="purecounter">
                                107
                            </span>
                            <p>Estudiantes</p>
                        </div>

                        <div className="col-lg-4 col-6 text-center">
                            <span data-purecounter-start="0"
                                data-purecounter-end="21" data-purecounter-duration="1" className="purecounter">
                                21
                            </span>
                            <p>Clases</p>
                        </div>

                        <div className="col-lg-4 col-12 text-center">
                            <span data-purecounter-start="0"
                                data-purecounter-end="12" data-purecounter-duration="1" className="purecounter">
                                12
                            </span>
                            <p>Profesores</p>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default AboutUs;