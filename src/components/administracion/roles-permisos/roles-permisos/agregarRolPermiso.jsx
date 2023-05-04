import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from "react-toastify";

const AgregarRolPermiso = () => {

    const [valueRol, setValueRol] = useState(null);
    const [inputvalueRoles, setInputValueRoles] = useState('');
    const [rolesArray, setRolesArray] = useState([]);

    const [valuePermisos, setValuePermisos] = useState(null);
    const [inputValuePermisos, setInputValuePermisos] = useState('');
    const [permisosArray, setPermisosArray] = useState([]);

    const [rolId, setRolId] = useState('');
    const [permisoId, setPermisoId] = useState('');

    const getRolId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/roles/listarRoles.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombreRol, value: response.data[x].Id });
            }
            setRolesArray(array);
        });
    }

    const getPermisoId = () => {
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
        getPermisoId();
    }, [])


    const actualizarRolChange = (v) => {
        setRolId(v.value);
    }

    const actualizarPermisoChange = (v) => {
        setPermisoId(v.value);
    }

    const agregarPermiso = () => {
        if (inputvalueRoles === '' && inputValuePermisos === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/rol_permiso/agregarRol_Permiso.php';
            let fData = new FormData();
            fData.append('IdRol', rolId);
            fData.append('IdPermiso', permisoId);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Usuario Agregado Correctamente', { theme: "dark", position: "top-center", toastId: 'success' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <div className="row | mb-2 | mt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Typography variant="caption" display="block" gutterBottom>
                            Agregar Permiso
                        </Typography>
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueRol}
                            onChange={(_, v) => actualizarRolChange(v)}
                            inputValue={inputvalueRoles}
                            onInputChange={(_, v) => setInputValueRoles(v)}
                            options={rolesArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Rol" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valuePermisos}
                            onChange={(_, v) => actualizarPermisoChange(v)}
                            inputValue={inputValuePermisos}
                            onInputChange={(_, v) => setInputValuePermisos(v)}
                            options={permisosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Permiso" />}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={agregarPermiso} color="primary" variant="contained">Agregar Permiso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default AgregarRolPermiso;