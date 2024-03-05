import Hero from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Projects from "@/components/layout/Projects";
import { Button } from "@/components/ui/ButtonMovingBorder";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import RaphaelMalburgCV from "/RaphaelMalburgCV.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <main className="h-fit min-h-screen w-full bg-grid font-ubuntu" id="hero">
      <main className="   bg-gradient-to-br from-gray-200/30 via-stone-300/40 to-slate-200/80 dark:from-gray-800/85  dark:via-stone-900/95 dark:to-slate-950/90 h-fit min-h-screen w-full">
        <Nav />
        <Hero />
        <div className="container  pt-28">
          <Button
            borderRadius="0.25rem"
            className=" text-darkCharcoal text-lg md:text-xl tracking-[0.35rem]  font-medium  text-start  px-6 py-3 cursor-pointer "
            onClick={() => setShowProjects(!showProjects)}>
            PROJECTS
          </Button>
          {showProjects ? <Projects /> : ""}
          <div className=" grid grid-cols-3 justify-start w-fit gap-20 md:gap-32 py-14">
            <a href={RaphaelMalburgCV} target="_blank">
              {" "}
              <FaRegFilePdf size={32} className=" text-darkChacoal dark:text-lightGreen" />
            </a>
            <a href="https://www.linkedin.com/in/raphaelmalburg/">
              <FaLinkedin size={32} className=" text-darkChacoal dark:text-lightGreen" />
            </a>
            <a href="https://github.com/RaphaelMalburg">
              {" "}
              <FaGithub size={32} className=" text-darkChacoal dark:text-lightGreen" />
            </a>
          </div>
        </div>
      </main>
    </main>
  );
}
{
  /**    <div className="relative">
      <Navbar />

      <main className="h-fit lg:h-screen font-roboto bg-gray-100 dark:bg-black/90 w-full flex flex-col lg:flex-row  min-w-[320px] transition-all  ease-in-out">
        <div className=" lg:basis-5/12 w-full h-full grid place-content-center relative">
          <Hero />
        </div>
        <div className="lg:hidden">
          <Projects />
        </div>
        <section className=" hidden lg:flex h-screen lg:w-7/12 overflow-y-scroll">
          <Projects />
        </section>
      </main>
    </div> */
}
