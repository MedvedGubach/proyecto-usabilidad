import React, { Fragment, useState, } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import Typography from '@mui/material/Typography';
import { useEffect } from "react";

const EliminarRol = () => {

    const [valueRoles, setValueRoles] = useState(null);
    const [inputValueRoles, setInputValueRoles] = useState('');
    const [rolesArray, setRolesArray] = useState([]);


    const [rolId, setRolId] = useState('');

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

    useEffect(() => {
        getRolId();
    }, [])


    const actualizarGrupoChange = (v) => {
        setRolId(v.value);
    }

    const eliminarRol = () => {
        if (inputValueRoles === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/roles/eliminarRol.php';
            let fData = new FormData();
            fData.append('Id', rolId);

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
                        <label>Eliminar Rol</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueRoles}
                            onChange={(_, v) => actualizarGrupoChange(v)}
                            inputValue={inputValueRoles}
                            onInputChange={(_, v) => setInputValueRoles(v)}
                            options={rolesArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Rol" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={eliminarRol} color="error" variant="contained">Eliminar Rol</Button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default EliminarRol;