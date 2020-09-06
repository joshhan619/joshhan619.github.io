import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from "./react-components/Home.js"
import Resume from "./react-components/Resume.js"
import Projects from "./react-components/Projects.js"
import NavBar from "./react-components/NavBar.js"
import WindowDimensionsProvider from "./react-components/WindowDimensionsProvider.js"
import './App.css';

import { Heading, Flex} from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

class App extends React.Component {

  render() {
    theme.text.spaced_heading = {
      pt: 2,
      color: "primary",
      fontWeight: "bold",
    }

    return (
      <WindowDimensionsProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Flex
              width={1/2}
              sx={{
                position: 'absolute',
                left: '50%',
                top: '10%',
                transform: 'translate(-50%, 0%)',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Heading
                fontSize={[4, 5, 6]}>
                JOSHUA HAN
              </Heading>
              <NavBar />

              <Switch>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/" >
                  <Home />
                </Route>
              </Switch>
            </Flex>
          </Router>
        </ThemeProvider>
      </WindowDimensionsProvider>
    );
  }
}

export default App;
