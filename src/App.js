import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import CountryList from "./components/CountryList";
import Summary from "./components/Summary";
import NotFound from "./components/NotFound";
import Detail from "./components/Detail";

export default class App extends Component {
  state = {
    confirmed: {},
    recovered: {},
    deaths: {},
    countryList: [],
    filteredCountries: [],
    countryDetail: {},
  };
  componentDidMount() {
    this.getCountries();
    this.getSummary();
  }
  getSummary = () => {
    fetch("https://covid19.mathdro.id/api")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          confirmed: data.confirmed,
          recovered: data.recovered,
          deaths: data.deaths,
        })
      );
  };
  getCountries = () => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((data) => this.setState({ countryList: data.countries }));
  };
  searchCountry = (e) => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((data) => this.setState({ countryList: data.countries.filter(country => country.name.toLowerCase().includes(e)) }));
  }
  
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col xs="3">
            <LeftMenu />
          </Col>
          <Col xs="9">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <Summary
                      confirmed={this.state.confirmed}
                      recovered={this.state.recovered}
                      deaths={this.state.deaths}
                    />
                    <div className="mt-2">
                      Search Country
                      <input className="form-control" type="text" onChange={(e) => this.searchCountry(e.target.value)} />
                    </div>
                    <CountryList
                      countries={this.state.countryList}
                      getDetails={this.getDetails}
                    />
                  </div>
                )}
              ></Route>
              <Route
                exact
                path="/detail/:country"
                component={Detail}
              ></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
