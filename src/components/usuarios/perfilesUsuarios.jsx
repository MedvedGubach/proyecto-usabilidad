import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";


const PerfilesUsuarios = () => {

    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');
    const rol = sessionStorage.getItem('rol');

    useEffect(() => {
        if (rol != 'Administrador' && rol != 'Coordinador' && rol != 'Secretario') {
            navigate("/Inicio");
        } else if (token == null) {
            navigate("/");
        }
    }, [])

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [idUsuario, setIdUsuario] = useState('');
    const [nombre, setNombre] = useState('');
    const [participacionesArray, setParticipacionesArray] = useState([]);

    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            const array = [];
            for (let x = 0; x < response.data.length; x++) {
                console.log(response.data[x].Id)
                array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
            }
            setUsuariosArray(array);
        });
    }

    const actualizarUsuarioChange = (v) => {
        console.log(v);
        setIdUsuario(v.value);
        setNombre(v.label);
        setMostrarContenido(true);
        setMostrarTabla(true);
        console.log('participaciones array', participacionesArray)

        const url = 'http://localhost/backend-usabilidad-main/userServices/proyectos/listarParticipaciones.php';
        let fData = new FormData();

        fData.append('id', v.value);
        axios.post(url, fData).then(response => {
            console.log(response.data)
            setParticipacionesArray(response.data);
        }).catch(error => alert(error));
    }

    const eliminarEvaluacion = (v) => {
        console.log(v);
    }

    useEffect(() => {
        getUsuarioId();
    }, [])

    return (
        <Fragment>
            <div className="container">
                <Paper elevation={6}>

                    <div className="row | mb-2 | mt-2 | ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Perfiles de Usuario</label>
                        </div>
                    </div>

                    <div className="row | mb-4 | ml-4">
                        <div className="col-12 | col-md-6 | col-sm-12 | mt-4">
                            <Autocomplete
                                freeSolo
                                value={valueUsuario}
                                onChange={(_, v) => actualizarUsuarioChange(v)}
                                inputValue={inputValueUsuarios}
                                onInputChange={(_, v) => { setInputValueUsuarios(v); setMostrarContenido(false); setMostrarTabla(false); }}
                                options={usuariosArray}
                                renderInput={(params) => <TextField {...params} label="Buscar Usuario" />}
                            />
                        </div>
                    </div>

                    {mostrarContenido ?
                        <div className="row | mb-4 | ml-4">
                            <div className=" col-12 | col-md-1 | col-sm-12 |">
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>{idUsuario}</Avatar>
                            </div>
                            <div className=" col-12 | col-md-3 | col-sm-12">
                                <label>Nombre Usuario: {nombre}</ label>
                            </div>

                            <div className=" col-12 | col-md-3 | col-sm-12">
                                <label>Proyectos en los que participó:</ label>
                            </div>
                        </div>
                        : null}


                    {mostrarTabla ?
                        <div className="row | mb-4 | ml-4">
                            <div className='col-12 | col-md-8 | mb-4 | table-wrapper-scroll-y my-custom-scrollbar'>
                                <table className="table | table table-bordered table-striped mb-0 ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Evaluador</th>
                                            <th scope="col">Nombre Proyecto</th>
                                            <th scope="col">Interfaz</th>
                                            <th scope="col">Usabilidad</th>
                                            <th scope="col">Intuitivo</th>
                                            <th scope="col">Accesibilidad</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {participacionesArray
                                            ? participacionesArray.map(
                                                (participacion, index) => (
                                                    <Fragment key={index}>
                                                        <tr>
                                                            <td> {`${participacion.evaluador} - ${nombre}`} </td>
                                                            <td> {participacion.nombre_proyecto} </td>
                                                            <td> {participacion.interfaz} </td>
                                                            <td> {participacion.usabilidad} </td>
                                                            <td> {participacion.intuitivo} </td>
                                                            <td> {participacion.accesibilidad} </td>
                                                        </tr>
                                                    </Fragment>
                                                )
                                            )
                                            : ""}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        : null}
                </Paper>

            </div>
        </Fragment >
    );
}

export default PerfilesUsuarios;