import React from "react";
import {
  Heading,
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
        <Heading> {this.props.title} </Heading>
        <hr/>
        <Link href={this.props.pagename}> Read more ... </Link>
      </Box>

    );
  }

}

export default PageBlurb;
