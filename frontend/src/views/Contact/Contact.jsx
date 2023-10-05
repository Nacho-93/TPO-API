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
        <div id="contenedor">

            <div id="contacto">
                <h1>Contacto</h1>
                <form id="formulario">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required /><br />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required /><br />

                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required /><br />

                    <label for="mensaje">Mensaje:</label><br />
                    <textarea id="mensaje" name="mensaje" rows="5" cols="66" required></textarea><br />
                    <p>Caracteres restantes: <span id="charCount">50</span></p>

                    <input type="submit" value="Enviar" />
                </form>

            </div>
        </div>


    )
}

export default Contact