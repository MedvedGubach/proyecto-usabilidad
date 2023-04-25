import logo from './logo.svg';
import './App.css';
import Login from './components/login.jsx';
import LoginCoordinador from './components/loginCoordinador.jsx';
import Breadcrumbs from './components/breadcrumbs/breadCrumbs';
import Footer from './components/template/Footer.jsx';
import NavBar from './components/template/Navbar.jsx';
import Inicio from './components/apartados.jsx';
import AdministracionMenu from './components/administracion/administracionMenu';
import ControlModulos from './components/administracion/controlModulos.jsx';
import IniciarSesionCoord from './components/iniciarSesionCoord.jsx';
import RestablecerContraseña from './components/restablecerContraseña.jsx'
import ProyectosMenu from './proyectos/proyectosMenu';
import PerfilUsuario from './components/perfilUsuaio';
import { Routes, Route } from "react-router-dom"
import { Fragment } from 'react';

function App() {
  return (

    <Fragment>
      <NavBar></NavBar>
      {/* <Breadcrumbs></Breadcrumbs> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Login-Coord' element={<LoginCoordinador />}></Route>
        <Route path='/Inicio' element={<Inicio />}></Route>
        <Route path='/Administracion-Menu' element={<AdministracionMenu />}></Route>
        <Route path='/Control-Modulo' element={<ControlModulos />}></Route>
        <Route path='/Proyectos-Menu' element={<ProyectosMenu />}></Route>
        <Route path='/Sesion-Coordinador' element={<IniciarSesionCoord />}></Route>
        <Route path='/Restablecer-Contraseña' element={<RestablecerContraseña />}></Route>
        <Route path='/Perfil-Usuario' element={<PerfilUsuario />}></Route>
        <Route path="*" element={<p>Ruta No Encontrada</p>} />
      </Routes>

      <Footer></Footer>
    </Fragment>

  );
}

export default App;
