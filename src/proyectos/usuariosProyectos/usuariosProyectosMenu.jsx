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

import InvitarUsuarios from "./invitarUsuarios.jsx";
import AsignarPeso from "./asignarPeso.jsx";

const UsuariosProyectosMenu = () => {

    const [valueRadios, setValueRadios] = useState('');
    const [contenido, setContenido] = useState('');

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
        console.log(e.target.value);

        if (e.target.value === 'asignarPeso') {
            setContenido(< AsignarPeso />);
        } else if (e.target.value === 'invitarUsuario') {
            setContenido(<InvitarUsuarios />);
        }
    }

    return (
        <Fragment>
            <div className="container |">
                <Paper elevation={8}>
                    <div className="row">
                        <div className="col-12 | col-md-4 | col-sm-12">
                            <Accordion >
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Usuarios Proyecto</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="asignarPeso" control={<Radio />} label="Asignar Peso Usuarios" />
                                            <FormControlLabel value="invitarUsuario" control={<Radio />} label="Invitar Usuario" />
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

export default UsuariosProyectosMenu;