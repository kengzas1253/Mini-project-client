import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Login from './Login'
import auth from '../firebase';
import Editwork from './EditWork';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WorkIcon from '@material-ui/icons/Work';
import WorkOffIcon from '@material-ui/icons/WorkOff';
import PersonPinIcon from '@material-ui/icons/PersonPin';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditCancelJob from './EditCancelJob';

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

const Admin = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
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
    <div>
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
                <Tab label="Work" icon={<WorkIcon />} {...a11yProps(0)} />
                <Tab label="Employee" icon={<PersonPinIcon />} {...a11yProps(1)} />
                <Tab label="Cancel Work" icon={<WorkOffIcon />} {...a11yProps(0)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <div className="Prompt">
                <h4>Hello Admin: {session.currentUser && session.currentUser.email}
                  <button style={{ marginLeft: "8px" }} className="btn btn-danger btn-sm"
                    onClick={handleLogout}>logout</button> </h4>
                <Editwork />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="Prompt">
                <h4>Hello Admin: {session.currentUser && session.currentUser.email}
                  <button style={{ marginLeft: "8px" }} className="btn btn-danger btn-sm"
                    onClick={handleLogout}>logout</button> </h4>
                <Form />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="Prompt">
                <h4>Hello Admin: {session.currentUser && session.currentUser.email}
                  <button style={{ marginLeft: "8px" }} className="btn btn-danger btn-sm"
                    onClick={handleLogout}>logout</button> </h4>
                    <EditCancelJob/>
              </div>
            </TabPanel>

          </div>

        </div>

      ) : (
          <Login setSession={setSession} />
        )
      }

    </div>
  )
}
export default Admin