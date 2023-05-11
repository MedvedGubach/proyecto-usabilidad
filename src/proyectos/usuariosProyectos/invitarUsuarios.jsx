import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

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

    const getProyectoId = () => {
        /* axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        }); */
    }



    const usuarioChange = (v) => {
        seTUsuarioId(v.value);
    }

    const proyectoChange = (v) => {

    }

    const invitarUsuario = () => {
        if (inputValueProyecto === '' || inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {

        }
    }

    useEffect(() => {
        getUsuarioId();
        getProyectoId();
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

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={invitarUsuario} color="primary" variant="contained">Invitar Usuario</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default InvitarUsuarios;