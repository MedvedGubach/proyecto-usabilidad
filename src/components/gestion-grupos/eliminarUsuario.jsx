import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EliminarUsuario = () => {

    const [valueGrupos, setValueUsuarios] = useState(null);
    const [inputvalueGrupos, setInputValueGrupos] = useState('');
    const [gruposArray, setGruposArray] = useState([]);

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const getGrupoId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/grupos/listarGrupos.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombreGrupo, value: response.data[x].Id });
            }
            setGruposArray(array);
        });
    }

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        });
    }

    useEffect(() => {
        getGrupoId();
        getUsuarioId();
    }, [])


    const [grupoId, setGrupoId] = useState('');
    const [usuarioId, setUsuarioId] = useState('');

    const actualizarGrupoChange = (v) => {
        setGrupoId(v.id);
    }

    const actualizarUsuarioChange = (v) => {
        setUsuarioId(v.id);
    }

    const actualizarGrupo = () => {
        if (inputvalueGrupos === '' && inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Usuario Eliminado Correctamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueGrupos}
                            onChange={(_, v) => actualizarGrupoChange(v)}
                            inputValue={inputvalueGrupos}
                            onInputChange={(_, v) => setInputValueGrupos(v)}
                            options={gruposArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Grupo" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuario}
                            onChange={(_, v) => actualizarUsuarioChange(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuariosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Usuario" />}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarGrupo} color="warning" variant="contained">Eliminar Usuario de Grupo</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EliminarUsuario;