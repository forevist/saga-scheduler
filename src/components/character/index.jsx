import React from 'react';

import { Input, Space } from 'antd';
import { EditOutlined, SaveOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';


export class CharacterName extends React.Component {
  state = {
    edit: false,
    newName: '',
  };

  selectCharacter = () => {
    this.props.clickHandler(this.props.name);
  };

  toggleEdit = (e) => {
    this.setState({
      edit: !this.state.edit,
      newName: this.props.name,
    });
    e.stopPropagation();
  };

  deleteCharacter = () => {
    this.props.onDelete(this.props.name);
  }

  changeCharacterName = (event) => {
    this.setState({
      newName: event.target.value
    });
  }

  cancelEditingName = (e) => {
    this.toggleEdit(e);
  }

  saveName = (e) => {
    this.props.onChangeName(this.props.name, this.state.newName);
    this.toggleEdit(e);
  }

  renderEdit = () => {
    return (
      <>
        <Input autoFocus={true} value={this.state.newName} onPressEnter={this.saveName} onChange={this.changeCharacterName}/>
        <SaveOutlined onClick={this.saveName}/>
        <CloseOutlined onClick={this.cancelEditingName}/>
      </>
    );
  }

  renderSpan = () => {
    return (
      <>
        {this.props.name}
        <EditOutlined onClick={this.toggleEdit}/>
        <DeleteOutlined onClick={this.deleteCharacter}/>
      </>
    );
  }

  render() {
    const content = this.state.edit ? 
      this.renderEdit() :
      this.renderSpan();

    return (
      <Space>
        {content}
      </Space>
    );
  }
};