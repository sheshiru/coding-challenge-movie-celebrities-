import React, { Component } from "react";

export default class CustomizeImageComponent extends Component {
  state = {
    size: 0,
    url:
      "https://i.pinimg.com/originals/86/32/b4/8632b4b959fcd2a680a0a95faa38b1f9.jpg"
  };
  setSize = evt => {
    this.setState({ size: evt.target.value });
  };
  render() {
    return (
      <div className="frame">
        <h1 className="custom-title">Customize Image</h1>

        <div className="flex-column-wrapper">
          <input type="text" className="input-size" />
          <input
            type="range"
            onChange={this.setSize}
            max={200}
            min={0}
            step="1"
            className="input-size"
          />
          <p>
            {this.state.size} x {this.state.size} px
          </p>
          <img
            src={this.state.url}
            style={{ maxWidth: "200px", width: `${this.state.size}px` }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}
