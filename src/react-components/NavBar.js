import React from "react";
import ResponsiveLayout from "./ResponsiveLayout.js";
import DropdownMenu from "./DropdownMenu.js";
import Dropdown from "react-bootstrap/Dropdown";
import menu_img from "./menu.png";
import {
  Image,
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
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <Image src={menu_img} width={35} backgroundColor="black"/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href={process.env.PUBLIC_URL+"/"}>Home</Dropdown.Item>
                <Dropdown.Item href={process.env.PUBLIC_URL+"/resume"}>Resume</Dropdown.Item>
                <Dropdown.Item href={process.env.PUBLIC_URL+"/projects"}>Projects</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          renderDesktop={() => (
            <Box
              m={2}>
              <Link variant='nav' href={process.env.PUBLIC_URL+"/"}>
                Home
              </Link>
              <Link variant='nav' href={process.env.PUBLIC_URL+"/resume"}>
                Resume
              </Link>
              <Link variant='nav' href={process.env.PUBLIC_URL+"/projects"}>
                Projects
              </Link>
            </Box>
          )}
        />
      </Box>
    );
  }
}


export default NavBar;
