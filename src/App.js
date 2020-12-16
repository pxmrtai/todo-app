import React, { Component } from "react";
import "./styles.css";
import TodoApp from "./components/TodoApp.js";
import ModalComponent from "./components/button/ModalComponent";
import menu from "./img/menu.svg";
import nothing from "./img/nothing.svg";
import chat from "./img/chat.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todoItems: [
        { title: "Go to school", finished: false, id: 1 },
        { title: "Go to market", finished: false, id: 2 },
        { title: "Go to market", finished: false, id: 3 }
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        todoItems: [{ title: text, finished: false }, ...this.state.todoItems],
        value: ""
      });
    }
  }
  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  handleClick(item) {
    return (event) => {
      const finished = item.finished;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            finished: !finished
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }
  render() {
    const { todoItems, value } = this.state;
    console.log(this.state.value);
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <img
              className="menu"
              src={menu}
              alt="menu"
              width={20}
              height={20}
            />
            <h4 className="title"> DAILIST </h4>
          </div>

          {todoItems.length > 0 &&
            todoItems
              .filter((item) => item.finished === false)
              .map((item, index) => (
                <TodoApp
                  key={index}
                  item={item}
                  handleClick={this.handleClick(item)}
                />
              ))}
          {todoItems.length === 0 && (
            <div className="when-nothing">
              <div className="talk">
                <p className="add-more">YOU DON'T HAVE THINGS TO DO LEFT</p>
                <img className="chat" src={chat} alt="chat" />
              </div>

              <img className="nothing" src={nothing} alt="nothing" />
            </div>
          )}
        </div>

        <div>finished</div>
        {todoItems.length > 0 &&
          todoItems
            .filter((item) => item.finished)
            .map((item, index) => (
              <TodoApp
                key={index}
                item={item}
                handleClick={this.handleClick(item)}
              />
            ))}

        <ModalComponent
          isChecked={false}
          value={value}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

export default App;
