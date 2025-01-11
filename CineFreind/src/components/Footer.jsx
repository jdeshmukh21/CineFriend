import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-3 border-t border-gray-300 dark:border-gray-700">
      <div className="w-full mx-auto max-w-screen-xl px-3 md:flex md:items-center md:justify-between">
        {/* Footer Logo and Rights */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © 2025{" "}
            <Link to="/" className="hover:underline font-semibold">
              CineMate
            </Link>
            . All Rights Reserved.
          </span>
        </div>

        {/* Social Links */}
        <ul className="flex justify-center md:justify-end space-x-3 text-sm font-medium text-gray-600 dark:text-gray-400">
          <li>
            <a href="https://www.instagram.com/jayd__001/" className="hover:text-blue-500 hover:underline" target="_blank"
            rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jaspal-deshmukh-001574152/" className="hover:text-blue-500 hover:underline" target="_blank"
            rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {/* <li>
            <a href="#" className="hover:text-blue-500 hover:underline">
              Contact
            </a>
          </li> */}
        </ul>
      </div>

      {/* Personal Info */}
      <div className="w-full mx-auto max-w-screen-xl px-2 mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          Created by <span className="font-semibold">Jaspal Deshmukh</span>. 
          You can reach me at{" "}
          <a
            href="mailto:jmdeshmukh@23gmail.com"
            className="text-blue-500 hover:underline"
          >
            jmdeshmukh@23gmail.com
          </a>
          .
        </p>
        <p className="mt-1">
          Check out my{" "}
          <a
            href="https://github.com/jdeshmukh21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub Profile
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
