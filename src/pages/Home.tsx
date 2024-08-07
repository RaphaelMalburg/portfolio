import Hero from "@/components/layout/Hero";
import Nav from "@/components/layout/Nav";
import Projects from "@/components/layout/Projects";
import { Button } from "@/components/ui/ButtonMovingBorder";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import RaphaelMalburgCV from "/Resume-RaphaelMalburg.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  return (
    <main className="h-fit min-h-screen w-full bg-grid font-ubuntu" id="hero">
      <main className="   bg-gradient-to-br from-gray-100/80 via-stone-200/50 to-slate-200/80 dark:from-gray-800/85  dark:via-stone-900/95 dark:to-slate-950/90 h-fit min-h-screen w-full">
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
