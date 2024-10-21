import React from 'react';
import {
  Container,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { makeStyles } from '@mui/styles';
// Sample data for work experiences
const workExperiences = [
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Senior Data Scientist',
    companyName: 'Kunato.ai',
    duration: 'July 2024 - Present',
    teams : [
            {
              name : "Content genome Team",
              details:
              [
                "Extending the capabilities of the content pricing model to multimodal setting in order to process audios and videos semantic information",
                "Designing the end-to-end pipeline for handling the audio and video content and augmenting it with the current content pricing model for price adjustments"
              ]
            }
            
            ]
  },
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Data Scientist',
    companyName: 'ShareChat',
    duration: 'July 2021 - May 2024',
    teams : [
            {
              name : "Trust and Safety Team (TnS)",
              details:
              [
                "Spearheading the TnS DS team, implementing scalable DS models for real-time NSFW content moderation across visual, audio, and text platforms, handling 100M+ daily interactions on Moj from 200M+ users.",
                "Drove a 55% moderation cost reduction across key tools by pioneering industry-leading MLOps practices, including advanced user behavior analytics, feature engineering, predictive analytics, anomaly detection, layered content filtration, and automated ML pipelines. ",
                "Attained a 30% increase in precision and an annual saving of 5 crore INR."
              ]
            },
            {
              name: "Content and User Understanding Team",
              details:
              [
                "Contributed to the Moj recommendation team by fusing semantic and user features into candidate generators for 5B posts and 200M users, boosting feed relevance and leading to a 2% increase in Daily Active Users (DAU).",
                "Conducted an in-depth analysis and development of feature embeddings and classification models for extensive UGC data. This involved meticulous feature engineering, user modeling, and content comprehension, all aimed at refining the precision of our analytical frameworks."
              ]
            }
            ]
  },
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Undergraduate Researcher',
    companyName: 'IIT Jodhpur',
    duration: 'Dec 2019 - May 2021',
    teams : [
            {
              name : "Vision Language and Learning Group, IIT Jodhpur",
              details:
              [
                "Developed an optimization framework using meta learning paradigm by finding the optimal solutions for identifying consistent unseen relationships in a bag of images, outputting paired bounding boxes across an image set.",
                "Due to the NP-Hard complexity of finding the optimal solution, adopted a greedy inference algorithm to select approximately the best solution in realtime. Achieved state-of-the-art accuracy of 84.07% on VrR-VG dataset.",
                "Paper published at esteemed ICCV conference as a first author for this work."
              ]
            }
            
            ]
  },
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Software Engineer Intern',
    companyName: 'MathWorks',
    duration: 'May 2020 - July 2020',
    teams : [
            {
              name : "",
              details:
              [
                "Designed and developed an autonomous Feature Based Testing Seg-v analyzer tool from scratch to be used by 1000+ MathWorks Community.",
              ]
            }
            
            ]
  },
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Research Intern',
    companyName: 'IIT Delhi',
    duration: 'May 2019 - July 2019',
    teams : [
            {
              name : "MAVI, IIT Delhi",
              details:
              [
                "Innovated a wearable device in collaboration with team MAVI, IIT Delhi for the task of vision and communication for visually impaired people.",
                "Enabled functionalities like Speech Recognition, Object Detection, Depth Estimation, Face Recognition, OCR, Image Captioning, and Video Calling. Increased the average precision of the animal detection model by 25%."
              ]
            }
            
            ]
  },
  {
    companyLogo: 'https://via.placeholder.com/100',
    jobTitle: 'Undergraduate Student',
    companyName: 'IIT Jodhpur',
    duration: 'Aug 2017 - May 2021',
    teams : [
            {
              name : "Student",
              details:
              [
                "Completed my undergrad from IIT Jodhpur in Computer Science and Engineering from 2017 - 2021.",
              ]
            },
            {
              name : "Teaching Assistant",
              details:
              [
                "2 times Teaching Assistant for the course of Data Structure and Practices offered to executive M.Tech students at IIT Jodhpur.",
              ]
            },
            {
              name : "President - Robotics and Automation Club",
              details:
              [
                "participated and won in several Inter IIT Tech meet competitions and hackathons",
                "organized robotics and automation competitions and hackathons in IIT Jodhpur tech fests and inter college competitions"
              ]
            },
            {
              name : " Vice President - Robotics and Automation Club",
              details:
              [
                "I nurtured the knowledge of robotics, AI, and autonomous agents to the students of IIT Jodhpur"
              ]
            },
            
            ]
  }

];

// Custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  timelineContent: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
  },
  timelineDot: {
    backgroundColor: '#fff',
    border: '2px solid #000',
  },
  timelineConnector: {
    backgroundColor: '#000',
  },
  listItemIcon: {
    minWidth: '24px', // Adjusted as needed
    color: '#000',
    marginTop: '0px', // Aligns the icon vertically with the text
  },
  listText: {
    color: '#000',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
    },
  },
}));
function WorkProfile() {
  const classes = useStyles(); // Initialize styles

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        minHeight: '100vh',
        padding: { xs: '40px 20px', sm: '60px 40px', md: '80px 60px' },
        width: '100%', // Ensures full width
        boxSizing: 'border-box', // Includes padding in width calculations
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          color="#000"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: { xs: 4, sm: 6 } }}
        >
          My Work Profile
        </Typography>
        <Timeline position="right">
          {workExperiences.map((experience, index) => (
            <TimelineItem key={index}>
              {/* Timeline Opposite Content (Date Section) */}
              <TimelineOppositeContent
                sx={{
                  m: 'auto 0',
                  color: '#000',
                  display: { xs: 'none', md: 'block' }, // Hide on small screens
                  flex: { xs: '0 0 0', md: '0 0 150px' }, // Set narrower width on medium and up
                }}
              >
                <Typography variant="body2" color="inherit">
                  {experience.duration}
                </Typography>
              </TimelineOppositeContent>

              {/* Timeline Separator */}
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: '#fff',
                    border: '2px solid #000',
                  }}
                >
                  <Avatar
                    src={experience.companyLogo}
                    alt={`${experience.companyName} Logo`}
                    sx={{ width: 40, height: 40 }}
                  />
                </TimelineDot>
                {index !== workExperiences.length - 1 && (
                  <TimelineConnector
                    sx={{
                      backgroundColor: '#000',
                    }}
                  />
                )}
              </TimelineSeparator>

              {/* Timeline Content Section */}
              <TimelineContent
                sx={{
                  flex: { xs: '1 1 100%', md: '1 1 300px' }, // Wider on medium and up
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    color="#000"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                    }}
                  >
                    {experience.jobTitle}
                  </Typography>
                  <Typography variant="subtitle1" color="#000" gutterBottom>
                    {experience.companyName}
                  </Typography>
                  {/* Show duration on mobile */}
                  <Typography
                    variant="body2"
                    color="#000"
                    sx={{ display: { xs: 'block', md: 'none' }, mb: 2 }}
                  >
                    {experience.duration}
                  </Typography>
                  {/* Teams Subsections */}
                  {experience.teams.map((team, teamIndex) => (
                    <Box key={teamIndex} sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        color="#000"
                        sx={{ fontWeight: 'bold', mb: 1 }}
                      >
                        {team.name}
                      </Typography>
                      <List sx={{ pl: 2 }}>
                        {team.details.map((detail, detailIndex) => (
                          <ListItem
                            key={detailIndex}
                            disableGutters
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              paddingY: '4px',
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: '16px', // Reduced minWidth
                                color: '#000',
                                marginTop: '12px', // Aligns the smaller icon
                              }}
                            >
                              <FiberManualRecordIcon
                                sx={{ fontSize: '8px' }} // Custom small font size
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={detail}
                              primaryTypographyProps={{
                                variant: 'body1',
                                sx: {
                                  color: '#000',
                                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default WorkProfile;