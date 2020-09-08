import React from "react";
import {
  Box,
  Text,
  Link
} from "rebass";

class PageBlurb extends React.Component {
  render() {
    return(
      <Box
        width={1}
        padding={3}
        my={2}
        mx={0}
        sx={{
          'borderStyle': 'groove',
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
