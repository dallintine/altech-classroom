import React from "react";
import {
  Container,
  Grid,
} from "@mui/material";


const SubjectCategoriesSection = () => {
  const categoriesData = [
    {
      title: "Mathematics",
      description:
        "Explore the world of numbers, equations, and problem-solving.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#449966" className="bi bi-plus-slash-minus" viewBox="0 0 16 16"> <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708ZM4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1Zm5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12Z"/> </svg>,
    },
    {
      title: "Science",
      description:
        "Discover the wonders of the natural world and scientific principles.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#449966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2" /> <path d="M8.5 2h7" /> <path d="M7 16h10" /> </svg>,
    },
    {
      title: "History",
      description:
        "Uncover the past and learn about significant events and civilizations.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#449966" className="bi bi-clock-history" viewBox="0 0 16 16"> <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/> <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/> <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/> </svg>,
    },
    {
      title: "Language Arts",
      description:
        "Enhance your language skills and dive into literature and writing.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#449966" className="bi bi-globe2" viewBox="0 0 16 16"> <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/> </svg>,
    },
    {
      title: "Computer Science",
      description: "Delve into the world of programming and technology.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#449966" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
    },
    {
      title: 'Geography',
      description: 'Explore the world and learn about different countries, cultures, and landscapes.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#449966" className="bi bi-compass" viewBox="0 0 16 16"> <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/> </svg>,
    },
  ];

  return (
    <section className="py-12 ">
      <Container maxWidth="lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Explore a World of Knowledge
          </h2>
          <p className="text-gray-600">
            Discover, Learn, and Excel in Various Subjects
          </p>
        </div>

        <Grid container spacing={4}>
          {categoriesData.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-2xl">
                {category.icon}
                <a href="#">
                  <h5 className="my-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {category.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">
                {category.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  See our guideline
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </div>

              {/* <Card className="h-full drop-shadow-2xl">
                <CardContent className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary text-contrast rounded-full mb-2">
                    {category.icon}
                  </div>
                  <Typography variant="h6" gutterBottom>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {category.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <a size="small">Learn More</a>
                </CardActions>
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SubjectCategoriesSection;
