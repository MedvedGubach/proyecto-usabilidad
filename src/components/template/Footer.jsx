import React, { Fragment } from 'react';
import Logo from './img/LogoCUT.png';
import './css/footer.css';

const Footer = () => {
    return (
        <Fragment>
            <div className='container-fluid | pt-3'>
                <div className='row |'>
                    <div className='col-12 col-md-10 | offset-md-1 | footer-container |'>
                        <div className='col-12 col-md-7 col-lg-8 col-xl-9 | second-container'>
                            <img className='img-footer |' src={Logo} ></img>
                            <p className='title-principal |'>----------------------------------<br />
                                --------------------------------------------<br />
                                <b>-------------- </b> ------------------
                            </p>
                        </div>

                        <div className='col-12 col-md-5 col-lg-4 col-xl-3 | second-container |'>
                            <p className='menu |' >Menú</p>
                            <ul>
                                <li><a href='/'>Inicio</a><span className='bi bi-caret-down-fill | icon |' ></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                                <li><a href='/'>---------------</a><span className='bi bi-caret-down-fill | icon |'></span></li>
                            </ul>
                        </div>

                        <div className='col-12 |'>
                            <p className='derechos |'>---------------------<a href='/' style={{ color: "#8c2b3d" }}>-----------------------</a> | <a href='/' style={{ color: "#8c2b3d" }}>Créditos de sitio</a> | <a href='/' style={{ color: "#8c2b3d" }}>-------------------</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Footer;