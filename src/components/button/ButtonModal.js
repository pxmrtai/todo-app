import React, { Component } from "react";
import add from "../../img/add.svg";
import classNames from "classnames";
import "./button.css";

class ButtonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: this.props.isChecked
    };
    // this.state={
    //   value: this.props.value
    //  }
    console.log(this.state.value);
  }
  handleClick = (event) => {
    this.setState({ isChecked: !this.state.isChecked });
    console.log('clicked')
  };

  render() {
    const { isChecked, value } = this.state;

    return (
      <div className="containers">
        <input
          type="text"
          className={classNames("disapear", {
            apear: isChecked
          })}
          checked={isChecked}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder="Add something..."
          onKeyUp={this.props.onKeyUp}
        />
        <img
          src={add}
          alt="add"
          className="click-me"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
export default ButtonModal;
