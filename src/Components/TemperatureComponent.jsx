import React, { Component } from "react";

export default class Temperature extends Component {
  state = {
    temperature: ""
  };
  handleChange = evt => {
    this.setState({ temperature: evt.target.value });
  };
  render() {
    return (
      <div className="frame">
        <h1 className="custom-title">Temperature</h1>
        {/* <label htmlFor="temperature">Temperature</label> */}
        <input
          onChange={this.handleChange}
          type="number"
          name="temperature"
          placeholder="Temperature in °C"
          className="input-size"
        />
        {this.state.temperature === "" ? "" : ""}
        {this.state.temperature < 10 ? <p className="blue">it's cold!</p> : ""}
        {this.state.temperature >= 10 && this.state.temperature < 30 ? (
          <p>It's nice</p>
        ) : (
          ""
        )}
        {this.state.temperature > 30 ? <p className="red">It's warm</p> : ""}
      </div>
    );
  }
}
