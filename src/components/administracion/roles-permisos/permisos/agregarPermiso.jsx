import React, { Fragment, useState, } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";

const AgregarPermiso = () => {

    const [nombrePermiso, setNombrePermiso] = useState('');

    const agregarPermiso = () => {
        if (nombrePermiso === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/permisos/agregarPermiso.php';
            let fData = new FormData();
            fData.append('nombrePermiso', nombrePermiso);

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
                        <label>Agregar Permiso</label>
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNombrePermiso(v.target.value); }} id="outlined-basic" label="Nombre Permiso" variant="outlined" />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={agregarPermiso} color="primary" variant="contained">Nombre Permiso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AgregarPermiso;