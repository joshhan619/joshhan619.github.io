import React from "react";
import {
  Box,
  Heading,
  Button,
  Image,
  Text,
  Flex,
  Link
} from "rebass";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class PageBlurb extends React.Component {
  render() {
    return(
      <Box
        width={1}
        padding={3}
        my={2}
        mx={0}
        sx={{
          'border-style': 'groove',
        }}>
        <Text fontSize={18}> {this.props.text.substring(0, 200)}
        </Text>
        <Link href={this.props.pagename}> Read more ...
        </Link>
      </Box>

    );
  }

}

export default PageBlurb;
