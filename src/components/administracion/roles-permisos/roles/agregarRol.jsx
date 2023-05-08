import React, { Fragment, useState, } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";

const AgregarRol = () => {

    const [nombreRol, setNombreRol] = useState('');

    const agregarRol = () => {
        if (nombreRol === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/roles/agregarRol.php';
            let fData = new FormData();
            fData.append('nombreRol', nombreRol);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Rol Agregado Exitosamente', { theme: "dark", position: "top-center", toastId: 'success1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Agregar Rol</label>
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNombreRol(v.target.value); }} id="outlined-basic" label="Nombre Rol" variant="outlined" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={agregarRol} color="primary" variant="contained">Nombre Rol</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AgregarRol;