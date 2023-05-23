import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import './beadcrumbs.css';


const Breadcrumbs = () => {
    const navigate = useNavigate();
    const cerrarSesion = () => {
        navigate("/");
        sessionStorage.clear();
    }

    const date = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    return (
        <Fragment>
            <div className='container |'>
                <div className='row | mb-4'>
                    <div>
                        <div style={{ textAlign: 'right' }} className='col-12  | col-md-12 | info-usuario-container |'>
                            <p className='span-nombre |'>{`${date.getDate()}/${meses[date.getMonth()]}/${date.getFullYear()} `} <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => { cerrarSesion(); }}>Cerrar Sesion</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Breadcrumbs