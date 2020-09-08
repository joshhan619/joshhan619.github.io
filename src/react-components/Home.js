import React from "react";
import PageBlurb from "./PageBlurb.js";
import {Box} from "rebass";

class Home extends React.Component {
  render() {
    return(
      <Box width={1}>
        {this.props.articles.map((article, index) => (
          <PageBlurb
            key={index}
            title={article.title}
            pagename={article.pagename}
            text={article.text}/>
        ))}
      </Box>
    );
  }

}


export default Home;
