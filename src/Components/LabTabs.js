import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PrestataireInscriptions from './PrestataireInscriptions';
import ClientInscriptions from './ClientInscriptions'


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
        <Box sx={{ p: 2}}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
     <div className="ligne">
     <Box sx={{ borderBottom: 3, borderColor: 'orange',display:'flex' ,justifyContent:'space-between',alignContent:'space-between' }}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ borderBottom: 0, borderColor: 'orange',color:"orange" }}>
          <Tab  label="Prestataire" {...a11yProps(0)} sx={{ borderBottom: 0, borderColor: 'orange',color:"orange" }} />
          <Tab label="Utilisateur" {...a11yProps(1)}  sx={{ borderBottom: 0, borderColor: 'orange',color:"orange" }}/>
          
        </Tabs>
      </Box>
     </div>
      <CustomTabPanel value={value} index={0}>
      <ClientInscriptions/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <PrestataireInscriptions/>
      </CustomTabPanel>
      
    </Box>
  );
}




