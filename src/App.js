import logo from './logo.svg';
import './App.css';
import Login from './components/login.jsx';
import LoginCoordinador from './components/loginCoordinador.jsx';
import Breadcrumbs from './components/breadcrumbs/breadCrumbs';
import NotFound from './components/notFound';
import RegistrarUsuario from './components/registrarUsuario.jsx';
import RecuperarNip from './components/recuperarNip.jsx';
import Footer from './components/template/Footer.jsx';
import NavBar from './components/template/Navbar.jsx';
import Inicio from './components/apartados.jsx';
import AdministracionMenu from './components/administracion/administracionMenu';
import PerfilesUsuarios from './components/usuarios/perfilesUsuarios.jsx';
import ControlModulos from './components/administracion/controlModulos.jsx';
import IniciarSesionCoord from './components/iniciarSesionCoord.jsx';
import ProyectosMenu from './proyectos/proyectosMenu';
import GestionGrupos from './components/gestion-grupos/gestionGrupos';
import EvaluarProyectos from './proyectos/evaluarProyectos/evaluarProyectos.jsx';
import TableroProyectos from './proyectos/tableroProyectos';
import { Routes, Route } from "react-router-dom"
import { Fragment } from 'react';

function App() {
  return (

    <Fragment>
      <NavBar></NavBar>
      <Breadcrumbs></Breadcrumbs>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Login-Coord' element={<LoginCoordinador />}></Route>
        <Route path='/Registrarse' element={<RegistrarUsuario />}></Route>
        <Route path='/Recuperar-NIP' element={<RecuperarNip />}></Route>
        <Route path='/Inicio' element={<Inicio />}></Route>
        <Route path='/Administracion-Menu' element={<AdministracionMenu />}></Route>
        <Route path='/Control-Modulo' element={<ControlModulos />}></Route>
        <Route path='/Usuarios' element={<PerfilesUsuarios />}></Route>
        <Route path='/Proyectos-Menu' element={<ProyectosMenu />}></Route>
        <Route path='/Sesion-Coordinador' element={<IniciarSesionCoord />}></Route>
        <Route path='/Gestion-Grupos' element={<GestionGrupos />}></Route>
        <Route path='/Evaluar-Proyectos' element={<EvaluarProyectos />}></Route>
        <Route path='/Resultados' element={<TableroProyectos />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </Fragment>

  );
}

export default App;
