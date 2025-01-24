import React from "react";

const CTA = () => {
  return (
    <div className="container m-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
        
        <div className="w-8/12 text-2xl">
        <h2 className=" text-2xl text-green font-bold">Get Started Today!</h2> <br /> 
          <span className="flex text-blue">
          Sign up for a free account and access a world of educational resources.
          </span>
        </div>
        
        <a
            href="#"
            class="relative  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue hover:bg-hoverDark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full  bg-hoverLight hover:bg-blue"></span>
            Sign Up Now
           
          </a>
      </div>
    </div>
  );
};

export default CTA;
