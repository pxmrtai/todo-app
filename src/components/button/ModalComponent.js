import React, { Component } from "react";

import ButtonModal from "./ButtonModal";

class ModalComponent extends Component {
  render() {
    return (
      <div>
        <ButtonModal
          isChecked={this.props.isChecked}
          onKeyUp={this.props.onKeyUp}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
export default ModalComponent;
