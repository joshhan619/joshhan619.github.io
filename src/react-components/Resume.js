import React from "react";
import self_pic from "./josh.jpg";
import {
  Box,
  Heading,
  Button,
  Image,
  Text,
  Flex
} from "rebass";
import {Divider, Spacer} from "./theme.js"
import resume from "./Joshua Han Resume.pdf"

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
      <a width={1/2} href={resume} download="Joshua Han Resume.pdf">
        <Button variant='primary'
          my={2}
          sx={{
            ':hover': {
              backgroundColor: 'secondary'
            }
          }}>
          Download Resume
        </Button>
      </a>

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
        <Text>Worked under Dr. Xiao-Ping Zhang on a research project in the area of signal/data information processing algorithms and applications. During this project I debugged code, wrote documentation, and developed a Java web app to download daily stock and futures data from IQFeed. This allowed the research team to query thousands of 1-minute and daily historical ticker data, fundamental data on US stocks, and real-time tick-by-tick data on US and Canadian equities.
        </Text>
        <Heading variant='spaced_heading'>Projects</Heading>
        <Divider/>
        <Text fontWeight="bold" mb={2}>Interactive Webpage for Phonology Topic Quizzes</Text>
        <Text mb={2}>I created a React website that implements a secure account system. The web application is an online quiz system designed for students or any visitor to practice phonology problem sets, as well as for professors to generate questions and track students’ learning progress. This project uses the Express.js web framework, Material-Ui, Mongoose.js and React Router libraries. The project is hosted on <a href="https://accelsnow.com/">https://accelsnow.com/</a>.
        </Text>
        <Heading variant='spaced_heading'>Hackathons</Heading>
        <Divider/>
        <Text fontWeight="bold">2019 Chengdu80 Global Financial Product Design and R&D competition</Text>
        <Text mb={2}> Won Best Innovator award for a novel research search tool in an international fintech competition hosted in Chengdu, China. </Text>
        <Text fontWeight="bold">2020 UofTHacks</Text>
        <Text mb={2}>Won best Lifestyle Hack for developing a community focused dieting and fitness app.</Text>

        <Heading variant='spaced_heading'>Skills</Heading>
        <Divider/>
        <ul>
          <li>Excellent organizational skills</li>
          <li>Strong communication and team-working skills</li>
          <li>Experienced in:</li>
          <ul>
            <li>ExpressJS</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>CircleCI</li>
            <li>PostgreSQL</li>
          </ul>
          <li>Proficient in:</li>
          <ul>
            <li>Microsoft Office (Word, Excel, PowerPoint)</li>
            <li>Adobe Photoshop</li>
            <li>Git</li>
            <li>Android Studio</li>
          </ul>
        </ul>
        <Heading variant='spaced_heading'>Relevant Courses</Heading>
        <Divider/>
        <Text>CGPA: 3.40</Text>
        <ul>
          <li>CSC309 Programming on the Web (A+)</li>
          <li>CSC311 Intro to Machine Learning (A+)</li>
          <li>CSC369 Operating Systems (A)</li>
          <li>CSC418 Computer Graphics (A+)</li>
          <li>CSC420 Intro to Image Understanding (A+)</li>
        </ul>
      </Box>
    </Flex>

  );

}


export default Resume;
