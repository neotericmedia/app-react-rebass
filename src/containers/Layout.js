import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "rebass";
import classes from './Layout.css';

import Container from "../components/Container";
import Header from "../containers/Header";
import Home from "../containers/Home";
import About from "../containers/About";
import Test from "../components/Test";
import ReducerForm from "../components/ReducerForm";
import { MyPromise } from "../services/mockData"
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth.context'



// const NewBox = styled(Box)`
// 	font-size: ${({ theme }) => `${ theme.fontSizes[1] }px`};
// `;



function Layout() {
  const [newPerson, setNewPerson] = useState('');



  // const [contextVal, setContextVal] = useState('hello from auth context');
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser])




  useEffect(() => {
    try {
      // set loading to true
      (async function gdata() {
        setNewPerson(await MyPromise())
      })();
    } catch (err) {
      // set loading to false 
      console.log(err)
    }
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



              <AuthContext.Provider value={value}>
                <Route path="/about" component={About} />
                <Route path="/test" component={Test} />
                <Route path="/reducer" component={ReducerForm} />
              </AuthContext.Provider>



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
