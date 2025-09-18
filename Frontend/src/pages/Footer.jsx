import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white dark:text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        
     
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-black">Mock Query</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Mock Query is your go-to platform for managing tasks efficiently and intuitively. Our mission is to empower individuals and teams to achieve more.
          </p>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3 text-2xl">Quick Links</h4>
          <ul className="space-y-2 text-gray-200 dark:text-gray-600">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact-form" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

      
        <div className="text-grey-600">
          <h4 className="font-semibold mb-3 text-2xl text-grey-600">Contact Us</h4>
          <p className="text-gray-200 dark:text-gray-400 hover:text-yellow-400 transition text-grey-600">
            📞 +91 98765 43210
          </p>
          <p className="text-gray-200 dark:text-gray-400 hover:text-yellow-400 transition text-grey-600">
            ✉️ support@sviet.com
          </p>
        </div>
      </div>

      
      <div className="text-center text-gray-100 dark:text-black text-sm mt-10">
        © {new Date().getFullYear()} Mock Query. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
