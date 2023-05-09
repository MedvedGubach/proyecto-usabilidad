import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ActualizarRolPermiso = () => {

    const [valueRol, setValueRol] = useState(null);
    const [inputValueRol, setInputValueRol] = useState('');
    const [rolesArray, setRolesArray] = useState([]);

    const [valueRolPermiso, setValueRolPermiso] = useState(null);
    const [inputValueRolPermiso, setInputValueRolPermiso] = useState('');
    const [rolesPermisosArray, setRolesPermisosArray] = useState([]);

    const [valueRolPermisoId, setValueRolPermisoId] = useState(null);
    const [inputValueRolPermisoId, setInputValueRolPermisoId] = useState('');
    const [rolesPermisosIdArray, setRolesPermisosIdArray] = useState([]);

    const [rolPermisoId, setRolPermisoId] = useState('');
    const [rolId, setRolId] = useState('');
    const [permisoId, setPermisoId] = useState('');

    const getRolId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/roles/listarRoles.php').then(function (response) {
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombreRol, value: response.data[x].Id });
            }
            setRolesArray(array);
        });
    }

    const getPermiso = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/permisos/listarPermisos.php').then(function (response) {
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombrePermiso, value: response.data[x].Id });
            }
            setRolesPermisosArray(array);
        });
    }

    const getRolPermisoId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/rol_permiso/listarRoles_Permisos.php').then(function (response) {
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].Id, value: response.data[x].Id });
            }
            setRolesPermisosIdArray(array);
        });
    }


    useEffect(() => {
        getRolId();
        getPermiso();
        getRolPermisoId();
    }, [])

    const rolPermisoIdChange = (v) => {
        setRolPermisoId(v.value);
    }

    const rolChange = (v) => {
        setRolId(v.value);
    }

    const rolPermisoChange = (v) => {
        setPermisoId(v.value)
    }

    const actualizarRolPermiso = () => {
        if (inputValueRolPermisoId == '' || inputValueRol === '' || inputValueRolPermiso === '') {
            toast.warning('Todos los Campos Son Obligatorios', { theme: "dark", position: "top-center", toastId: 'error1' });
        } else {

            let fData = new FormData();
            fData.append('Id', rolPermisoId);
            fData.append('IdPermiso', permisoId);
            fData.append('IdRol', rolId);

            axios.post('http://localhost/backend-usabilidad-main/userServices/rol_permiso/actualizarRol_Permiso.php', fData).then(function (response) {
                alert(response.data);
            });
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Actualizar Rol Permiso</label>
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueRolPermisoId}
                            onChange={(_, v) => rolPermisoIdChange(v)}
                            inputValue={inputValueRolPermisoId}
                            onInputChange={(_, v) => setInputValueRolPermisoId(v)}
                            options={rolesPermisosIdArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Rol Permiso" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueRol}
                            onChange={(_, v) => rolChange(v)}
                            inputValue={inputValueRol}
                            onInputChange={(_, v) => setInputValueRol(v)}
                            options={rolesArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Nuevo Rol" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueRolPermiso}
                            onChange={(_, v) => rolPermisoChange(v)}
                            inputValue={inputValueRolPermiso}
                            onInputChange={(_, v) => setInputValueRolPermiso(v)}
                            options={rolesPermisosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Nuevo Permiso" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarRolPermiso} color="primary" variant="contained">Actualizar Rol Permiso</Button>
                    </div>
                </div>


            </div>
        </Fragment>
    );
}

export default ActualizarRolPermiso;