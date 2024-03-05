import { FaGithub } from "react-icons/fa";
import { Badge } from "./badge";
import { TbWorldWww } from "react-icons/tb";
import { ButtonShadcn } from "./button";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export type props = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  linkCode: string;
  linkDemo: string;
};

export default function CardProject(props: props) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 }); // Start animation when the component mounts
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Initial state of the component
      animate={controls} // Controls the animation
      transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing function
      className="flex lg:flex-row flex-col pt-10  ">
      <div className="basis-7/12">
        <img src={props.image} alt="project" className=" rounded-sm" />
      </div>
      <div className="basis-6/12 lg:px-8 gap-4 pt-2  flex flex-col justify-between">
        <div>
          <h3 className="  font-base text-2xl  border-darkCharcoal  hover:border-b-2 rounded-sm w-fit transition-all    ease-linear pb-4">{props.title}</h3>
          <p className=" text-lg">{props.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {props.technologies.map((tech, index) => (
            <Badge className=" text-md rounded-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-100 w-fit px-4 py-2 " variant={"outline"} key={index}>
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-center gap-2 w-full">
          <a href={props.linkCode} className="w-full rounded-sm">
            <ButtonShadcn variant="outline" className="w-full rounded-sm flex justify-center gap-4">
              <FaGithub size={25} />
              Code
            </ButtonShadcn>
          </a>
          <a href={props.linkCode} className="w-full rounded-sm">
            <ButtonShadcn variant="outline" className="w-full rounded-sm flex justify-center gap-4">
              <TbWorldWww size={25} />
              Demo
            </ButtonShadcn>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
