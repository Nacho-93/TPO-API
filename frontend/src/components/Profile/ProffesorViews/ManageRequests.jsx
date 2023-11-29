import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context/UserContext";
export function ManageRequests() {
    const { userId, login, logout } = useUserContext();
    return (
        <div>
            <section id="call-to-action" class="action-diferent section-home">
                <div class="container" data-aos="zoom-out">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h3 className="">Solicitudes</h3>
                        </div>
                        <div class="col-lg-8 text-center">
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