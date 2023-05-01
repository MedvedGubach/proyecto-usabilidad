import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistrarDestinatario = () => {


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

    const [idUsuario, setIdUsuario] = useState('');

    const eliminarUsuario = () => {
        if (inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/eliminarUsuario.php';
            let fData = new FormData();
            fData.append('id', idUsuario);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    const borrarUsuarioChagne = (v) => {
        setIdUsuario(v.id);
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container-fluid">

                <div className="row | mb-4">
                    <div className="col-12 | col-md-8 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuario}
                            onChange={(_, v) => borrarUsuarioChagne(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuarios}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Usuario" />}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={eliminarUsuario} color="warning" variant="contained">Eliminar Usuario</Button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default RegistrarDestinatario;