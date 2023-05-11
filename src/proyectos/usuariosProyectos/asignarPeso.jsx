import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const AsignarPeso = () => {

    const [valueUsuarios, setValueUsuarios] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [valuePeso, setValuePeso] = useState(null);
    const [inputValuePeso, setInputValuePeso] = useState('');
    const [pesoArray, setPesoArray] = useState([]);

    const [usuarioId, seTUsuarioId] = useState('');
    const [pesoId, setPesoId] = useState('');

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

    const getPesoId = () => {
        /* axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setPesoArray(array);
        }); */
    }



    const usuarioChange = (v) => {
        seTUsuarioId(v.value);
    }

    const proyectoChange = (v) => {

    }

    const invitarUsuario = () => {
        if (inputValuePeso === '' || inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {

        }
    }

    useEffect(() => {
        getUsuarioId();
        getPesoId();
    }, [])


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Asignar Peso</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuarios}
                            onChange={(_, v) => usuarioChange(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuariosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Usuarios" />}
                        />
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valuePeso}
                            onChange={(_, v) => proyectoChange(v)}
                            inputValue={inputValuePeso}
                            onInputChange={(_, v) => setInputValuePeso(v)}
                            options={pesoArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Peso" />}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={invitarUsuario} color="primary" variant="contained">Asignar Peso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AsignarPeso;