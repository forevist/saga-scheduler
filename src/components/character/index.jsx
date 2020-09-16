import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import styles from "./styles.css";

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

  renderSpan = () => {
    const styles = {root: 'wrapped'};
    return (
      <>
        <ListItemText primary={this.props.name} classes={styles} />
        <EditIcon onClick={this.toggleEdit}/>
        <DeleteIcon onClick={this.deleteCharacter}/>
      </>
    );
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
        <TextField value={this.state.newName} onChange={this.changeCharacterName}/>
        <SaveIcon onClick={this.saveName}/>
        <CancelIcon onClick={this.cancelEditingName}/>
      </>
    );
  }

  render() {
    const content = this.state.edit ? 
      this.renderEdit() :
      this.renderSpan();

    return (
      <Tooltip title={this.props.name}>
        <ListItem button onClick={this.selectCharacter}>
            {content}
        </ListItem>
      </Tooltip>
    );
  }
};