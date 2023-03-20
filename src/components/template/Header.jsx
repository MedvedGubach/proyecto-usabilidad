import React, { Fragment } from "react";
import './template.css'

const Header = () => {
    return (
        <Fragment>
            <div className="container-fluid | d-none d-sm-block">
                <div className="row">
                    <div className="col-12 | general-container | app-header">
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