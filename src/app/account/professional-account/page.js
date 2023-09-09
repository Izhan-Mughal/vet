'use client'
import React, { useState } from 'react'
import { Header } from '../layout/Header'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cordinates from '@/app/Components/pages/professional-account/Cordinates';
import Opening from '@/app/Components/pages/professional-account/Opening';
import ClosingPeriod from '@/app/Components/pages/professional-account/ClosingPeriod';
import Collaborators from '@/app/Components/pages/professional-account/Collaborators';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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


const page = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Header />
            <section>
                <div className='container-fluid'>
                    <div className='py-5'>
                        <h1 className='fw-500 mb-4 fs-heading'>Modifica il tuo account professionale</h1>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
                                    <Tab label="Coordinate e credenziali" {...a11yProps(0)} />
                                    <Tab label="Richieste e orari d’apertura" {...a11yProps(1)} />
                                    <Tab label="Periodo di chiusura" {...a11yProps(2)} />
                                    <Tab label="Ambulatori e collaboratori" {...a11yProps(3)} />
                                    <Tab label="Piano di abbonamento" {...a11yProps(4)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <Cordinates />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <Opening />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <ClosingPeriod />
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                                <Collaborators/>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={4}>
                                Item Five
                            </CustomTabPanel>
                        </Box>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page