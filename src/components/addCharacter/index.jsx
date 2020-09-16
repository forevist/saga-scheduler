import React from 'react';
import { Modal, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

export class AddCharacter extends React.Component {
  state = { visible: false };
  name = '';

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
    if (this.name === '') {
      return;
    }
    this.props.onAdd(this.name);
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  changeName = (event) => {
    this.name = event.target.value;
  }

  render() {
    return (
      <>
        <UserAddOutlined onClick={this.showModal}/>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="Name" onChange={this.changeName}/>
        </Modal>
      </>
    );
  }
}

