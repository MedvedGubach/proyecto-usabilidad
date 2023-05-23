import React from "react";
import { Fragment } from "react";
import NotFoundImg from './template/img/NotFound.png'

const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 | col-md-12 | col-sm-12 | col-xs-12">
                        <label>Error! Página no encontrada</label>
                        <img src={NotFoundImg} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default NotFound;