import React from 'react';


import { Sidebar } from 'primereact/sidebar';




export class SagaScheduler extends React.Component {

  selectCharacter = (character) => {
    console.log('character', character);

  };

  state = {
      visible: true
    };

  render() {
    // const classes = this.props.classes;

    // return (
    //   <>
    //     <AppBar position="fixed" className={classes.appBar}>
    //       <Toolbar>
    //         <Typography variant="h6" noWrap>
    //           Saga Scheduler
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>
    //     <Drawer
    //       className={classes.drawer}
    //       variant="permanent"
    //       classes={{
    //         paper: classes.drawerPaper,
    //       }}
    //     >
    //     <Toolbar />
    //       <div className={classes.drawerContainer}>
    //         <CharactersList clickHandler={this.selectCharacter}/>
    //       </div>
    //     </Drawer>
    //     <main className={classes.content}>
    //       <Toolbar />
    //     </main>
    //   </>
    // );

    

    return (
      <Sidebar visible={this.state.visible} onHide={() => this.setState({visible:false})}>
        Content
      </Sidebar>
    );
  }
}
