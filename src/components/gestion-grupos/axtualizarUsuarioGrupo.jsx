import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";

const EliminarUsuario = () => {

    const [valueGrupos, setValueGrupos] = useState(null);
    const [inputvalueGrupos, setInputValueGrupos] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const grupos = [
        { label: 'Grupo Test 1', id: 1994 },
        { label: 'Grupo Test 2', id: 1972 },
        { label: 'Grupo Test 3', id: 1974 },
        { label: 'Grupo Test 4', id: 2008 },
        { label: 'Grupo Test 5', id: 1957 },
        { label: "Grupo Test 6", id: 1993 },
        { label: 'Grupo Test 7', id: 1994 },
    ];

    const [valueUsuarios, setValueUsuarios] = useState(null);
    const [inputvalueUsuarios, setInputvalueUsuarios] = useState('');
    const [gruposArray, setGruposArray] = useState([]);

    const usuarios = [
        { label: 'Usuario Test 1', id: 1 },
        { label: 'Usuario Test 2', id: 2 },
        { label: 'Usuario Test 3', id: 3 },
        { label: 'Usuario Test 4', id: 4 },
        { label: 'Usuario Test 5', id: 5 },
        { label: "Usuario Test 6", id: 6 },
        { label: 'Usuario Test 7', id: 7 },
    ];

    const [grupoId, setGrupoId] = useState('');
    const [usuarioId, setUsuarioId] = useState('');

    const actualizarGrupoChange = (v) => {
        setGrupoId(v.id);
    }

    const actualizarUsuarioChange = (v) => {
        setUsuarioId(v.id);
    }

    const actualizarGrupo = () => {
        if (inputvalueGrupos === '' && inputvalueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Grupo Actualizado Correctamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
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
                            onInputChange={(_, v) => setInputvalueUsuarios(v)}
                            options={grupos}
                            renderInput={(params) => <TextField {...params} label="Seleccione Grupo" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuarios}
                            onChange={(_, v) => actualizarUsuarioChange(v)}
                            inputValue={inputvalueUsuarios}
                            onInputChange={(_, v) => setInputValueGrupos(v)}
                            options={usuarios}
                            renderInput={(params) => <TextField {...params} label="Seleccione Usuario" />}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarGrupo} color="warning" variant="contained">Actualiar Grupo del Usuario</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EliminarUsuario;