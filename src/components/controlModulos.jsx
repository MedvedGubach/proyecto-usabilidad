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



const ControlModulos = () => {

    const [valueRadios, setValueRadios] = useState('');

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
    }

    return (
        <Fragment>
            <div className="container | app-content">
                <div className="row">
                    <div className="col-12 | col-md-4 | col-sm-12">
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Control Acceso</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <FormLabel id="demo-controlled-radio-buttons-group">Apartados</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        /* value={value} */
                                        onChange={handleRadios}
                                    >
                                        <FormControlLabel value="apartado1" control={<Radio />} label="Apartado 1" />
                                        <FormControlLabel value="apartado2" control={<Radio />} label="Apartado 2" />
                                        <FormControlLabel value="apartado3" control={<Radio />} label="Apartado 3" />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ControlModulos;