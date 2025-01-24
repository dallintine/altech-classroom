import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-normal text-lg leading-3 text-blue cursor-pointer pb-4">
        About
      </p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12 justify-center">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            We are on a mission to provide high-quality educational resources to
            students of all ages and backgrounds.
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600  mt-6">
            EdInfoHub is a comprehensive platform designed to empower Ghanaian
            students in their learning journey. With a vast collection of free
            educational videos, practice exercises, and study materials, we
            provide a valuable resource for students from primary to senior high
            school.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
            alt="people discussing on board"
          />
        </div>
      </div>

      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-12 h-12 bg-blue rounded-full flex justify-center items-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
              alt="flag"
            />
          </div>

          <div className="z-20 w-12 h-12 bg-blue rounded-full flex justify-center items-center">
            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />
          </div>

          <img
            className="z-20 sm:block hidden"
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
            alt="users"
          />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">
            Founded
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            2023
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">
            Constant Content Updates
          </p>
          <p className="font-normal text-base leading-6 text-gray-600  mt-6">
            Our website will feature quality educational content.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">
            Users Community
          </p>
          <p className="font-normal text-base leading-6 text-gray-600  mt-6">
            We hope to be able to reach a larger audience and leave a lasting
            impression with our project.
          </p>
        </div>
      </div>
      <div className="sm:hidden block relative mt-8">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
            alt="user"
          />
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">
            400k User
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-200 mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white">
            Our Mission
          </h2>

          <h2 className="my-2 text-lg font-semibold text-gray-400">
            Our goal is to make learning:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-green  flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              accessible
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-green flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              engaging and
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-green flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              enjoyable for everyone
            </li>
          </ul>
          <p className="text-gray-700  mt-8">
            Join us on this educational journey and unlock your full potential!
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 hover:bg-hoverDark hover:text-white text-blue font-bold py-3 px-6 rounded-lg mt-6"
          >
            Start Exploring
          </a>
        </div>
        <div className="w-full lg:w-6/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <img
                  className="mr-6"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg4.svg"
                  alt="team card"
                />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                  Resources
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                  Our site features an extensive library of educational videos,
                  exercises, and study materials.
                </p>
              </div>
            </div>

            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg5.svg"
                  alt="board card"
                />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                  Tools
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                  Interactive learning tools to enhance understanding and
                  retention.
                </p>
              </div>
            </div>

            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg6.svg"
                  alt="press card"
                />
              </div>
              <div className="">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 dark:text-white">
                  Focus
                </p>
                <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-200">
                  Personalized learning recommendations based on individual
                  progress and interests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
