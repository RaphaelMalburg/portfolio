import CardProject, { props as CardProjectProps } from "../ui/cardProject";
import { motion } from "framer-motion";
export default function Projects() {
  const projects: CardProjectProps[] = [
    {
      title: "Cottura",
      description: "Pasta Shop website with Sanity CMS integration",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Sanity"],
      image: "/COTTURA.jpg",
      linkCode: "https://github.com/RaphaelMalburg/cottura-webpage",
      linkDemo: "https://cottura-webpage.vercel.app/",
    },
    {
      title: "Bomau Bistro",
      description: "Restaurant landing page with Sanity CMS integration",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Sanity"],
      image: "/bomaubistro.jpg",
      linkCode: "https://github.com/RaphaelMalburg/BomauBistro2",
      linkDemo: "https://www.bomaubistro.com/",
    },
    {
      title: "Cookify",
      description: "Recipes search page comsuming public API",
      technologies: ["React", "TailwindCSS"],
      image: "/Cookify.jpg",
      linkCode: "https://github.com/RaphaelMalburg/Cookify",
      linkDemo: "https://github.com/RaphaelMalburg/Cookify",
    },
    {
      title: "HContainers",
      description: "Landing page for a maritime container customization company",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      image: "/hernandoContainer.jpg",
      linkCode: "https://github.com/RaphaelMalburg/HcontainerWebpage",
      linkDemo: "https://hcontainer-webpage.vercel.app/",
    },
    {
      title: "Zebuino",
      description: "Steakhouse restaurant, first project with react",
      technologies: ["React", "CSS"],
      image: "/zebuino.jpg",
      linkCode: "https://github.com/RaphaelMalburg/ZebuinoParrilla",
      linkDemo: "https://raphaelmalburg.github.io/ZebuinoParrilla/",
    },
  ];
  return (
    <motion.div className="lg:pt-16 grid col-span-1 gap-10" id="projects">
      {projects.map((project, index) => (
        <CardProject key={index} {...project} />
      ))}
    </motion.div>
  );
}
