import React from "react";
import {Flex, Box, Link, Image} from "rebass";
import mail from "./mail.png";
import phone from "./phone.png";
import github from "./GitHub-Mark-64px.png"

function Footer() {
  return(
    <Flex
      width={1}
      alignItems="center"
      flexDirection="column"
    >
      <Box height={60}/>
      <Box mb={20}>
        <Link href="mailto:joshua.han@mail.utoronto.ca" px={1}>
          <Image src={mail} width={25}/>
        </Link>
        <Link href="tel:437-345-3956" px={1}>
          <Image src={phone} width={25}/>
        </Link>
        <Link href="https://github.com/joshhan619" px={1}>
          <Image src={github} width={25}/>
        </Link>
      </Box>
    </Flex>
  );
}

export default Footer;
