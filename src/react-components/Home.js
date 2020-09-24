import React from "react";
import {Flex, Text, Image} from "rebass";
import home_pic from "./homescreen.jpg";

class Home extends React.Component {
  render() {
    return(
      <Flex width={1} flexDirection="column" alignItems="center">
        <Image
          src={home_pic}
          my={20}
          sx={{
            width: [ '100%', '50%' ]
          }}
        />
        <Text
          width={[1, 0.8]}
          fontSize={20}
          fontStyle="italic"
          sx={{textAlign: "center"}}>
        My name is Joshua Han. I am a CS Specialist undergraduate at UofT.
        My passion is in problem solving and making things work!
        Currently, I am interested in the fields of Computer Vision and Computer Graphics.
        <br/>
        <hr/>
        I am searching for a job/internship for the summer of 2021. Do not be afraid to contact me through my email <a href="mailto:joshua.han@mail.utoronto.ca">joshua.han@mail.utoronto.ca</a> or call me at 437-345-3956.
        </Text>
      </Flex>
    );
  }

}


export default Home;
