import React from "react";
import { Card, Box, Image} from "rebass";
import menu_img from "./menu.png"

class DropdownMenu extends React.Component {

  render() {
    return(
      <Box>
          <Card
            width={35}
            backgroundColor="black"
            >
            <Image onClick={()=>console.log("HI")} src={menu_img}/>
          </Card>
        </Box>
    );
  }
}

export default DropdownMenu;
