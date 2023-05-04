import React, { Fragment, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

import ControlModulos from "./controlModulos";
import PermisosUsuario from "./rolesPermisosMenu";
import ControlApartados from "./controlApartados";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AdministracionMenu = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 | col-md-12 | col-sm-12">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Control Usuarios" {...a11yProps(0)} />
                                    <Tab label="Permisos Usuario" {...a11yProps(1)} />
                                    <Tab label="Control Modulos" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <ControlModulos></ControlModulos>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <PermisosUsuario></PermisosUsuario>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <ControlApartados></ControlApartados>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default AdministracionMenu;