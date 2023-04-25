import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../css/styles.css'

const RegistrarCoordinador = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [area, setArea] = useState('');
    const [codigo, setCodigo] = useState('');
    const [nip, setNip] = useState('');

    const registrarCoordinador = () => {
        if (nombre === '' || email === '' || area === '' || codigo === '' || nip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {

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
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setArea(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Área" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setCodigo(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Código" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={registrarCoordinador} variant="contained">Registrar Coordinador</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default RegistrarCoordinador;