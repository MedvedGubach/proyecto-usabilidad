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

import RegistrarCoordinador from "./agregarUsuario";
import RegistroExperto from "./actualizarUsuario";
import RegistrarDestinatario from "./eliminarUsuario";
import RestablecerContraseña from "./restablecerContraseña";

const ControlModulos = () => {

    const [valueRadios, setValueRadios] = useState('');
    const [contenido, setContenido] = useState('');
    const [expandedRegistro, setExpandedRegistro] = useState(false);
    const [expandedActualizar, setExpandedActualizar] = useState(false);

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
        console.log(e.target.value);

        if (e.target.value === 'registrar') {
            setContenido(<RegistrarCoordinador />);
        } else if (e.target.value === 'actualizar') {
            setContenido(<RegistroExperto />);
        } else if (e.target.value === 'eliminar') {
            setContenido(<RegistrarDestinatario />);
        } else if (e.target.value === 'actualizarpwd') {
            setContenido(<RestablecerContraseña />);
        }
    }

    return (
        <Fragment>
            <div className="container |">
                <Paper elevation={8}>
                    <div className="row">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <Accordion expanded={expandedRegistro} onClick={() => { setExpandedRegistro(true); setExpandedActualizar(false); }}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Control Usuarios Usuarios</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            /* value={value} */
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="registrar" control={<Radio />} label="Registrar Usuario" />
                                            <FormControlLabel value="actualizar" control={<Radio />} label="Actualizar Usuario" />
                                            <FormControlLabel value="eliminar" control={<Radio />} label="Eliminar Usuario" />
                                            <FormControlLabel value="actualizarpwd" control={<Radio />} label="Actualizar Contraseña" />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div className="col-12 | col-md-8 | col-sm-12">
                            {contenido}
                        </div>
                    </div>
                </Paper>
            </div>
        </Fragment>
    );
}

export default ControlModulos;