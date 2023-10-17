import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateEvent from './CreateEvent';
import AllEvents from './AllEvents';

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
const Events = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                        "& .Mui-selected": { color: 'rgb(25 22 76)' }
                    }}>
                    <Tab label="Create Event" {...a11yProps(0)} sx={{ color: 'white' }} />
                    <Tab label="All Events" {...a11yProps(1)} sx={{ color: 'white' }} />
                    <Tab label="Rules" {...a11yProps(2)} sx={{ color: 'white' }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <CreateEvent />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AllEvents/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Rules
            </CustomTabPanel>
        </Box>
    );
}

export default Events