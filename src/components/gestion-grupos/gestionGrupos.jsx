import React, { Fragment, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';

import CrearGrupo from "./crearGrupo";
import ActualizarGrupo from "./actualizarGrupo";
import EliminarGrupo from "./eliminarGrupo";
import AgregarUsuario from "./agregarUsuario";
import EliminarUsuario from "./eliminarUsuario";
import ActualizarUsuarioGrupo from "./actualizarUsuarioGrupo";

const ControlModulos = () => {
    const [valueRadios, setValueRadios] = useState('');
    const [contenido, setContenido] = useState('');
    const [expandedRegistro, setExpandedRegistro] = useState(false);
    const [expandedActualizar, setExpandedActualizar] = useState(false);

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
        console.log(e.target.value);

        if (e.target.value === 'creargrupo') {
            setContenido(<CrearGrupo></CrearGrupo>);
        } else if (e.target.value === 'actualizargrupo') {
            setContenido(<ActualizarGrupo></ActualizarGrupo>);
        } else if (e.target.value === 'eliminargrupo') {
            setContenido(<EliminarGrupo></EliminarGrupo>);
        } else if (e.target.value === 'agregarusuariogrupo') {
            setContenido(<AgregarUsuario></AgregarUsuario>);
        } else if (e.target.value === 'eliminarusuariodegrupo') {
            setContenido(<EliminarUsuario></EliminarUsuario>);
        } else if (e.target.value === 'actualizarusuariogrupo') {
            setContenido(<ActualizarUsuarioGrupo></ActualizarUsuarioGrupo>);
        } else if (e.target.value === 'eliminarregistro') {
            setContenido();
        }
    }

    return (
        <Fragment>
            <div className="container |">
                <Paper elevation={8}>
                    <div className="row">
                        <div className="col-12 | col-md-2 | col-sm-12">
                            <Accordion expanded={expandedRegistro} onClick={() => { setExpandedRegistro(true); setExpandedActualizar(false); }}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Registro Grupos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            /* value={value} */
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="creargrupo" control={<Radio />} label="Crear Grupo" />
                                            <FormControlLabel value="actualizargrupo" control={<Radio />} label="Actualizar Grupo" />
                                            <FormControlLabel value="eliminargrupo" control={<Radio />} label="Eliminar Grupo" />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expandedActualizar} onClick={() => { setExpandedActualizar(true); setExpandedRegistro(false); }}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Usuarios Grupos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="agregarusuariogrupo" control={<Radio />} label="Actualizar Coordinador" />
                                            <FormControlLabel value="actualizarusuariogrupo" control={<Radio />} label="Actualizar Experto" />
                                            <FormControlLabel value="eliminarusuariodegrupo" control={<Radio />} label="Actualizar Destinatario" />
                                            <FormControlLabel value="eliminarregistro" control={<Radio />} label="Actualizar Destinatario" />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div className="col-12 | col-md-10 | col-sm-12">
                            {contenido}
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}

export default ControlModulos;