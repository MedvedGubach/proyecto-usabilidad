import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../css/styles.css'

const RegistrarCoordinador = () => {

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [nip, setNip] = useState('');
    const [confNip, setConfNip] = useState('');


    const registrarCoordinador = () => {
        if (nombre === '' || apellidos === '' || telefono === '' || email === '' || rol === '' || confNip === '' || nip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/agregarUsuario.php';
            let fData = new FormData();
            fData.append('nombre', nombre);
            fData.append('apellidos', apellidos);
            fData.append('telefono', telefono);
            fData.append('correo', email);
            fData.append('rolUsuario', rol);
            fData.append('password', nip);
            fData.append('confirmarPassword', confNip);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNombre(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setApellidos(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Apellidos" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setTelefono(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Telefono" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setRol(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Rol" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setConfNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Confirmar NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={registrarCoordinador} variant="contained">Registrar Usuario {/* Coordinador */}</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default RegistrarCoordinador;