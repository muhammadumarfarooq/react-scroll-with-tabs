import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-scroll";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


export default function TabsMaterial({ value, setValue }) {
  
  const handleSetActive = (to) => {
    setValue(Number(to));
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
   
  };
  
  
  const tobTabs = [
    { label: "test 1" },
    { label: "test 2" },
    { label: "test 3" },
    { label: "test 4" },
    { label: "test 5" },
    { label: "test 6" },
    { label: "test 7" },
    { label: "test 8" },
    { label: "test 9" },
    { label: "test 10" },
    { label: "test 11" },
    { label: "test 12" },
    { label: "test 13" },
    { label: "test 14" },
    { label: "test 15" },
    { label: "test 16" },
    { label: "test 17" },
    { label: "test 18" },
    { label: "test 19" },
    { label: "test 20" }
  ];
  
  
  return (
    <div className="tab-panel">
      
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {
          tobTabs.map((tabSingle, index) => {
              const link = ( <Link
                activeClass="active"
                className={"navigation-link"}
                to={String(index)}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onSetActive={handleSetActive}
                isDynamic={true}
              >
                
                {tabSingle.label}
              </Link> );
              
              
              return (
                <Tab key={index} disableRipple className='products-tab' label={link} {...a11yProps(index)} />
              );
            }
          )
        }
      </Tabs>
    
    </div>
  
  );
}
