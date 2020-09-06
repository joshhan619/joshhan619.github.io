import React from "react";
import PageBlurb from "./PageBlurb.js";
import {Flex, Box} from "rebass";

import axios from "axios";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  downloadArticles() {
    axios({
      method: "get",
      url: "http://localhost:9000/articles"
    })
    .then((res) => {
      this.setState({articles: res.data});
      console.log(this.state.articles);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
      this.downloadArticles();
  }

  render() {
    return(
      <Box width={1}>
        {this.state.articles.map((article, index) => (
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
