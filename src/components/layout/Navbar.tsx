import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { ButtonShadcn } from "../ui/button";
import { GoSun } from "react-icons/go";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const Nav = () => {
  const [currentTheme, setCurrentTheme] = useState(Theme.Light);

  useEffect(() => {
    // Retrieve the theme from local storage on component mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && Object.values(Theme).includes(storedTheme as Theme)) {
      setCurrentTheme(storedTheme as Theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === Theme.Light) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    console.log("Theme set to", newTheme);
  };
  return (
    <nav className="w-full   mx-auto   text-darkCharcoal z-20 fixed">
      <ul className="lg:flex hidden justify-center gap-x-28 my-auto  font-medium text-lg bg-white/85 dark:bg-gunMetal dark:text-lightCharcoal w-fit mx-auto px-10 py-4 rounded-b-md">
        <li className="hover:scale-110 ">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:scale-110 ">
          <Link to="/projects" className="  ">
            Projects
          </Link>
        </li>
        <li className="hover:scale-110 ">
          <Link to="/contact">Contact</Link>
        </li>
        <ButtonShadcn variant={"ghost"} className="" onClick={toggleTheme}>
          {currentTheme === Theme.Dark ? <FaMoon size={25} className=" text-white" /> : <GoSun size={25} />}
        </ButtonShadcn>
      </ul>
      <Sheet>
        <SheetTrigger className="lg:hidden w-full grid place-items-end pt-6 pr-6 ">
          <RxHamburgerMenu size={45} className={` ${currentTheme === Theme.Dark ? "text-white bg-darkCharcoal/50 rounded-sm px-2 py-2" : "text-darkCharcoal"}`} />
        </SheetTrigger>
        <SheetContent className=" ">
          <ButtonShadcn variant={"ghost"} className="" onClick={toggleTheme}>
            {currentTheme === Theme.Dark ? <FaMoon size={25} className=" text-white" /> : <GoSun size={25} />}
          </ButtonShadcn>
          <ul className="flex flex-col h-full  dark:bg-darkCharcoal dark:text-lightCharcoal w-full py-20 mx-auto text-center justify-between font-medium text-lg ">
            <li className="hover:scale-110 ">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:scale-110 ">
              <Link to="/projects" className="  ">
                Projects
              </Link>
            </li>
            <li className="hover:scale-110 ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Nav;
