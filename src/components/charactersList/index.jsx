import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import { CharacterName } from '../character';


export class CharactersList extends React.Component {
  state = {
    names: [],
  };

  componentDidMount() {
    const schedule = localStorage.getItem('sagaScheduler');
    const scheduleJson = JSON.parse(schedule);
    if (scheduleJson) {
      console.log('componentDidMount', scheduleJson);     
    }
  }

  clickHandler = (characterName) => {
    console.log('characterName', characterName);
  }

  deleteCharacter = (name) => {
    const newNames = [].concat(this.state.names);
    newNames.splice(newNames.indexOf(name), 1);
    this.setState({
      names: newNames,
    })
  };

  onChangeName = (oldName, newName) => {
    console.log('onChangeName');
    const newNames = [].concat(this.state.names);
    newNames[newNames.indexOf(oldName)] = newName;
    this.setState({
      names: newNames,
    })
  }

  addCharacter = () => {
    const newNames = [].concat(this.state.names);
    newNames.push('');
    this.setState({
      names: newNames,
    });
  }
      
  render() {
    const names = this.state.names
    console.log('------', names.length);
    return (
      <List>
        {names.map((name, index) => {
          console.log(index);
          return (
            <CharacterName 
              key={index}
              name={name}
              clickHandler={this.clickHandler}
              onChangeName={this.onChangeName}
              onDelete={this.deleteCharacter}
            />
          );
        })}
        <ListItem button onClick={this.addCharacter}>
          <AddIcon/>
        </ListItem>
      </List>
    );
  }
};