import React from "react";
import ResponsiveLayout from "./ResponsiveLayout.js";
import DropdownMenu from "./DropdownMenu.js";
import {
  Link,
  Box
} from "rebass";


class NavBar extends React.Component {
  render() {
    return(
      <Box
        width={1}
        color='white'
        bg='black'
      >
        <ResponsiveLayout
          breakpoint={767}
          renderMobile={() => (
            <DropdownMenu />
          )}
          renderDesktop={() => (
            <Box
              m={2}>
              <Link variant='nav' href="/">
                Home
              </Link>
              <Link variant='nav' href="/resume">
                Resume
              </Link>
            </Box>
          )}
        />
      </Box>
    );
  }
}


export default NavBar;
