export default function Contact() {
  <>
    <div className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 transform-none">
      <h5 className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Contact us
      </h5>
      <form action="#" className="mb-6">
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Let us know how we can help you"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
        >
          Send message
        </button>
      </form>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          info@company.com
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <a href="#" className="hover:underline">
          212-456-7890
        </a>
      </p>
    </div>
  </>;
}