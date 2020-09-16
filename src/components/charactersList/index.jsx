import React from 'react';

import List from '@material-ui/core/List';
import { CharacterName } from '../character';

export const CharactersList = (props) => {

  const clickHandler = (characterName) => {
    console.log('characterName', characterName);
  }
      
  return (
    <List>
      {['Test1', 'name2', 'name3'].map((name, index) => (
        <CharacterName key={index} name={name} clickHandler={clickHandler}/>
      ))}
    </List>
  );
};