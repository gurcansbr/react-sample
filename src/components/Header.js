import React, { Component } from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
  } from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Corona Virus Data</NavbarBrand>
          <NavbarToggler  />
        </Navbar>
      </div>
    );
  }
}
