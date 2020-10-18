import React, { Component } from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

export default class Summary extends Component {
  render() {
    return (
      <Row className="mt-2">
        <Col sm="4">
          <Card body style={this.confirmedStyle}>
            <CardTitle style={this.cartTitleStyle}>Confirmed</CardTitle>
            <CardText style={this.cartTextStyle}>{this.props.confirmed.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body style={this.recoveredStyle}>
            <CardTitle style={this.cartTitleStyle}>Recovered</CardTitle>
            <CardText style={this.cartTextStyle}>{this.props.recovered.value}</CardText>
          </Card>
        </Col>
        <Col sm="4">
          <Card body style={this.deathStyle}>
            <CardTitle style={this.cartTitleStyle}>Death</CardTitle>
            <CardText style={this.cartTextStyle}>{this.props.deaths.value}</CardText>
          </Card>
        </Col>
      </Row>
    );
  }

  confirmedStyle = {
    "backgroundColor": "#0275d8",
    "color": "white"
  };
  recoveredStyle = {
    "backgroundColor": "#5cb85c",
    "color": "white"
  };
  deathStyle = {
    "backgroundColor": "#d9534f",
    "color": "white"
  };
  cartTitleStyle = {
    "fontSize": "18px",
  };
  cartTextStyle = {
    "fontSize": "14px",
  };
}
