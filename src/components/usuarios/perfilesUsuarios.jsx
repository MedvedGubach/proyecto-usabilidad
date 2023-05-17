import { Fragment, React, useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { deepOrange, deepPurple } from '@mui/material/colors';


const PerfilesUsuarios = () => {

    const [valueUsuario, setValueUsuario] = useState(null);
    const [inputValueUsuarios, setInputValueUsuarios] = useState('');
    const [usuariosArray, setUsuariosArray] = useState([]);

    const [idUsuario, setIdUsuario] = useState('');
    const [nombre, setNombre] = useState('');

    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [mostrarTabla, setMostrarTabla] = useState(false);

    function createData(name, interfaz, usabilidad, intuitivo, accesibilidad) {
        return { name, interfaz, usabilidad, intuitivo, accesibilidad };
    }

    const rows = [
        createData('Proyecto 1', 10, 6.0, 10, 4.0,),
        createData('Proyecto 2', 10, 9.0, 10, 4.3,),
        createData('Proyecto 3', 10, 10, 10, 6.0,),
        createData('Proyecto 4', 10, 3.7, 10, 4.3,),
        createData('Proyecto 5', 10, 10, 10, 3.9,),
    ];

    const getUsuarioId = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/usuarios/listarUsuarios.php').then(function (response) {
            console.log(response.data);
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
    }

    useEffect(() => {
        getUsuarioId();
    }, [])

    return (
        <Fragment>
            <div className="container">
                <Paper elevation={6}>
                    <div className="row | mb-4">
                        <div className="col-12 | col-md-6 | col-sm-12">
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
                        <div className="row | mb-4">
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
                        <div className="row | mb-4">
                            <div className="col-12 | col-md-8 | col-sm-12">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Proyecto</TableCell>
                                                <TableCell align="right">Interfaz</TableCell>
                                                <TableCell align="right">Usabilidad</TableCell>
                                                <TableCell align="right">Intuitivo</TableCell>
                                                <TableCell align="right">Accesibilidad</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.interfaz}</TableCell>
                                                    <TableCell align="right">{row.usabilidad}</TableCell>
                                                    <TableCell align="right">{row.intuitivo}</TableCell>
                                                    <TableCell align="right">{row.accesibilidad}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                        : null}
                </Paper>

            </div>
        </Fragment >
    );
}

export default PerfilesUsuarios;