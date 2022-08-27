import React from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function Contact() {
  const [phoneValue, setPhoneValue] = React.useState("");
  const [country, setCountry] = React.useState("EG");
  function isVaildPhone(value) {
    if (isValidPhoneNumber(value)) {
      if (!isValidPhoneNumber(value + "0")) return true;
      else return false;
    } else return false;
  }

  return (
    <div className="flex justify-center">
      <div className="w-screen md:w-[40vw] justify-center p-4 overflow-y-auto bg-white">
        <div className="flex justify-center text-3xl font-semibold my-5 text-sec">
          <h1>Contact us</h1>
        </div>
        <form action="#" className="mb-6">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ray-400 ue-500 blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div className="mb-6">
            <label
              for="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone
            </label>
            <div>
              <PhoneInput
                className="text-md p-2.5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  ray-400 ue-500 blue-500"
                placeholder="Enter phone number"
                defaultCountry={country}
                value={phoneValue}
                onChange={setPhoneValue}
              />
              {phoneValue ? (
                isVaildPhone(phoneValue) ? (
                  <div className="text-green-500">Valid</div>
                ) : (
                  <div className="text-red-500">Invalid</div>
                )
              ) : null}
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Reasons
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 00 ray-400 ue-500 blue-500"
              placeholder="name@company.com"
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-sec font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 -700 focus:outline-none ue-800 block"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
