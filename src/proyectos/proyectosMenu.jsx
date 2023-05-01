import React, { Fragment, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';


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

const ProyectosMenu = () => {
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
                                    <Tab label="Registrar Datos Proyecto" {...a11yProps(0)} />
                                    <Tab label="Asignar Peso Criterios" {...a11yProps(1)} />
                                    <Tab label="Asignar Peso Tipos de Usuarios" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>

                            </TabPanel>
                            <TabPanel value={value} index={1}>

                            </TabPanel>
                            <TabPanel value={value} index={2}>

                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default ProyectosMenu;