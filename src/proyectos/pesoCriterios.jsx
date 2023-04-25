import React, { Fragment, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";

const PesoCriterios = () => {

    const [criterio, setCriterio] = useState('');
    const [peso, setPeso] = useState('');

    const handleChangeCriterio = (event) => {
        setCriterio(event.target.value);
        console.log(event.target.value);
    };

    const handleChangePeso = (event) => {
        setPeso(event.target.value);
        console.log(event.target.value);
    };

    const asignarPeso = () => {
        if (criterio === '' || peso === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            toast.success('Peso Asignado', { theme: "dark", position: "top-center", toastId: 'success1' });
        }
    }


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row | mb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={criterio}
                                label="Criterio"
                                onChange={handleChangeCriterio}
                            >
                                <MenuItem value={'Interfaz'}>Interfaz</MenuItem>
                                <MenuItem value={'Usabilidad'}>Usabilidad</MenuItem>
                                <MenuItem value={'Intuitivo'}>Intuitivo</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-12 | col-sm-6 | col-sm-12S">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={peso}
                                label="Criterio"
                                onChange={handleChangePeso}
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={asignarPeso} variant="contained">Asignar Peso</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PesoCriterios;