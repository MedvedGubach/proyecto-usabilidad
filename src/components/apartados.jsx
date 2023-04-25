import React, { Fragment } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import './css/styles.css';

const Apartados = () => {
    return (
        <Fragment>
            <div className='container |'>
                <div className='row |'>
                    <div className='col-12 col-md-4 |'>
                        <Link to="/Administracion-Menu">
                            <Card className='apartado-1 |'>
                                <CardImg className='img-apartados |'>{/* <AdminPanelSettingsIcon/> */}</CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Administración</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Link to="/Restablecer-Contraseña">
                            <Card className='apartado-2 |'>
                                <CardImg className='img-apartados |' ></CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Usuarios</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 |'>
                        <Link to="/Proyectos-Menu">
                            <Card className='apartado-3 |'>
                                <CardImg className='img-apartados |' ></CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Tablero Proyectos</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                </div>

                <div className='row | mb-5 |'>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Link to="/Perfil-Usuario">
                            <Card className='apartado-4 |' >
                                <CardImg className='img-apartados |'></CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Perfiles Usuarios</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Link to="/Login-Coord">
                            <Card>
                                <CardImg className='img-apartados |' ></CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Login Coord Test</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 |'>
                        <Card>
                            <CardImg className='img-apartados |'></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Apartado 6</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}


export default Apartados;