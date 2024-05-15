import * as React from 'react';
import { useState } from 'react'; // Import useState hook
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { NewContext } from './NewContext';
import BasicInformation from './BasicInformation ';
import PersonalInformation from './PersonalInformation'
import Preview from './Preview '

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: value === index ? '100%' : '0', overflow: 'hidden' }}
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

export default function   BasicTabs() {
  const [details, setDetails] = useState([]);  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NewContext.Provider value={{ details, setDetails }}>  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab label="BasicInformation" {...a11yProps(0)} />
                <Tab label="PersonalInformation" {...a11yProps(1)} />
                <Tab label="Preview" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className='text-center'>
                <BasicInformation />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <div className='text-center'>
                <PersonalInformation />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <div className='text-center'> <Preview /></div>
            </CustomTabPanel>
          </Box>
        </div>
      </NewContext.Provider>
    </>
  );
}