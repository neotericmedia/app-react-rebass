import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "rebass";
import classes from './Layout.css';

import Container from "../components/Container";
import Header from "../containers/Header";
import Home from "../containers/Home";
import About from "../containers/About";
import { MyPromise } from "../services/mockData"
import withClass from '../hoc/WithClass';

function Layout() {
  const [newPerson, setNewPerson] = useState('');



  useEffect(() => {
    (async function gdata() {
      setNewPerson(await MyPromise())
    })();
  }, []);



  return (
    <>
      <Router>
        <Header />

        <Container>
          <Flex mx={-2} flexWrap="wrap">
            <Switch>
              <Route
                path="/home"
                render={() => (
                  <Home
                    person={newPerson}
                    setPerson={setNewPerson}
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

// export default Layout;
export default withClass(Layout, classes.Layout);
