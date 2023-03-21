import logo from './logo.svg';
import './App.css';
import Login from './components/login.jsx';
import Header from './components/template/Header.jsx';
import Footer from './components/template/Footer.jsx';
import Inicio from './components/apartados.jsx';
import ActualizarCoordinador from './components/actualizarCoordinador.jsx';
import ActualizarDestinatario from './components/actualizarDestinatario.jsx';
import ActualizarExperto from './components/actualizarExperto.jsx';
import ControlModulos from './components/controlModulos.jsx';
import IniciarSesionCoord from './components/iniciarSesionCoord.jsx';
import RegistrarCoordinador from './components/registrarCoordinador.jsx';
import RegistrarExperto from './components/registrarDestinatario.jsx';
import RegistrarDestinatario from './components/registroExperto.jsx';
import RestablecerContraseña from './components/restablecerContraseña.jsx'



import { Routes, Route } from "react-router-dom"

function App() {
  return (

    <div className="App-main-div" >

      <Header></Header>

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='Inicio' element={<Inicio />}></Route>
        <Route path='Actualizar-Coordinador' element={<ActualizarCoordinador />}></Route>
        <Route path='Actualizar-Destinatario' element={<ActualizarDestinatario />}></Route>
        <Route path='Actualizar-Experto' element={<ActualizarExperto />}></Route>
        <Route path='Control-Modulo' element={<ControlModulos />}></Route>
        <Route path='Sesion-Coordinador' element={<IniciarSesionCoord />}></Route>
        <Route path='Registrar-Coordinador' element={<RegistrarCoordinador />}></Route>
        <Route path='Registrar-Experto' element={<RegistrarExperto />}></Route>
        <Route path='Registrar-Destinatario' element={<RegistrarDestinatario />}></Route>
        <Route path='Restablecer-Contraseña' element={<RestablecerContraseña />}></Route>


      </Routes>


      <Footer></Footer>

    </div>

  );
}

export default App;
