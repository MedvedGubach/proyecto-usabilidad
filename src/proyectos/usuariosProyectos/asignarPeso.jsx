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

    const [usuarioId, seTUsuarioId] = useState('');
    const [pesoId, setPesoId] = useState('');

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/roles/listarRoles.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].nombreRol, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        });
    }


    const usuarioChange = (v) => {
        console.log(v)
        seTUsuarioId(v.label);
    }

    const asignarPeso = () => {
        if (pesoId === '' || inputValueUsuarios === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/proyectos/agregarPeso.php';
            let fData = new FormData();
            fData.append('tipo_usuario', usuarioId);
            fData.append('peso', pesoId);

            axios.post(url, fData).then(response => {
                if (response.data == 'Peso agregado correctamente') {
                    toast.success('Peso agregado correctamente', { theme: "dark", position: "top-center", toastId: 'success1' });
                } else {
                    toast.error('Error al agregar el peso', { theme: "dark", position: "top-center", toastId: 'error1' });
                }

            }).catch(error => alert(error));
        }
    }

    useEffect(() => {
        getUsuarioId();
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
                        <TextField onChange={(v) => { setPesoId(v.target.value); console.log(v.target.value); }} InputProps={{ inputProps: { min: 0, max: 10 } }} fullWidth id="outlined-number" label="Number" type="number" InputLabelProps={{ shrink: true, }} />
                    </div>
                </div>

                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={asignarPeso} color="primary" variant="contained">Asignar Peso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AsignarPeso;