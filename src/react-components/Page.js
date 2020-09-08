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
          padding={0.5}>
          <Heading> {this.props.title} </Heading>
          <Text fontSize={18}> {this.props.text} </Text>
        </Box>
      </Flex>
    );
  }

}

export default Page;
