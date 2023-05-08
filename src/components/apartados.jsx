import React, { Fragment } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './css/styles.css';

const Apartados = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    console.log(token);

    const authAdministrador = () => {
        navigate("/Administracion-Menu");
    }

    const authUsuarios = () => {
        navigate("/Restablecer-Contraseña");
    }

    const authTableroProyectos = () => {
        navigate("/Proyectos-Menu");
    }

    const authGestionGrupos = () => {
        navigate("/Gestion-Grupos");
    }

    return (
        <Fragment>
            <div className='container |'>
                <div className='row |'>
                    <div className='col-12 col-md-4 |'>
                        <Card onClick={authAdministrador} className='apartado-1 |'>
                            <CardImg className='img-apartados |'>{/* <AdminPanelSettingsIcon/> */}</CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Administración</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Card onClick={authUsuarios} className='apartado-2 |'>
                            <CardImg className='img-apartados |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Usuarios</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='col-12 col-md-4 |'>
                        <Card onClick={authTableroProyectos} className='apartado-3 |'>
                            <CardImg className='img-apartados |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Tablero Proyectos</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div className='row | mb-5 |'>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Card onClick={authGestionGrupos} className='apartado-4 |' >
                            <CardImg className='img-apartados |'></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Gestión de Grupos</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
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