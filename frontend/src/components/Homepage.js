import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Employee from './Employee';
import Works from './Works';
import auth from '../firebase';
import Loginhome from './Loginhome';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import WorkIcon from '@material-ui/icons/Work';
import HelpIcon from '@material-ui/icons/Help';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Status from './Status';
import ApplyJob from './ApplyJob';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
const Homepage =()=>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [session, setSession] = useState({
    isLoggedIn: false,
    currentUser: null,
    errorMessage: null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setSession({
          isLoggedIn: true,
          currentUser: user,
          errorMessage: null
        });
      }
    });

    return () => {
      handleAuth();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut().then(response => {
      setSession({
        isLoggedIn: false,
        currentUser: null
      });
    });
  };
  return (
    <diV>
       {session.isLoggedIn ? (
        <div>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Status" icon={<EventNoteIcon />} {...a11yProps(1)} />
          <Tab label="Apply Job" icon={<WorkIcon />} {...a11yProps(2)} />
          <Tab label="Cancel Work" icon={<WorkOffIcon />} {...a11yProps(3)} />
          <Tab label="About" icon={<HelpIcon />} {...a11yProps(4)} />
       
          <Tab label="Log out" 
          onClick={handleLogout}
          icon={<PowerSettingsNewIcon />} 
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <h3 className="Prompt" style={{textAlign:"center"}}>Welcome  {session.currentUser && session.currentUser.email}</h3>
        <Works/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Status/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ApplyJob/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       Comming soon
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="container">
          <span className="Mali">
          <h2>Hotel Part time job Systems</h2>
          <p1>Mini project</p1>
          <br/>
          <p1>By Naratip Thongtaluang 5735512153 Section 01</p1>
          <p1></p1>
          </span>
        </div>
        
      </TabPanel>
     
      
    </div>     
        </div>

      ) : (
          <Loginhome setSession={setSession}/>

        )}
    </diV>
  );
}

export default Homepage;
