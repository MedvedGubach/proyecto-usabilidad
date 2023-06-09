import React, { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EliminarGrupo = () => {

    const [valueGrupos, setValueUsuarios] = useState(null);
    const [inputvalueGrupos, setInputValueGrupos] = useState('');
    const [gruposArray, setGruposArray] = useState([]);


    const getGrupoId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/grupos/listarGrupos.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombreGrupo, value: response.data[x].Id });
            }
            setGruposArray(array);
        });
    }

    useEffect(() => {
        getGrupoId();
    }, [])

    const [grupoEliminar, setGrupoEliminar] = useState('');

    const eliminarGrupoChange = (v) => {
        setGrupoEliminar(v.value);
        console.log(v.value);
    }

    const eliminarGrupo = () => {
        if (inputvalueGrupos === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/grupos/eliminarGrupo.php';
            let fData = new FormData();

            fData.append('Id', grupoEliminar);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
            toast.success('Grupo Eliminado Exitosamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>

            <div className="container">

                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Eliminar Grupo</label>
                    </div>
                </div>

                <div className="row | mb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueGrupos}
                            onChange={(_, v) => eliminarGrupoChange(v)}
                            inputValue={inputvalueGrupos}
                            onInputChange={(_, v) => setInputValueGrupos(v)}
                            options={gruposArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Grupo" />}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={eliminarGrupo} color="warning" variant="contained">Elimnar Grupo</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default EliminarGrupo;