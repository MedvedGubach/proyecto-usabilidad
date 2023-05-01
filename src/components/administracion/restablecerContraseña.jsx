import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RestablecerContraseña = () => {

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const usuarios = [
        { label: 'Usuario 1', id: 1994 },
        { label: 'Usuario 2', id: 1972 },
        { label: 'Usuario 3', id: 1974 },
        { label: 'Usuario 4', id: 2008 },
        { label: 'Usuario 5', id: 1957 },
        { label: "Usuario 6", id: 1993 },
        { label: 'Usuario 7', id: 1994 },
    ];

    const [usuarioId, setUsuarioId] = useState('');
    const [nipActual, setNipActual] = useState('');
    const [nuevoNip, setNuevoNip] = useState('');
    const [confirmarNip, setConfirmarNip] = useState('');

    const actualizarContraseña = (v) => {
        setUsuarioId(v.id)
    }


    const restablecer = () => {
        if (inputValueUsuarios === '' || nipActual === '' || nuevoNip === '' || confirmarNip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/actualizarPassword.php';
            let fData = new FormData();
            fData.append('id', usuarioId);
            fData.append('passwordActual', nipActual);
            fData.append('newPassword', nuevoNip);
            fData.append('confirmarPassword', confirmarNip);


            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <div className="row | mb-2">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Typography variant="caption" display="block" gutterBottom>
                            Restablecer Contraseña
                        </Typography>
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuario}
                            onChange={(_, v) => actualizarContraseña(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuarios}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Usuario" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setNipActual(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="NIP Actual" variant="outlined" />
                    </div>
                </div>
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setNuevoNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nuevo NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setConfirmarNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Confirmar Nuevo NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={restablecer} variant="contained">Reestablecer Contraseña</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default RestablecerContraseña;