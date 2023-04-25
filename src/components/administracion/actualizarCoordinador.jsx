import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ActualizarCoordinador = () => {

    const [nuevaArea, setNuevaArea] = useState('');
    const [nuevoCodigo, setNuevoCodigo] = useState('');
    const [nuevoNip, setNuevoNip] = useState('');


    const [valueCoordinador, setValueDocentes] = useState(null);
    const [inputValueCoordinador, setInputValueCoordinador] = useState('');
    const [arrayCoordinador, setArrayDocentes] = useState([]);

    const cargarCoord = () => {

    }

    const actualizarDatos = () => {
        if (nuevaArea === '' || nuevoCodigo === '' || nuevoNip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {

        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueCoordinador}
                            onChange={(_, v) => { cargarCoord(v); }}
                            inputValue={inputValueCoordinador}
                            onInputChange={(_, v) => { setInputValueCoordinador(v); }}
                            options={arrayCoordinador}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Coordinador" />}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNuevaArea(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nueva Área" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNuevoCodigo(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nuevo Código" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNuevoNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nuevo NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button fullWidth onClick={actualizarDatos} variant="contained">Actualizar Datos</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default ActualizarCoordinador;