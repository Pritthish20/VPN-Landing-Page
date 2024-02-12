import React from "react";
import fire from "../assets/fire.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border- dark:border-gray-600 ">
        <div className="max-w-screen-3xl flex flex-wrap items-center justify-around mx-auto py-4">
          <a
            href="/"
            className=" mt-3 ml-20 flex items-center space-x-3 rtl:space-x-reverse self-start "
          >
            <img src={fire} className="h-12" alt="Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
              Lasles<b>VPN</b>
            </span>
          </a>
          <div className=" w-1/4 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-start">
            <a
              href="/"
              class="px-20 dark:text- hover:underline pt-2 text-2xl font-semibold text-gray-900 hover:text-main-orange"
            >
              Sign In
            </a>
            <button
              type="button"
              className=" min-w-48 min-h-12 text-main-orange bg-white hover:bg-main-orange hover:text-white rounded-full text-2xl font-bold px-4 py-2 text-center dark:bg-second-orange dark:hover:bg-second-orange border-main-orange border-2 hover:border-white"
            >
              Sign Up
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-8 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-main-orange md:p-0 md:dark:hover:text-second-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-8 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-main-orange md:p-0 md:dark:hover:text-second-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-8 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-main-orange md:p-0 md:dark:hover:text-second-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl"
                >
                  Prices
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-8 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-main-orange md:p-0 md:dark:hover:text-second-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl"
                >
                  Testimolials
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 px-8 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-main-orange md:p-0 md:dark:hover:text-second-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-xl"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
