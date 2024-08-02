import Link from "next/link";
import PATHROUTES from "../../helpers/PathRoutes";

const Footer = () => {
  return (
    <footer className="relative bg-white shadow dark:bg-gray-800 p-6 mx-auto">
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="flex place-items-stretch">
          <Link href={PATHROUTES.HOME}>
            <p>MY LITTLE STORE</p>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:mx-6 text-center">
          {/* <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Company</h2> */}
          <ul className="flex flex-col md:flex-row md:mx-6 my-2 text-gray-700 dark:text-gray-200">
            <li className="mb-4 md:mb-0 md:mx-4">
              <Link href={PATHROUTES.ABOUT} className="hover:text-blue-500 dark:hover:text-blue-400">
                About
              </Link>
            </li>
            <li className="mb-4 md:mb-0 md:mx-4">
              <Link href={PATHROUTES.CONTACT} className="hover:text-blue-500 dark:hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:block">
          <div className="flex space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full text-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
