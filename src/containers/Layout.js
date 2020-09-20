import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "rebass";

import Container from "../components/Container";
import Header from "../containers/Header";
import Home from "../containers/Home";
import About from "../containers/About";

function Layout() {
  const [person, setPerson] = useState([
    {
      name: "John",
      lname: "Baskins",
    },
    {
      name: "Bob",
      lname: "Barker",
    },
  ]);

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Flex mx={-2} flexWrap="wrap">
            <Switch>
              <Route
                path="/home"
                render={(props) => (
                  // <Home />
                  <Home
                    // submit={this.handleSubmit}
                    // name={name}
                    // change={this.handleChange}
                    person={person}
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
              <Route render={() => <span>Not found</span>} />
            </Switch>
          </Flex>
        </Container>
      </Router>
    </>
  );
}

export default Layout;
