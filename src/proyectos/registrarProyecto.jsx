import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import Paper from '@mui/material/Paper';

import 'react-toastify/dist/ReactToastify.css';

const RegistrarProyecto = () => {

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);


    const [idUsuario, setIdUsuario] = useState('');
    const [nombreProyecto, setNombreProyecto] = useState('');

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


    const registrarProyecto = () => {
        if (inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/proyectos/agregarProyecto.php';
            let fData = new FormData();

            fData.append('nombre_proyecto', nombreProyecto);
            fData.append('dueno_proyecto', idUsuario);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    const actualizarUsuarioChange = (v) => {
        setIdUsuario(v.value);
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <Paper elevation={6}>
                    <div className="row | mb-2 | mt-2 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12 | mt-4">
                            <label>Registrar Proyecto</label>
                        </div>
                    </div>

                    <div className="row pb-4 | pt-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <Autocomplete
                                freeSolo
                                value={valueUsuario}
                                onChange={(_, v) => actualizarUsuarioChange(v)}
                                inputValue={inputValueUsuarios}
                                onInputChange={(_, v) => setInputValueUsuarios(v)}
                                options={usuariosArray}
                                renderInput={(params) => <TextField {...params} label="Dueño del Proyecto" />}
                            />
                        </div>
                    </div>
                    <div className="row pb-4 | pt-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <TextField fullWidth onChange={(e) => { setNombreProyecto(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nombre" variant="outlined" />
                        </div>
                    </div>

                    <div className="row pb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
                            <Button onClick={registrarProyecto} variant="contained">Registrar Proyecto</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}

export default RegistrarProyecto;