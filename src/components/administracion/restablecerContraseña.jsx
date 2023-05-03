import { Fragment, React, useState, useEffect} from "react";
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

    const [usuarioId, setUsuarioId] = useState('');
    const [nipActual, setNipActual] = useState('');
    const [nuevoNip, setNuevoNip] = useState('');
    const [confirmarNip, setConfirmarNip] = useState('');

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        });
    }

    useEffect(() => {
        getUsuarioId();
    }, [])

    const actualizarContraseña = (v) => {
        setUsuarioId(v.value)
    }

    const restablecer = () => {
        if (inputValueUsuarios === '' || nipActual === '' || nuevoNip === '' || confirmarNip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/actualizarPassword.php';
            let fData = new FormData();
            fData.append('Id', usuarioId);
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
                            options={usuariosArray}
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