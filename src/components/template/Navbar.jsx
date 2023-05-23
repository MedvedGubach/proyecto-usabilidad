import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/LogoCUT.png';

import './css/navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <div className='container-fluid | pb-3'>
                <div className='row |'>
                    <div className='col-12 col-md-10 | offset-md-1 |'>
                        <nav className='navbar navbar-expand-lg navbar-light | nav_style |'>
                            <div className='collapse navbar-collapse |' id='navbarNavAltMarkup'>
                                <div className='navbar-nav |'>
                                    <Link className='nav-link |' to='/'>Inicio</Link>
                                    <Link className='nav-link |' to='/'>Acerca de</Link>
                                    <Link className='nav-link |' to='/'>Contacto</Link>
                                    <Link className='nav-link |' to='/'>-------------</Link>
                                    <Link className='nav-link |' to='/'>-------------</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Navbar;