import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex
} from "rebass";

class Page extends React.Component {
  render() {
    return(
      <Flex
        flexDirection="column"
        alignItems="center"
        width={1}>
        <Box
          width={1}
          padding={0.5}
          pt={40}>
          <Heading> {this.props.title} </Heading>
          <hr/>
          <Text fontSize={18} dangerouslySetInnerHTML={{__html: this.props.text}}/>
        </Box>
      </Flex>
    );
  }

}

export default Page;
