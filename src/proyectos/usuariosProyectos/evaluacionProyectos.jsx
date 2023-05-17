import React, { Fragment } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EvaluacionProyectos = () => {

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


    return (
        <Fragment>
            <div className="container">
                <div className="row">
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
            </div>
        </Fragment>
    );
}



export default EvaluacionProyectos;