import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";

const CrearGrupo = () => {

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [nombreGrupo, setNombreGrupo] = useState('');
    const [moderador, setModerador] = useState('');


    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        });
    }

    useEffect(() => {
        getUsuarioId();
    }, [])


    const actualizarUsuarioChange = (v) => {
        setModerador(v.value);
    }


    const crearGrupo = () => {
        if (nombreGrupo === '' || moderador === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/grupos/agregarGrupo.php';
            let fData = new FormData();

            fData.append('nombreGrupo', nombreGrupo);
            fData.append('idModerador', moderador);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Grupo Creado Exitosamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>

            <div className="container">

                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Crear Grupo</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(v) => { setNombreGrupo(v.target.value); console.log(v.target.value) }} id="outlined-basic" label="Nombre Grupo" variant="outlined" />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuario}
                            onChange={(_, v) => actualizarUsuarioChange(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuariosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Moderador" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={crearGrupo} color="primary" variant="contained">Crear Grupo</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CrearGrupo;