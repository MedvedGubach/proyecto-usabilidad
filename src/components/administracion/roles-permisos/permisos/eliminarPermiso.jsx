import React, { Fragment, useState, } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

const EliminarPermiso = () => {

    const [valuePermisos, setValuePermisos] = useState(null);
    const [inputValuePermisos, setInputValuePermisos] = useState('');
    const [permisosArray, setPermisosArray] = useState([]);


    const [permisoId, setPermisoId] = useState('');

    const getRolId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/permisos/listarPermisos.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombrePermiso, value: response.data[x].Id });
            }
            setPermisosArray(array);
        });
    }

    useEffect(() => {
        getRolId();
    }, [])


    const actualizarGrupoChange = (v) => {
        setPermisoId(v.value);
    }

    const eliminarPermiso = () => {
        if (inputValuePermisos === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/permisos/eliminarPermiso.php';
            let fData = new FormData();
            fData.append('Id', permisoId);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Rol Eliminado Correctamente', { theme: "dark", position: "top-center", toastId: 'success1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Eliminar Permiso</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valuePermisos}
                            onChange={(_, v) => actualizarGrupoChange(v)}
                            inputValue={inputValuePermisos}
                            onInputChange={(_, v) => setInputValuePermisos(v)}
                            options={permisosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Permiso" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={eliminarPermiso} color="error" variant="contained">Eliminar Permiso</Button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default EliminarPermiso;