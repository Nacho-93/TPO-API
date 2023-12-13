import React from "react";
import { Link } from "react-router-dom";
export function ManageRequests() {

    const userId = localStorage.getItem('userId');

    return (
        <div>
            <section id="call-to-action" className="action-diferent section-home">
                <div className="container" data-aos="zoom-out">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3 className="">Solicitudes</h3>
                        </div>
                        <div className="col-lg-8 text-center">
                            <Link
                                to={`/perfil/${userId}/solicitudes-clases`}
                                className="btn btn-outline-info me-2"
                                style={{ width: "120px" }}>
                                Clases
                            </Link>

                            <Link
                                to={`/perfil/${userId}/solicitudes-comentarios`}
                                className="btn btn-outline-info ms-2"
                                style={{ width: "120px" }}>
                                Comentarios
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}   