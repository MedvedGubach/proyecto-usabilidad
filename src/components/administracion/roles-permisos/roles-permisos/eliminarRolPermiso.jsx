import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const EliminarRolPermiso = () => {


    const [valueRolPermiso, setValueRolPermiso] = useState(null);
    const [inputValueRolPermiso, setInputValueRolPermiso] = useState('');
    const [rolesPermisosArray, setRolesPermisosArray] = useState([]);

    const [rolPermisoId, setRolPermiso] = useState('');




    const getRolPermisoId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/rol_permiso/listarRoles_Permisos.php').then(function (response) {
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].Id, value: response.data[x].Id });
            }
            setRolesPermisosArray(array);
        });
    }


    useEffect(() => {
        getRolPermisoId();
    }, [])


    const rolPermisoChange = (v) => {
        console.log(v)
        setRolPermiso(v.value)
    }

    const eliminarRolPermiso = () => {
        if (inputValueRolPermiso === '') {
            toast.warning('Todos los Campos Son Obligatorios', { theme: "dark", position: "top-center", toastId: 'error1' });
        } else {
            let fData = new FormData();
            fData.append('Id', rolPermisoId);

            axios.post('http://localhost/backend-usabilidad-main/userServices/rol_permiso/eliminarRol_Permiso.php', fData).then(function (response) {
                alert(response.data);
                getRolPermisoId();
            });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Eliminar Rol Permiso</label>
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
                            renderInput={(params) => <TextField {...params} label="Seleccione un Permiso" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={eliminarRolPermiso} color="error" variant="contained">Eliminar Rol Permiso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EliminarRolPermiso;