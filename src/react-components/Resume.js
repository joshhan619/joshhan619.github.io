import React from "react";
import self_pic from "./josh.jpg";
import axios from "axios";
import {
  Box,
  Heading,
  Button,
  Image,
  Text,
  Flex,
  Link
} from "rebass";
import {Divider, Spacer} from "./theme.js"

function downloadResume() {

  axios({
    method: "get",
    url: "http://localhost:9000/download",
    responseType: "arraybuffer"
  })
  .then((res) => {
    const file = new File([res.data], {type: "application/pdf"})

    let url = window.URL.createObjectURL(file);
    let a = document.createElement("a");
    a.href = url;
    a.download = 'Joshua\ Han\ Resume.pdf';
    a.click();
  })
  .catch((err) => {
    console.log(err);
  })
}

function Resume() {

  return(
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={3}>
      <Image
        src={self_pic}
        sx={{
          width: [ '100%', '50%' ],
          borderRadius: 8,
        }}/>
      <Button variant='primary'
        onClick = {()=>downloadResume()}
        my={2}
        width={1/2}
        sx={{
          ':hover': {
            backgroundColor: 'secondary'
          }
        }}>
        Download Resume
      </Button>

      <Box
        p={1}>
        <Heading variant='spaced_heading'>Education</Heading>
        <Divider/>
        <Text fontWeight="bold">University of Toronto Schools</Text>
        <Text fontStyle="italic" mb={2}>2014 - 2018</Text>
        <Text mb={2}>Graduated in the top 10% of students. GPA 4.0. I was an active member of my school’s math and computer science communities. I was the executive of the high school math team, a math tutor for 4 years, and the co-executive of the UTS Programming Club. I was the recipient of the 2015 Global Star Award and the 2016 Dr. T.M. Porter Scholarship in Mathematics for excellence in mathematics.
        </Text>
        <Text fontWeight="bold">University of Toronto Computer Science Specialist</Text>
        <Text fontStyle="italic" mb={2}>2018 - Present</Text>
        <Text mb={2}>Designated as a University of Toronto Scholar, given to only the most outstanding new students to UofT, and awarded $7500 in scholarship.</Text>
        <Spacer/>
        <Heading variant='spaced_heading'>Work Experience</Heading>
        <Divider/>
        <Text fontWeight="bold">Research Intern at Ryerson University CASPAL</Text>
        <Text fontStyle="italic" mb={2}>June 10, 2019 – August 31, 2019</Text>
        <Text>Worked under Dr. Xiao-Ping Zhang on a research project in the area of signal/data information processing algorithms and applications. During this project I debugged code, wrote documentation, and developed a desktop app to download daily stock and futures data from IQFeed.
        </Text>
        <Heading variant='spaced_heading'>Projects</Heading>
        <Divider/>
        <Text fontWeight="bold" mb={2}>Interactive Webpage for Phonology Topic Quizzes</Text>
        <Text mb={2}>In a team of two other students, I created a React website that implements a secure account system. The web application is an online quiz system designed for students or any visitor to practice phonology problem sets, as well as for professors to generate questions and track students’ learning progress. This project uses the Express.js web framework, Material-Ui, Mongoose.js and React Router libraries.
        </Text>
        <Heading variant='spaced_heading'>Skills</Heading>
        <Divider/>
        <ul>
          <li>Excellent organizational skills</li>
          <li>Strong communication and team-working skills</li>
          <li>Experienced in using these frameworks and libraries:</li>
          <ul>
            <li>Express.js and Node.js</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>MongoDB and Mongoose.js</li>
            <li>mySQL</li>
          </ul>
          <li>Proficient in using these tools:</li>
          <ul>
            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
            <li>Adobe Photoshop</li>
            <li>Git</li>
            <li>Android Studio</li>
          </ul>
        </ul>
      </Box>
    </Flex>

  );

}


export default Resume;
