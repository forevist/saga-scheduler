import React from 'react';
import { Menu, Divider } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

import { CharacterName } from './character';
import { AddCharacter } from './addCharacter';
import { RoadMapModal } from './roadMapModal';


export class SagaScheduler extends React.Component {

  selectCharacter = (character) => {
    console.log('character', character);

  };

  state = {
    names: ['test1', 'test2', 'test3'],
    roadMapVisible: false,
  };

  componentDidMount() {
    const schedule = localStorage.getItem('sagaScheduler');
    const scheduleJson = JSON.parse(schedule);
    if (scheduleJson) {
      console.log('componentDidMount', scheduleJson);     
    }
  }

  selectCharacter = (menuItem) => {
    console.log('characterName', menuItem.key);
  }

  deleteCharacter = (name) => {
    const newNames = [].concat(this.state.names);
    newNames.splice(newNames.indexOf(name), 1);
    this.setState({
      names: newNames,
    })
  };

  onChangeName = (oldName, newName) => {
    const newNames = [].concat(this.state.names);
    newNames[newNames.indexOf(oldName)] = newName;
    this.setState({
      names: newNames,
    })
  }

  addCharacter = (name) => {
    const newNames = [].concat(this.state.names);
    newNames.push(name);
    this.setState({
      names: newNames,
    });
  }

  drawCharacters = () => {
    return this.state.names.map((name, index) => (
      <Menu.Item key={index} onClick={this.selectCharacter}>
        <CharacterName
          name={name}
          onChangeName={this.onChangeName}
          onDelete={this.deleteCharacter}
          />
      </Menu.Item>
    ));
  };

  toggleRoadmapVisibility = () => {
    this.setState({
      roadMapVisible: !this.state.roadMapVisible,
    })
  }

  render() {   

    return (
      <>
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          mode="inline"
        >
          {this.drawCharacters()}
          <Menu.Item>
            <AddCharacter onAdd={this.addCharacter}/>
          </Menu.Item>
          <Menu.Item>
            <QuestionOutlined onClick={this.toggleRoadmapVisibility}/>
          </Menu.Item>
        </Menu>
        <RoadMapModal visible={this.state.roadMapVisible} toggleVisibility={this.toggleRoadmapVisibility}/>
      </>
    );
  }
}
