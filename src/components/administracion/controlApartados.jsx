import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";

const PermisosUsuario = () => {

    const [valueApartados, setValueApartados] = useState(null);
    const [inputValueApartados, setInputValueApartados] = useState('');
    const [apartadosArray, setApartadosArray] = useState([]);

    const [valuePermisos, setValuePermisos] = useState(null);
    const [inputValuePermisos, setInputValuePermisos] = useState('');
    const [permisosArray, setPermisosArray] = useState([]);


    const [apartados, setApartado] = useState('');
    const [permiso, setPermiso] = useState('');

    const apartado = [
        { label: 'Administracion', nivel: 4 },
        { label: 'Usuarios', nivel: 2 },
        { label: 'Tablero Proyecto', nivel: 4 },
        { label: 'Perfiles Usuario', nivel: 2 },
        { label: 'Apartado 5', nivel: 4 },
        { label: 'Apartado 6', nivel: 4 },
    ];

    const permisos = [
        { label: 'Administrador', nivel: 4 },
        { label: 'Coordinador', nivel: 3 },
        { label: 'Experto', nivel: 2 },
        { label: 'Destinatario', nivel: 1 },
    ];

    const changeApartado = () => {

    }

    const changePermiso = () => {

    }

    const asignarPermiso = () => {
        if (inputValuePermisos === '' || inputValueApartados === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Permiso Asignado', { theme: "dark", position: "top-center", toastId: 'success1' });
            setInputValuePermisos('');
            setInputValueApartados('');
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
                            value={valueApartados}
                            onChange={(_, v) => changeApartado(v)}
                            inputValue={inputValueApartados}
                            onInputChange={(_, v) => setInputValueApartados(v)}
                            options={apartado}
                            renderInput={(params) => <TextField {...params} label="Apartado" />}
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
                            renderInput={(params) => <TextField {...params} label="Nivel Permiso" />}
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