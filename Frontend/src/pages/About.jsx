import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          About Super 60 Sviet
        </h1>
        <p className="text-gray-700 mb-6 text-center leading-relaxed">
          Super 60 SViet is a cutting-edge technology initiative aimed at revolutionizing learning and productivity in the digital era. Our platform integrates smart tools, interactive content, and personalized tracking to help individuals and teams achieve their goals efficiently.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to empower users with innovative solutions that simplify complex tasks, enhance learning, and promote creativity. Super 60 SViet strives to provide a seamless, user-friendly experience for both students and professionals.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Key Features
        </h2>
        <ul className="space-y-2 mb-6 list-disc list-inside text-gray-700">
          <li>Interactive learning modules and tutorials.</li>
          <li>Smart task management and progress tracking.</li>
          <li>Customizable user dashboard and analytics.</li>
          <li>Collaborative tools for team projects.</li>
          <li>Accessible across web and mobile platforms.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700">
          Have questions or want to know more? Reach out to us at{" "}
          <a
            href="mailto:support@super60sviet.com"
            className="text-blue-600 font-medium hover:underline"
          >
            support@super60sviet.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
