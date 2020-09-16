import React from 'react';
import { Modal } from 'antd';

export class RoadMapModal extends React.Component {
  handleOk = () => {
    this.props.toggleVisibility();
  };

  handleCancel = () => {
    this.props.toggleVisibility();
  };

  render() {
    return (
      <Modal
          title="Simple roadmap"
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>1) Loading from localStorage of Ur browser</p>
          <p>2) Time of job ending</p>
          <p>3) Simple notes about character</p>
          <p>4) Ability to adding custom cooldowns for each character (bosses, jobs, etc.)</p>
      </Modal>
    );
  }
}