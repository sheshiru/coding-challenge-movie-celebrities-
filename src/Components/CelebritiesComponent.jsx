import React, { Component } from "react";
import axios from "axios";

export default class CelebritiesComponent extends Component {
  state = {
    celebrities: []
  };
  componentDidMount = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?page=2&api_key=c444f5bb19b9d1836f69615fdc0773a7"
      )
      .then(celebrities =>
        this.setState({ celebrities: celebrities.data.results })
      )
      .catch(err => console.log(err));
  };
  render() {
    // const { celebrities } = this.state.celebrities;

    return (
      <div>
        <h1>Celebrities</h1>

        {this.state.celebrities.map((oneCeleb, i) => (
          <div key={i}>{oneCeleb.name}</div>
        ))}
      </div>
    );
  }
}
