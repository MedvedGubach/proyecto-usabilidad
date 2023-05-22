import React, { Fragment, useEffect } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import './css/styles.css';

const Apartados = () => {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const rol = sessionStorage.getItem('rol');
    const id = sessionStorage.getItem('id');

    const authLogin = () => {
        if (token == null) {
            toast.warning('Error, Favor de Iniciar Sesión', { theme: "dark", position: "top-center", toastId: 'error1' });
            navigate("/Administracion");
        } else {
            console.log('login')
        }
    }

    useEffect(() => {
        authLogin();
    }, [])


    const authAdministrador = () => {

        if (rol == 'Administrador') {
            navigate("/Administracion-Menu");
        } else {
            toast.warning('No Cuentas Con Acceso a Este Apartado', { theme: "dark", position: "top-center", toastId: 'error1' });
        }

    }

    const authUsuarios = () => {
        navigate("/Usuarios");
    }

    const authTableroProyectos = () => {
        navigate("/Proyectos-Menu");
    }

    const authGestionGrupos = () => {
        if (rol == 'Administrador') {
            navigate("/Gestion-Grupos");
        } else {
            toast.warning('No Cuentas Con Acceso a Este Apartado', { theme: "dark", position: "top-center", toastId: 'error1' });
        }
    }

    const authEvaluarProyectos = () => {
        navigate("/Evaluar-Proyectos");
    }

    const authResultados = () => {
        navigate('/Resultados');
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
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
                        <Card onClick={authEvaluarProyectos} className="apartado-5">
                            <CardImg className='img-apartados |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Evaluar Proyectos</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-4 |'>
                        <Card onClick={authResultados} className="apartado-6">
                            <CardImg className='img-apartados |'></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Resultados</CardTitle>
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