import { Fragment, React, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const TableroProyectos = () => {

    const [proytectosArray, setProyectosArray] = useState([]);

    const getProyectos = () => {
        axios.get('http://localhost/backend-usabilidad-main/userServices/proyectos/listarResultadosGeneral.php').then(function (response) {
            console.log(response.data)
            setProyectosArray(response.data)
            /*  const array = [];
             for (let x = 0; x < response.data.length; x++) {
                 console.log(response.data[x].Id)
                 array.push({ label: response.data[x].Nombre + ' ' + response.data[x].Apellidos, value: response.data[x].Id });
             }
             setUsuariosArray(array); */
        });
    }


    useEffect(() => {
        getProyectos();
    }, [])


    return (
        <Fragment>
            <div className="container">
                <Paper elevation={6}>
                    <div className="row | mb-4 | mt-2| ml-4">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <label>Resultados de Evaluación de Proyectos</label>
                        </div>
                    </div>

                    <div className="row | mb-4| ml-4">
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

                                    {proytectosArray
                                        ? proytectosArray.map(
                                            (participacion, index) => (
                                                <Fragment key={index}>
                                                    <tr>
                                                        <td>{participacion.evaluador}</td>
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
                </Paper>
            </div>
        </Fragment>
    );
}



export default TableroProyectos;