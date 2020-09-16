import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';


export class CharacterName  extends React.Component {
    selectCharacter = () => {
      this.props.clickHandler(this.props.name);
    };

    editName = (e) => {
      console.log('edit');
      e.stopPropagation();
    };

    render() {
      return (
        <ListItem button onClick={this.selectCharacter}>
          <ListItemText primary={this.props.name} />
          <ListItemIcon onClick={this.editName}><EditIcon/></ListItemIcon>
        </ListItem>
      );
    }
};