import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

export default class CountryList extends Component {
  state = {
    currentPage: 0,
    pageSize: 15,
  };

  handleClick(e, index) {
    this.setState({
      currentPage: index,
    });
  }
  render() {
    const currentPage = this.state.currentPage;
    const countries = this.props.countries
      .slice(
        currentPage * this.state.pageSize,
        (currentPage + 1) * this.state.pageSize
      )
      .map((country, i) => {
        return (
          <ListGroupItem key={i}>
            {country.name}
            <NavLink
              to={"/detail/" + country.iso3}
              className="btn btn-info"
              style={this.btnStyle}
            >
              <i className="fa fa-list"></i> Details
            </NavLink>
          </ListGroupItem>
        );
      });
    const pagesCount = Math.ceil(this.props.countries.length / this.state.pageSize);
    const pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((page, i) => {
      if(i < currentPage + 3 && i > currentPage - 3){
        return (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={(e) => this.handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      }
    })
    return (
      <div className="mt-2">
        <ListGroup>{countries}</ListGroup>
        <Pagination style={this.style}>
        <PaginationItem disabled={currentPage == 0}>
            <PaginationLink
              onClick={(e) => this.handleClick(e, 1)}
              first
              href="#"
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={(e) => this.handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>
          {renderPageNumbers}
          <PaginationItem disabled={currentPage >= pagesCount - 1}>
            <PaginationLink
              onClick={(e) => this.handleClick(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage == pagesCount - 1}>
            <PaginationLink
              onClick={(e) => this.handleClick(e, pagesCount - 1)}
              last
              href="#"
            />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }

  style = {
    justifyContent: "center",
    marginTop: "20px",
  };

  btnStyle = {
    float: "right",
  };
}
