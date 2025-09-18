import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
     
      <img
        src="https://blog.mobnia.com/content/images/size/w2000/2020/04/1-c94SpnDXD8imHLUW0fl-ng.jpeg"
        alt="Landing"
        className="absolute inset-0 w-full h-full object-cover"
      />

     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 text-white">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to <span className="text-yellow-300">MyApp</span>
        </h1>
        <p className="text-lg mb-8 leading-relaxed drop-shadow-md max-w-2xl">
          This is the main landing page of the application.  
          Navigate through the menu to explore more about us or contact us.
        </p>
        <div className="space-x-4">
          <a
            href="/about"
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/contact-form"
            className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
