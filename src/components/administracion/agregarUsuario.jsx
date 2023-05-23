import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../css/styles.css'

const AgregarUsuario = () => {

    const [valueRoles, setValueRoles] = useState(null);
    const [inputValueRoles, setInputValueRoles] = useState('');
    const [rolesArray, setRolesArray] = useState([]);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [nip, setNip] = useState('');
    const [confNip, setConfNip] = useState('');

    const getRolId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/roles/listarRoles.php').then(function (response) {
            console.log(response.data);
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                array.push({ label: response.data[x].nombreRol, value: response.data[x].Id });
            }
            setRolesArray(array);
        });
    }

    useEffect(() => {
        getRolId();
    }, [])

    const rolChange = (v) => {
        console.log(v);
        setRol(v.label);
    }


    const agregarUsuario = () => {
        if (nombre === '' || apellidos === '' || telefono === '' || email === '' || rol === '' || confNip === '' || nip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const url = 'http://localhost/backend-usabilidad-main/userServices/usuarios/agregarUsuario.php';
            let fData = new FormData();
            fData.append('nombre', nombre);
            fData.append('apellidos', apellidos);
            fData.append('telefono', telefono);
            fData.append('correo', email);
            fData.append('rolUsuario', rol);
            fData.append('password', nip);
            fData.append('confirmarPassword', confNip);

            axios.post(url, fData).then(response => alert(response.data)).catch(error => alert(error));
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container">

                <div className="row | mb-2 | mt-2">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <label>Agregar Usuario</label>
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
                        <Autocomplete
                            freeSolo
                            value={valueRoles}
                            onChange={(_, v) => rolChange(v)}
                            inputValue={inputValueRoles}
                            onInputChange={(_, v) => setInputValueRoles(v)}
                            options={rolesArray}
                            renderInput={(params) => <TextField {...params} label="Seleccione Rol" />}
                        />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <TextField type="password" fullWidth onChange={(e) => { setConfNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Confirmar NIP" variant="outlined" />
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 | col-md-6 | col-sm-12">
                        <Button onClick={agregarUsuario} variant="contained">Registrar Usuario {/* Coordinador */}</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default AgregarUsuario;