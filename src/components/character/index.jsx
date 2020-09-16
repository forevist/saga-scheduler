import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from '@material-ui/core/TextField';


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

  renderSpan = () => {
    return (
      <>
        <ListItemText primary={this.props.name} />
        <ListItemIcon onClick={this.toggleEdit}><EditIcon/></ListItemIcon>
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
        <ListItemIcon onClick={this.saveName}><SaveIcon/></ListItemIcon>
        <ListItemIcon onClick={this.cancelEditingName}><CancelIcon/></ListItemIcon>
      </>
    );
  }

  render() {
    const content = this.state.edit ? 
      this.renderEdit() :
      this.renderSpan();

    return (
      <ListItem button onClick={this.selectCharacter}>
        {content}
      </ListItem>
    );
  }
};