import { Fragment, React, useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('')
    const [nip, setNip] = useState('');

    const authUsuario = (e) => {
        e.preventDefault();
        if (nip === '' || nombre === '' || apellidos === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            //toast.warning('Código o Contraseña Incorrectos', { theme: "dark", position: "top-center", toastId: 'warning2' });

            let fData = new FormData();
            fData.append('Id', id);
            fData.append('email', email);
            fData.append('Nombre', nombre);
            fData.append('Apellidos', apellidos);
            fData.append('password', nip);
            
            console.log(fData);

            axios.post('http://localhost/backend-usabilidad-main/userServices/login.php', fData).then(function (response) {
                console.log(response);
            });
        }
    }


    useEffect(() => {

    }, []);


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container |">
                <Paper elevation={4}>
                    <div className="row | mb-2">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Inicio Sesión</label>
                        </div>
                    </div>

                    <div className="row | mb-2">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setId(e.target.value); }} id="outlined-basic" label="ID" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-2">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setEmail(e.target.value); }} id="outlined-basic" label="E-mail" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-2">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setNombre(e.target.value); }} id="outlined-basic" label="Nombre" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-2">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setApellidos(e.target.value); }} id="outlined-basic" label="Apellidos" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | mb-2">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setNip(e.target.value); }} id="outlined-basic" label="NIP" variant="outlined" type="password" />
                        </div>
                    </div>
                    <div className="row | ">
                        <div className="col-12 | col-md-4 | col-sm-12 |">
                            <Button onClick={authUsuario} variant="contained">Iniciar Sesión</Button>
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Login;