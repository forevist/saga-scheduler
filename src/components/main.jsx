import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { CharactersList } from './charactersList';




export class SagaScheduler extends React.Component {

  selectCharacter = (character) => {
    console.log('character', character);

  };

  render() {
    const classes = this.props.classes;

    return (
      <>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Saga Scheduler
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        <Toolbar />
          <div className={classes.drawerContainer}>
            <CharactersList clickHandler={this.selectCharacter}/>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
        </main>
      </>
    );
  }
}
