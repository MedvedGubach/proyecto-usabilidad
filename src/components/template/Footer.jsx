import React, { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <div className='container-fluid | pt-3 | container-footer'>
                <div className='row |'>
                    <div className='col-12 col-md-10 | offset-md-1 | app-footer |'>
                        <p>Inicio</p>
                        <p>Contacto</p>
                        <p>Acerca de</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;