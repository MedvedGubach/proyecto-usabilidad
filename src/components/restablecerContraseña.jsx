import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './css/styles.css'

const RestablecerContraseña = () => {

    const [email, setEmail] = useState('');
    const [nuevoNip, setNuevoNip] = useState('');
    const [confirmarNip, setConfirmarNip] = useState('');


    const restablecer = () => {
        if (email === '' || nuevoNip === '' || confirmarNip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {

        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Typography variant="caption" display="block" gutterBottom>
                            Restablecer Contraseña
                        </Typography>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setNuevoNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nuevo NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setConfirmarNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Confirmar Nuevo NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={restablecer} variant="contained">Reestablecer Contraseña</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default RestablecerContraseña;