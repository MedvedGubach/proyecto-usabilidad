import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ActualizarDestinatario = () => {

    const [nombre, setNombre] = useState('');
    const [curp, setCurp] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [domicilio, setDomicilio] = useState('');

    const [valueDestinatario, setValueDocentes] = useState(null);
    const [inputValueDestinatario, setInputValueDestinatario] = useState('');
    const [arrayDestinatario, setArrayDocentes] = useState([]);

    const cargarExperto = (v) => {
        console.log(v);
    }

    const actualizarDestinatario = () => {
        if (nombre === '' || curp === '' || email === '' || telefono === '' || domicilio === '') {
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
                                value={valueDestinatario}
                                onChange={(_, v) => { cargarExperto(v); }}
                                inputValue={inputValueDestinatario}
                                onInputChange={(_, v) => { setInputValueDestinatario(v); }}
                                options={arrayDestinatario}
                                renderInput={(params) => <TextField {...params} label="Seleccione Destinatario" />}
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
                        <Button onClick={actualizarDestinatario} variant="contained">Actualizar Datos</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ActualizarDestinatario;