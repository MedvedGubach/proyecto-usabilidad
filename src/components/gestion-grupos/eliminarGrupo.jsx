import React, { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";

const EliminarGrupo = () => {

    const [valueGrupos, setValueUsuarios] = useState(null);
    const [inputvalueGrupos, setInputValueGrupos] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const grupós = [
        { label: 'Grupo Test 1', id: 1994 },
        { label: 'Grupo Test 2', id: 1972 },
        { label: 'Grupo Test 3', id: 1974 },
        { label: 'Grupo Test 4', id: 2008 },
        { label: 'Grupo Test 5', id: 1957 },
        { label: "Grupo Test 6", id: 1993 },
        { label: 'Grupo Test 7', id: 1994 },
    ];

    const [grupoEliminar, setGrupoEliminar] = useState('');

    const eliminarGrupoChange = (v) => {
        setGrupoEliminar(v.id);
        console.log(v.id);
    }

    const eliminarGrupo = () => {
        if (inputvalueGrupos === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Grupo Actualizado Exitosamente', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>

            <div className="container">
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueGrupos}
                            onChange={(_, v) => eliminarGrupoChange(v)}
                            inputValue={inputvalueGrupos}
                            onInputChange={(_, v) => setInputValueGrupos(v)}
                            options={grupós}
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