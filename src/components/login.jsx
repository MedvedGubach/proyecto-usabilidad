import { Fragment, React, useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [nip, setNip] = useState('');

    useEffect(() => {
        sessionStorage.clear();
    }, [])


    const authUsuario = (e) => {
        e.preventDefault();
        if (email === '' || nip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else {
            const json = { email: email, password: nip }
            const login = JSON.stringify(json);
            console.log(JSON.stringify(json))
            axios.post('http://localhost/backend-usabilidad-main/userServices/login.php', login).then(function (response) {
                console.log(response);
                if (response.data.message === 'Successful login.') {
                    sessionStorage.setItem('token', response.data.jwt);
                    sessionStorage.setItem('rol', response.data.rol);
                    sessionStorage.setItem('id', response.data.id);
                    const split = response.data.jwt.split('.');
                    console.log(split);
                    console.log('token', response.data.jwt);
                    toast.success('Inicio de Sesión Exitoso', { theme: "dark", position: "top-center", toastId: 'success1' });
                    navigate("/Inicio");
                }
            }).catch(error => {
                console.log(error.response.status)
                if (error.response.status >= 400 && error.response.status < 500) {
                    toast.warning('Correo o NIP Incorrectos', { theme: "dark", position: "top-center", toastId: 'warning2' });
                }
            });
        }
    }


    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container |">
                <Paper elevation={4}>
                    <div className="row | mb-2 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Inicio Sesión</label>
                        </div>
                    </div>

                    <div className="row | mb-2 | ml-4">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setEmail(e.target.value); }} id="outlined-basic" label="E-mail" variant="outlined" />
                        </div>
                    </div>

                    <div className="row | mb-2 | ml-4">
                        <div className="col-12 | col-md-3 | col-sm-12 |">
                            <TextField fullWidth onChange={(e) => { setNip(e.target.value); }} id="outlined-basic" label="NIP" variant="outlined" type="password" />
                        </div>
                    </div>


                    <div className="row | mt-4 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12 |">
                            <Button onClick={authUsuario} variant="contained">Iniciar Sesión</Button>
                        </div>
                    </div>

                    <div className="row | mt-4 | ml-4">
                        <div className="col-12 | col-md-1 | col-sm-12 | mb-4">
                            <a href="/Registrarse">Registrate</a>
                        </div>

                        <div className="col-12 | col-md-2 | col-sm-12 | mb-4">
                            <a href="/Recuperar-NIP">¿Olvidaste tu NIP?</a>
                        </div>
                    </div>


                </Paper>
            </div>
        </Fragment>
    );
}

export default Login;