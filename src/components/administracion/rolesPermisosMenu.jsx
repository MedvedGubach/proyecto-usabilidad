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

import AgregarRol from "./roles-permisos/roles/agregarRol";
import ACtualizarRol from "./roles-permisos/roles/actualizarRol";
import EliminarRol from "./roles-permisos/roles/eliminarRol";
import ListadoRoles from "./roles-permisos/roles/listadoRoles";

import AgregarRolPermiso from "./roles-permisos/roles-permisos/agregarRolPermiso";
import ActualizarRolPermiso from "./roles-permisos/roles-permisos/actualizarRolPermiso";
import EliminarRolPermiso from "./roles-permisos/roles-permisos/eliminarRolPermiso";

import AgregarPermiso from "./roles-permisos/permisos/agregarPermiso";
import ActualizarPermiso from "./roles-permisos/permisos/actualizarPermiso";
import EliminarPermiso from "./roles-permisos/permisos/eliminarPermiso";

const PermisosUsuario = () => {

    const [valueRadios, setValueRadios] = useState('');
    const [contenido, setContenido] = useState('');
    const [expandedRegistro, setExpandedRegistro] = useState(false);
    const [expandedActualizar, setExpandedActualizar] = useState(false);

    const handleRadios = (e) => {
        setValueRadios(e.target.value);
        console.log(e.target.value);

        if (e.target.value === 'agregarRol') {
            setContenido(<AgregarRol />);
        } else if (e.target.value === 'actualizarRol') {
            setContenido(<ACtualizarRol />);
        } else if (e.target.value === 'eliminarRol') {
            setContenido(<EliminarRol />);
        } else if (e.target.value === 'agregarRolPermiso') {
            setContenido(<AgregarRolPermiso />);
        } else if (e.target.value === 'actualizarRolPermiso') {
            setContenido(<ActualizarRolPermiso />);
        } else if (e.target.value === 'eliminarRolPermiso') {
            setContenido(<EliminarRolPermiso />);
        } else if (e.target.value === 'agregarPermiso') {
            setContenido(<AgregarPermiso />);
        } else if (e.target.value === 'actualizarPermiso') {
            setContenido(<ActualizarPermiso />);
        } else if (e.target.value === 'eliminarPermiso') {
            setContenido(<EliminarPermiso />);
        } else if (e.target.value === 'rolesListado') {
            setContenido(<ListadoRoles />);
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
                                    <Typography>Roles</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="agregarRol" control={<Radio />} label="Agregar Rol" />
                                            <FormControlLabel value="actualizarRol" control={<Radio />} label="Actualizar Rol" />
                                            <FormControlLabel value="eliminarRol" control={<Radio />} label="Eliminar Rol" />
                                            <FormControlLabel value="rolesListado" control={<Radio />} label="Listado Roles" />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion >
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Roles Permisos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="agregarRolPermiso" control={<Radio />} label="Agregar Rol Permiso" />
                                            <FormControlLabel value="actualizarRolPermiso" control={<Radio />} label="Actualizar Rol Permiso" />
                                            <FormControlLabel value="eliminarRolPermiso" control={<Radio />} label="Eliminar Rol Permiso" />
                                        </RadioGroup>
                                    </FormControl>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion >
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Permisos</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            onChange={handleRadios}
                                        >
                                            <FormControlLabel value="agregarPermiso" control={<Radio />} label="Agregar Permiso" />
                                            <FormControlLabel value="actualizarPermiso" control={<Radio />} label="Actualizar Permiso" />
                                            <FormControlLabel value="eliminarPermiso" control={<Radio />} label="Eliminar Permiso" />
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

export default PermisosUsuario;