import { Fragment, React, useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState('');
    const [nip, setNip] = useState('');

    const authUsuario = (e) => {
        e.preventDefault();
        if (codigo === '' || nip === '') {
            toast.warning('Todos los campos son obligatorios', { theme: "dark", position: "top-center", toastId: 'warning1' });
        } else if (codigo === 'admin' && nip === '12345') {
            navigate("Inicio");
        }else{
            toast.warning('Código o Contraseña Incorrectos', { theme: "dark", position: "top-center", toastId: 'warning2' });
        }
    }

    return (
        <Fragment>
            <ToastContainer></ToastContainer>
            <div className="container | app-content">
                <Paper elevation={4}>

                    <div className="row">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Inicio Sesión</label>
                        </div>
                    </div>

                    <div className="row | ">
                        <div className="col-12 | col-md-6 | col-sm-12 |">
                            <TextField onChange={(e) => { setCodigo(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="Código" variant="outlined" />
                        </div>
                    </div>
                    <div className="row | ">
                        <div className="col-12 | col-md-6 | col-sm-12 |">
                            <TextField onChange={(e) => { setNip(e.target.value); console.log(e.target.value) }} id="outlined-basic" label="NIP" variant="outlined" type="password" />
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