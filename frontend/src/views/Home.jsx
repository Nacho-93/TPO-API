import React from 'react'
import "./Home.css"
import Fondo from "../assets/background-for-school.jpg"
import ModalEliminar from '../components/modal/ModalEliminar';
import ModalAgregar from '../components/modal/ModalAgregar';
import ModalEsconder from '../components/modal/ModalEsconder';
import Foto from "../assets/background-for-school.jpg";
import FondoHome from "../assets/fondo home.jpg"


function Home() {
    return (
        <><section id="hero" class="hero d-flex align-items-center section-home">
            <div class="container">
                <div class="row gy-4 d-flex justify-content-between">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

                        <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                            <input type="text" class="form-control" placeholder="ZIP code or CitY"></input>
                            <button type="submit" class="btn btn-primary">Search</button>
                        </form>

                        <div class="row gy-4" data-aos="fade-up" data-aos-delay="400">

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Clients</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Support</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Workers</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src={Foto} class="img-fluid mb-3 mb-lg-0" alt="" />
                    </div>

                </div>
            </div>
        </section>
        
        <main id="main">

                <section id="service" class="services pt-0 section-home">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <span>Algunas de nuestras clases</span>
                            <h2>Algunas de nuestras clases</h2>

                        </div>

                        <div class="row gy-4">

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Quimica</a></h3>
                                    <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Musica</a></h3>
                                    <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Matematica</a></h3>
                                    <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Portuges</a></h3>
                                    <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Ingles</a></h3>
                                    <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={Foto} alt="" class="img-fluid" />
                                    </div>
                                    <h3><a href="service-details.html" class="stretched-link">Fisica</a></h3>
                                    <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
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
                                <a class="cta-btn" href="#">Contacto</a>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="faq" class="faq section-home">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <span>Frequently Asked Questions</span>
                            <h2>Frequently Asked Questions</h2>

                        </div>

                        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="col-lg-10">

                                <div class="accordion accordion-flush" id="faqlist">

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Non consectetur a erat nam at lectus urna duis?
                                            </button>
                                        </h3>
                                        <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                                            </button>
                                        </h3>
                                        <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                                            </button>
                                        </h3>
                                        <div id="faq-content-3" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                            </button>
                                        </h3>
                                        <div id="faq-content-4" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion-item">
                                        <h3 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                <i class="bi bi-question-circle question-icon"></i>
                                                Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                            </button>
                                        </h3>
                                        <div id="faq-content-5" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div class="accordion-body">
                                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
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