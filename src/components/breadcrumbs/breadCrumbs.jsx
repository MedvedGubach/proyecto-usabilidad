import React, { Fragment } from "react";


const Breadcrumbs = () => {

    const cerrarSesion = () => {
        //history.push({pathname: '/'});
        sessionStorage.clear();
    }

    const date = new Date();
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    return (
        <Fragment>
            <div className='container-fluid | col-md-10 | offset-md-1 |'>
                <div className='row |'>
                    <div>
                        <div style={{ textAlign: 'right' }} className='col-12 col-md-6 | info-usuario-container |'>
                            <p className='span-nombre |'>{`${date.getDate()}/${meses[date.getMonth()]}/${date.getFullYear()} `} <span style={{ color: 'red', cursor: 'pointer' }} onClick={() => { cerrarSesion(); }}>Cerrar Sesion</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Breadcrumbs