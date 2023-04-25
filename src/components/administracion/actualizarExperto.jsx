import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ActualizarExperto = () => {

    const [nombre, setNombre] = useState('');
    const [curp, setCurp] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [apartado, setApartado] = useState('');

    const [valueExperto, setValueDocentes] = useState(null);
    const [inputValueExperto, setInputValueExperto] = useState('');
    const [arrayExperto, setArrayDocentes] = useState([]);

    const cargarExperto = (v) => {
        console.log(v);
    }

    const actualizarExperto = () => {
        if (nombre === '' || curp === '' || email === '' || telefono === '' || domicilio === '' || apartado === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row">
                    <div className="col-12 | col-md-8 | col-sm-12">
                        <FormGroup>
                            <Autocomplete
                                freeSolo
                                value={valueExperto}
                                onChange={(_, v) => { cargarExperto(v); }}
                                inputValue={inputValueExperto}
                                onInputChange={(_, v) => { setInputValueExperto(v); }}
                                options={arrayExperto}
                                renderInput={(params) => <TextField {...params} label="Seleccione Experto" />}
                            />
                        </FormGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setNombre(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setCurp(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="CURP" variant="outlined" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                    </div>
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setTelefono(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Telefono" variant="outlined" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setDomicilio(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Domicilio" variant="outlined" />
                    </div>
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField onChange={(e) => { setApartado(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Apartado" variant="outlined" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarExperto} variant="contained">Actualizar Datos</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ActualizarExperto;