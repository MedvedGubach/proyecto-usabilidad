import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";

const PermisosUsuario = () => {

    const [valueUsuarios, setValueUsuarios] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [valuePermisos, setValuePermisos] = useState(null);
    const [inputValuePermisos, setInputValuePermisos] = useState('');
    const [permisosArray, setPermisosArray] = useState([]);


    const [usuario, setUsuario] = useState('');
    const [permiso, setPermiso] = useState('');

    const usuarios = [
        { label: 'Usuario Test 1', codigo: 1994 },
        { label: 'Usuario Test 2', codigo: 1972 },
        { label: 'Usuario Test 3', codigo: 1974 },
        { label: 'Usuario Test 4', codigo: 2008 },
        { label: 'Usuario Test 5', codigo: 1957 },
        { label: "Usuario Test 6", codigo: 1993 },
        { label: 'Usuario Test 7', codigo: 1994 },
    ];

    const permisos = [
        { label: 'Administrador', nivel: 4 },
        { label: 'Coordinador', nivel: 3 },
        { label: 'Experto', nivel: 2 },
        { label: 'Destinatario', nivel: 1 },
    ];

    const changeUsuario = () => {

    }

    const changePermiso = () => {

    }

    const asignarPermiso = () => {
        if (inputValuePermisos === '' || inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Permiso Asignado', { theme: "dark", position: "top-center", toastId: 'success1' });
            setInputValuePermisos('');
            setInputValueUsuarios('');
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
                            value={valueUsuarios}
                            onChange={(_, v) => changeUsuario(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuarios}
                            renderInput={(params) => <TextField {...params} label="Usuarios" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valuePermisos}
                            onChange={(_, v) => changePermiso(v)}
                            inputValue={inputValuePermisos}
                            onInputChange={(_, v) => setInputValuePermisos(v)}
                            options={permisos}
                            renderInput={(params) => <TextField {...params} label="Permisos" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={asignarPermiso} variant="contained">Asignar Permiso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PermisosUsuario;