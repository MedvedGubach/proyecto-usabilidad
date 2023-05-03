import { Fragment, React, useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const ActualizarUsuario = () => {

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [idUsuario, setIdUsuario] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
              console.log(response.data[x].Id)
                array.push({label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id});
            }
           setUsuariosArray(array);
        });
    }

    useEffect(() => {
        getUsuarioId();
    }, [])


    const actualizarUsuario = () => {
        if (inputValueUsuarios === '' || nombre === '' || apellidos === '' || telefono === '' || email === '' || rol === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/actualizarUsuario.php';
            let fData = new FormData();

            fData.append('Id', idUsuario);
            fData.append('nombre', nombre);
            fData.append('apellidos', apellidos);
            fData.append('telefono', telefono);
            fData.append('correo', email);
            fData.append('rolUsuario', rol);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    const actualizarUsuarioChange = (v) => {
        setIdUsuario(v.value);
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Autocomplete
                            freeSolo
                            value={valueUsuario}
                            onChange={(_, v) => actualizarUsuarioChange(v)}
                            inputValue={inputValueUsuarios}
                            onInputChange={(_, v) => setInputValueUsuarios(v)}
                            options={usuariosArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione un Usuario" />}
                        />
                    </div>
                </div>
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setNombre(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Nombre" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setApellidos(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Apellidos" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4 | pt-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setTelefono(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Telefono" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setEmail(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="E-Mail" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField fullWidth onChange={(e) => { setRol(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Rol" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={actualizarUsuario} variant="contained">Actualizar Usuario</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ActualizarUsuario;