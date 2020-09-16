import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SagaScheduler } from './components/main';

import './App.css';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {

  const classes = useStyles();
  return (
    <div className="App">
      <SagaScheduler classes={classes}/>
    </div>
  );
}

export default App;
