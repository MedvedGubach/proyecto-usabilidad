import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const ActualizarGrupo = () => {

    const [valueGrupos, setValueUsuarios] = useState(null);
    const [inputvalueGrupos, setInputValueGrupos] = useState('');
    const [gruposArray, setGruposArray] = useState([]);

    const grupos = [
        { label: 'Grupo Test 1', id: 1994 },
        { label: 'Grupo Test 2', id: 1972 },
        { label: 'Grupo Test 3', id: 1974 },
        { label: 'Grupo Test 4', id: 2008 },
        { label: 'Grupo Test 5', id: 1957 },
        { label: "Grupo Test 6", id: 1993 },
        { label: 'Grupo Test 7', id: 1994 },
    ];

    const [grupoId, setGrupoId] = useState('');
    const [nuevoNombreGrupo, setNuevoNombreGrupo] = useState('');
    const [nuevoModerador, setNuevoModerador] = useState('');


    const getGrupoId = () => {
        const url = 'http://localhost/backend-usabilidad-main/userServices/grupos/buscarPorId.php';
        axios.get(url).then(response => { setGruposArray(response.data); alert(response.data) }).catch(error => alert(error));
    }

    useEffect(() => {
        getGrupoId();
    }, [])


    const actualizarGrupoChange = (v) => {
        setGrupoId(v.id);
    }


    const actualizarGrupo = () => {
        if (inputvalueGrupos === '' && nuevoNombreGrupo === '' && nuevoModerador === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/grupos/actualizarGrupo.php';
            let fData = new FormData();
            fData.append('Id', grupoId);
            fData.append('nombreGrupo', nuevoNombreGrupo);
            fData.append('idModerador', nuevoModerador);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Grupo Actualizado Exitosamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueGrupos}
                            onChange={(_, v) => actualizarGrupoChange(v)}
                            inputValue={inputvalueGrupos}
                            onInputChange={(_, v) => setInputValueGrupos(v)}
                            options={grupos}
                            renderInput={(params) => <TextField {...params} label="Seleccione Grupo" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNuevoNombreGrupo(v.target.value); console.log(v.target.value) }} id="outlined-basic" label="Nombre Actualizado" variant="outlined" />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNuevoModerador(v.target.value); console.log(v.target.value) }} id="outlined-basic" label="Moderador Actualizado" variant="outlined" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarGrupo} color="primary" variant="contained">Actualizar Grupo</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ActualizarGrupo;