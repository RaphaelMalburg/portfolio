import { Link, useLocation } from "react-router-dom";
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
// ... (imports)

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(Theme.Light);

  const location = useLocation();
  const isRoot = location.pathname === "/";
  const isContact = location.pathname === "/contact";

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
    <nav className="w-full grid grid-cols-2 mx-auto text-darkCharcoal z-20 fixed bg-gradient-to-b from-slate-200/70 via-slate-200/60 to-slate-200/10 dark:from-slate-900/70 dark:via-slate-800/60 dark:to-slate-800/10">
      <div className="container pt-10 m-3">
        {currentTheme === Theme.Dark ? (
          isRoot ? (
            <a href="#hero">
              {" "}
              <img src="logoTriangleDark.svg" className="w-[60px] h-[60px]" alt="logo" />
            </a>
          ) : (
            <Link to="/">
              <img src="logoTriangleDark.svg" className="w-[60px] h-[60px]" alt="logo" />
            </Link>
          )
        ) : isRoot ? (
          <a href="#hero">
            {" "}
            <img src="logoTriangleDarkLight.svg" className="w-[60px] h-[60px]" alt="logo" />
          </a>
        ) : (
          <Link to="/">
            <img src="logoTriangleDarkLight.svg" className="w-[60px] h-[60px]" alt="logo" />
          </Link>
        )}
      </div>
      <ul className="lg:flex my-auto hidden justify-end gap-x-12 text-lg dark:text-lightCharcoal w-fit mx-auto px-10 py-4 rounded-b-md">
        {isContact ? "" : <Link to="/contact">Contact</Link>}

        <ButtonShadcn variant={"ghost"} className="" onClick={toggleTheme}>
          {currentTheme === Theme.Dark ? <FaMoon size={25} className="text-white" /> : <GoSun size={25} />}
        </ButtonShadcn>
      </ul>
      <Sheet>
        <SheetTrigger className="lg:hidden w-full grid place-items-center pt-6 pr-6">
          <RxHamburgerMenu size={45} className={` ${currentTheme === Theme.Dark ? "text-white bg-darkCharcoal/50 rounded-sm px-2 py-2" : "text-darkCharcoal"}`} />
        </SheetTrigger>
        <SheetContent side={"right"} className="">
          <ButtonShadcn variant={"ghost"} className="" onClick={toggleTheme}>
            {currentTheme === Theme.Dark ? <FaMoon size={25} className="text-white" /> : <GoSun size={25} />}
          </ButtonShadcn>
          <ul className="flex flex-col h-fit dark:bg-transparent dark:text-lightCharcoal w-full py-20 mx-auto text-center justify-start font-medium text-lg gap-20">
            {isRoot ? (
              ""
            ) : (
              <li className="hover:scale-110">
                <Link to="/" className="">
                  Projects
                </Link>
              </li>
            )}

            <li className="hover:scale-110">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
