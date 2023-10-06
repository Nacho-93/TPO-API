import React from 'react'
import "./Contact.css"

function Contact() {

    // function validate_form() {
    //     document.getElementById('formulario').addEventListener('submit', function (event) {
    //         let emailValue = document.getElementById('email').value;
    //         let telefonoValue = document.getElementById('telefono').value;

    //         let isEmail = !validateEmail(emailValue);
    //         let isTelefono = !validateTelefono(telefonoValue);

    //         if (isEmail && isTelefono) {
    //             alert('El email y el telefono ingresado son invalidos.'
    //                 + '\n' + '¡Por favor ingrese los datos nuevamente!')
    //         }
    //         else if (isEmail) {
    //             alert('El email ingresado es invalido.'
    //                 + '\n' + '¡Por favor ingrese los datos nuevamente!')
    //         }
    //         else if (isTelefono) {
    //             alert('El telefono ingresado es invalido.'
    //                 + '\n' + '¡Por favor ingrese los datos nuevamente!')
    //         }
    //         else {
    //             alert('Los datos son correctos!!!')
    //         }
    //     });
    // }
    // function validateTelefono(str) {
    //     let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    //     return regex.test(str);
    // }
    // function validateEmail(email) {
    //     let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    // }

    return (
        <>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3>Contacto</h3>
                            <p>Estamos aquí para responder a tus preguntas y proporcionarte la información que necesitas. No dudes en ponerte en contacto con nosotros.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact-section">

                <div className="container" data-aos="fade-up">

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">


                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>somosazerty@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Teléfono:</h4>
                                    <p>+54 11 5279 9760</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form action="" method="" role="form" className="email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                                </div>
                                {/* <div className="my-3">
                                    <div className="loading">Cargando</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">El mensaje ha sido enviado, gracias!</div>
                                </div> */}
                                <div className="text-center mt-5"><button type="submit"
                                    className='btn btn-info text-dark px-4 mb-5'>
                                    Enviar</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>


    )
}

export default Contact