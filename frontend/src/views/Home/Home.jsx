import React from 'react'
import "./Home.css"
import Guitarra from "../../assets/guitarra.jpg";
import Ingles from "../../assets/ingles.jpg";
import Matematica from "../../assets/Matematica.jpg";
import Quimica from "../../assets/Quimica.jpg";
import Fisica from "../../assets/Fisica.jpg";
import Violin from "../../assets/VIOLIN.jpg";
import { Link } from "react-router-dom"




function Home() {
    return (
        <><section id="hero" class="hero d-flex align-items-center section-home" style={{ maxHeight: "200px" }}>
            <div class="container">
                <div class="row gy-4 d-flex justify-content-between">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">¡Aprende y enseña con nosotros!</h2>
                        <p data-aos="fade-up" data-aos-delay="100">
                            Busca la clase que necesites, comunicate con el profesor y
                            en poco tiempo ya estas estudiando lo que te gusta!
                        </p>
                    </div>



                </div>
            </div>
        </section>

            <main id="main">

                <section id="service" class="services pt-0 section-home change-bg" >
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <span>Algunas de nuestras clases</span>
                            <h2>Algunas de nuestras clases</h2>

                        </div>

                        <div class="row gy-4">

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Quimica} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="">Quimica</Link></h3>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Guitarra} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="stretched-link">Guitarra</Link></h3>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Matematica} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="stretched-link">Matematica</Link></h3>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Violin} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="stretched-link">Violin</Link></h3>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Ingles} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="stretched-link">Ingles</Link></h3>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div class="card bg-dark text-white">
                                    <div class="card-img">
                                        <img src={Fisica} alt="" class="img-fluid custom-img" />
                                    </div>
                                    <h3><Link to="/categorias" class="stretched-link">Fisica</Link></h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="call-to-action" class="call-to-action section-home">
                    <div class="container" data-aos="zoom-out">

                        <div class="row justify-content-center">
                            <div class="col-lg-8 text-center">
                                <h3>Contactanos</h3>
                                <p> No dudes en llamar ante cualquier consulta!</p>
                                <Link class="cta-btn" to="/contacto">Contacto</Link>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="faq" class="faq section-home">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <span>Preguntas frecuentes</span>
                            <h2>Preguntas frecuentes</h2>

                        </div>

                        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-10">

                                <div class="accordion accordion-flush" id="faqlist">

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                ¿Cómo puedo encontrar un profesor adecuado para mis necesidades?
                                            </button>
                                        </h3>
                                        <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Busca la materia que necesites y revisa todos los profesores que ofrecen clases, las opiniones que otros alumnos dieron y su calificacion.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                ¿Cómo puedo programar una clase particular?
                                            </button>
                                        </h3>
                                        <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Selecciona la clase, contactate con el profesor y coordina un dia y horario para que puedas disfrutar de tu clase
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                ¿Se ofrecen descuentos o paquetes especiales para la contratación de múltiples clases?
                                            </button>
                                        </h3>
                                        <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                No, la pagina no cuenta con un servicio de descuentos o paquetes por cantidad de clases.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                ¿Los profesores ofrecen clases en línea o presenciales?
                                            </button>
                                        </h3>
                                        <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Cada profesor elige de que forma dar la clase, este detalle lo encontraras en la descripcion de la clase.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                ¿Cuál es la política de cancelación y reembolso?
                                            </button>
                                        </h3>
                                        <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Para recibir un reembolso la clase debe ser cancelada con 24 horas de antelacion, en caso contrario no se devolvera el dinero.
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main></>


    )

}

export default Home;