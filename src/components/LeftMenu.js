import React, { Component } from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

export default class LeftMenu extends Component {
  render() {
    return (
      <div className="mt-2">
        <ListGroup>
          <ListGroupItem tag="a" href="/">
            Country List
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
