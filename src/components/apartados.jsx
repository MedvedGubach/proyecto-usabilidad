import React, { Fragment } from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardText, } from 'reactstrap';
import { Link } from "react-router-dom";


import './css/styles.css';

const Apartados = () => {
    return (
        <Fragment>
            <div className='container | app-content |'>
                <div className='row | mb-5 |'>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Link>
                            <Card className='rolCard |'>
                                <CardImg className='img-cac-logos |'></CardImg>
                                <CardBody>
                                    <CardTitle className='card-text-cac |'>Apartado 1</CardTitle>
                                    <CardText></CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </div>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Card className='planesCard |'>
                            <CardImg className='img-cac-logos |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Apartado 2</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-4 |'>
                        <Card className='ciclosCard |'>
                            <CardImg className='img-cac-logos |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Apartado 3</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>

                <div className='row | mb-5 |'>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Card className='plantelesCard |' >
                            <CardImg className='img-cac-logos |'></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Apartado 4</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-4 | mb-5 |'>
                        <Card>
                            <CardImg className='img-cac-logos |' ></CardImg>
                            <CardBody>
                                <CardTitle className='card-text-cac |'>Apartado 5</CardTitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-4 |'>
                        <Card>
                            <CardImg className='img-cac-logos |'></CardImg>
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