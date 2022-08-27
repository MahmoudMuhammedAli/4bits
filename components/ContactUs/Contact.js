import React from "react";
import PhoneInput from "react-phone-number-input";

export default function Contact() {
  const [value, setValue] = React.useState();
  return (
    <div className="w-screen p-4 overflow-y-auto bg-white">
      <div className="flex justify-center text-3xl font-semibold my-5 text-sec">
        <h1>Contact us</h1>
      </div>
      <form action="#" className="mb-6">
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 ue-500 blue-500"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone
          </label>
          <PhoneInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 ue-500 blue-500"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Subject
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 ue-500 blue-500"
            placeholder="Let us know how we can help you"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 00 ray-400 ue-500 blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-sec hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 -700 focus:outline-none ue-800 block"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
