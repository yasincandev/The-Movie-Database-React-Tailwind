import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { navigation, scrollToTop } = useGlobalContext();
  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
            <div className="flex w-full items-center justify-between md:w-auto">
              <div>
                <a href="/">
                  <img
                    className="h-8 w-auto"
                    src="https://seeklogo.com/images/B/Batman_Begins-logo-7DA14B4C4D-seeklogo.com.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
            <div className="ml-10 flex flex-col items-baseline space-x-4">
              <Link
                to="/"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/movies"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Movies
              </Link>
              <Link
                to="/tv"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Tv Shows
              </Link>
              <Link
                to="/trending"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                Trending
              </Link>
              <Link
                to="/people"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                People
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg flex flex-col  gap-3 bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <a href="/">
                  <img
                    className="h-8 w-auto"
                    src="https://seeklogo.com/images/B/Batman_Begins-logo-7DA14B4C4D-seeklogo.com.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <HiOutlineX className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="p-4 hover:text-slate-800">
              <div className=" flex flex-col items-baseline gap-5">
                <Link
                  to="/"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  to="/movies"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Movies
                </Link>
                <Link
                  to="/tv"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Tv Shows
                </Link>
                <Link
                  to="/trending"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  Trending
                </Link>
                <Link
                  to="/people"
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  People
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
