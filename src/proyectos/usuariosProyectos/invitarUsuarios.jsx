import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import EmailIcon from '@mui/icons-material/Email';
const InvitarUsuarios = () => {

    const [valueUsuarios, setValueUsuarios] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [valueProyecto, setValueProyecto] = useState(null);
    const [inputValueProyecto, setInputValueProyecto] = useState('');
    const [proyectosArray, setProyectosArray] = useState([]);

    const [usuarioId, seTUsuarioId] = useState('');
    const [proyectoId, setProyectoId] = useState('');

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

    const getProyectos = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/proyectos/listarProyectos.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].nombre_proyecto, value: response.data[x].Id });
            }
            setProyectosArray(array);
        });
    }

    const usuarioChange = (v) => {
        seTUsuarioId(v.value);
    }

    const proyectoChange = (v) => {
        setProyectoId(v.label);
    }

    const invitarUsuario = () => {
        if (inputValueProyecto === '' || inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/proyectos/invitarUsuario.php';
            let fData = new FormData();

            fData.append('nombre_proyecto', proyectoId);
            fData.append('usuario', usuarioId);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    useEffect(() => {
        getUsuarioId();
        getProyectos();
    }, [])


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Invitar Usuarios</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuarios}
                            onChange={(_, v) => usuarioChange(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuariosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Usuarios" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueProyecto}
                            onChange={(_, v) => proyectoChange(v)}
                            inputValue={inputValueProyecto}
                            onInputChange={(_, v) => setInputValueProyecto(v)}
                            options={proyectosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Proyecto" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={invitarUsuario} color="primary" variant="contained" endIcon={<EmailIcon />}>Invitar Usuario</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default InvitarUsuarios;