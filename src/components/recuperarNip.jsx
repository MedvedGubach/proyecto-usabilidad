import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import axios from 'axios'
import Paper from '@mui/material/Paper';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RecuperarNip = () => {

    const [usuarioId, setUsuarioId] = useState('');
    const [email, setEmail] = useState('');
    const [nuevoNip, setNuevoNip] = useState('');
    const [confirmarNip, setConfirmarNip] = useState('');



    const reestablecer = () => {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (email === '' || nuevoNip === '' || confirmarNip === '') {
                toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
            } else {
                const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/recuperarNip.php';
                let fData = new FormData();
                fData.append('email', email);
                fData.append('newPassword', nuevoNip);
                fData.append('confirmarPassword', confirmarNip);

                axios.post(url, fData).then(response => {
                    console.log(response.data);
                    if (response.data == 'Password actualizado correctamente') {
                        alert(response.data);
                    } else {
                        toast.error('Error al actualizar password', { theme: "dark", position: "top-center", toastId: 'error1' });
                    }
                }).catch(error => alert(error));
            }
        } else {
            toast.warning('Ingrese un E-Mail Valido', { theme: "dark", position: "top-center", toastId: 'emailwarning1' });
        }


    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <Paper elevation={6}>
                    <div className="row | mb-2 | mt-2 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12 | mt-4">
                            <label>Recuperar NIP</label>
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField fullWidth onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField type="password" fullWidth onChange={(e) => { setNuevoNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nuevo NIP" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField type="password" fullWidth onChange={(e) => { setConfirmarNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Confirmar Nuevo NIP" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12 | mb-4">
                            <Button onClick={reestablecer} variant="contained">Recuperar NIP</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}


export default RecuperarNip;