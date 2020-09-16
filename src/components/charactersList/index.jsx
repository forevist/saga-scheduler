import React from 'react';

import List from '@material-ui/core/List';
import { CharacterName } from '../character';


export class CharactersList extends React.Component {
  state = {
    names: ['Test1', 'name2', 'name3'],
  };

  clickHandler = (characterName) => {
    console.log('characterName', characterName);
  }

  onChangeName = (oldName, newName) => {
    const newNames = [].concat(this.state.names);
    newNames[newNames.indexOf(oldName)] = newName;
    this.setState({
      names: newNames,
    })
  }
      
  render() {
    const names = this.state.names
    return (
      <List>
        {names.map((name, index) => (
          <CharacterName key={index} name={name} clickHandler={this.clickHandler} onChangeName={this.onChangeName}/>
        ))}
      </List>
    );
  }
};