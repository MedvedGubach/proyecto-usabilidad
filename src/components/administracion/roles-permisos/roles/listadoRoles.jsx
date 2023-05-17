import React, { Fragment, useState, } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

const ActualizarRol = () => {

    const [rolesArray, setRolesArray] = useState([]);
    const [permisosArray, setPermisosArray] = useState([]);

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


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Listado Roles</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <div className='col-12 col-md-6 | table-wrapper-scroll-y my-custom-scrollbar'>
                            <table className="table | table table-bordered table-striped mb-0 ">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre Rol</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {rolesArray
                                        ? rolesArray.map(
                                            (rol, index) => (
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td> {rol.value} </td>
                                                        <td> {rol.label} </td>
                                                    </tr>
                                                </Fragment>
                                            )
                                        )
                                        : ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <div className='col-12 col-md-6 | table-wrapper-scroll-y my-custom-scrollbar'>
                            <table className="table | table table-bordered table-striped mb-0 ">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre Permiso</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {permisosArray
                                        ? permisosArray.map(
                                            (permiso, index) => (
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td> {permiso.value} </td>
                                                        <td> {permiso.label} </td>
                                                    </tr>
                                                </Fragment>
                                            )
                                        )
                                        : ""}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default ActualizarRol;