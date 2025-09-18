import React, { useState } from "react";
import axios from "axios";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/contactForm",
        formData
      );
      console.log("Data Submitted Successfully", res);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", query: "" }); // reset
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };



  return (
    <>

     
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg w-[500px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-red-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Query</label>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                placeholder="Enter your query"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  );
};

export default ContactForm;
