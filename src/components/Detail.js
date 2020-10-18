import React, { Component } from "react";
import Summary from "./Summary";

export default class Detail extends Component {
  state = {
    confirmed: {},
    recovered: {},
    deaths: {},
  };
  componentDidMount() {
    this.getDetails(this.props.match.params.country);
  }

  getDetails = (index) => {
    fetch("https://covid19.mathdro.id/api/countries/" + index)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
        })
      );
  };
  render() {
    return (
        <div className="mt-2">
            <h4>Country - {this.props.match.params.country}</h4>
            <Summary confirmed={this.state.confirmed} recovered={this.state.recovered} deaths={this.state.deaths}/>
        </div>
    );
  }
}
