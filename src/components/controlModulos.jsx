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
import RegistrarCoordinador from "./registrarCoordinador";
import RegistroExperto from "./registroExperto";
import RegistrarDestinatario from "./registrarDestinatario";
import ActualizarCoordinador from "./actualizarCoordinador";
import ActualizarDestinatario from "./actualizarDestinatario";
import ActualizarExperto from "./actualizarExperto";
const ControlModulos = () => {

    const [valueRadios, setValueRadios] = useState('');
    const [contenido, setContenido] = useState('');

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
        console.log(e.target.value);

        if (e.target.value === 'coordinador') {
            setContenido(<RegistrarCoordinador />);
        } else if (e.target.value === 'experto') {
            setContenido(<RegistroExperto />);
        } else if (e.target.value === 'destinatario') {
            setContenido(<RegistrarDestinatario />);
        } else if (e.target.value === 'actualizarCoordinador') {
            setContenido(<ActualizarCoordinador />);
        } else if (e.target.value === 'actualizarDestinatario') {
            setContenido(<ActualizarDestinatario />);
        } else if (e.target.value === 'actualizarExperto') {
            setContenido(<ActualizarExperto />);
        }
    }



    return (
        <Fragment>
            <div className="container | app-content-accordions">
                <div className="row">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Registro Usuarios</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        /* value={value} */
                                        onChange={handleRadios}
                                    >
                                        <FormControlLabel value="coordinador" control={<Radio />} label="Coordinador" />
                                        <FormControlLabel value="experto" control={<Radio />} label="Experto" />
                                        <FormControlLabel value="destinatario" control={<Radio />} label="Destinatario" />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Actualizar Datos</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        onChange={handleRadios}
                                    >
                                        <FormControlLabel value="actualizarCoordinador" control={<Radio />} label="Actualizar Coordinador" />
                                        <FormControlLabel value="actualizarDestinatario" control={<Radio />} label="Actualizar Experto" />
                                        <FormControlLabel value="actualizarExperto" control={<Radio />} label="Actualizar Destinatario" />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>
                    </div>


                </div>
            </div>

            <div className="container | ">
                <Paper elevation={4}>
                    <div className="row">
                        <div className="col-12 | col-md-12 | col-sm-12">
                            {contenido}
                        </div>
                    </div>
                </Paper>

            </div>
        </Fragment>
    );
}

export default ControlModulos;