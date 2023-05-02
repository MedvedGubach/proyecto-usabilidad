import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CrearGrupo = () => {

    const [nombreGrupo, setNombreGrupo] = useState('');
    const [moderador, setModerador] = useState('');

    const crearGrupo = () => {
        if (nombreGrupo === '' || moderador === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/grupos/eliminarGrupo.php';
            let fData = new FormData();

            fData.append('nombreGrupo', nombreGrupo);
            fData.append('idModerador', moderador);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Grupo Creado Exitosamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>

            <div className="container">
                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNombreGrupo(v.target.value); console.log(v.target.value) }} id="outlined-basic" label="Nombre Grupo" variant="outlined" />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setModerador(v.target.value); console.log(v.target.value) }} id="outlined-basic" label="Moderador" variant="outlined" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={crearGrupo} color="primary" variant="contained">Crear Grupo</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CrearGrupo;