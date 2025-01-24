import React from "react";
import { Container, Grid } from "@mui/material";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import VideoIcon from "@mui/icons-material/OndemandVideo";
import PracticeIcon from "@mui/icons-material/CheckCircleOutline";
import StudyIcon from "@mui/icons-material/Book";
import PathIcon from "@mui/icons-material/ArrowForward";

const Features = () => {
  const featuresData = [
    {
      title: "Comprehensive Video Lessons",
      description:
        "Access a wide range of educational video lessons covering various subjects. Learn at your own pace and reinforce your understanding through engaging visuals and expert explanations.",
      icon: <VideoIcon />,
    },
    {
      title: "Interactive Practice Exercises",
      description:
        "Sharpen your skills with interactive practice exercises designed to reinforce key concepts. Get instant feedback and track your progress to identify areas for improvement.",
      icon: <PracticeIcon />,
    },
    {
      title: "Extensive Study Materials",
      description:
        "Explore a vast library of study materials, including textbooks, study guides, and reference materials. Enhance your learning experience and dive deeper into subjects of interest.",
      icon: <StudyIcon />,
    },
    {
      title: "Personalized Learning Paths",
      description:
        "Tailor your learning experience with personalized learning paths. Set your goals, track your progress, and receive customized recommendations to optimize your learning journey.",
      icon: <PathIcon />,
    },
  ];

  return (
    <section className="py-12">
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-2">
                Elevate your learning experience
              </h2>
              <p className="text-gray-400 italic">
                Discover the key features that make our educational resource
                website stand out from the rest.
              </p>
            </div>
            <div>
              <Card className="mt-6 w-76 shadow-2xl">
                <CardHeader color="blue" className="relative h-66">
                  <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="img-blur-shadow"
                    layout="fill"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className=" text-blue"
                  >
                    Community Collaboration
                  </Typography>
                  <Typography className="justify-evenly text-justify">
                    Engage with a vibrant community of learners, where you can
                    ask questions, discuss topics, and collaborate with peers.
                    Benefit from shared knowledge and experiences.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {featuresData.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <div className="max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-2xl ">
                    <div className="flex items-center  w-12 h-12 bg-primary text-contrast rounded-full">
                      {feature.icon}
                    </div>

                    <h5 className="text-blue mb-2">{feature.title}</h5>
                    <h6 className=" text-gray-500 justify-evenly text-justify hover:text-justify">
                      {feature.description}
                    </h6>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;
