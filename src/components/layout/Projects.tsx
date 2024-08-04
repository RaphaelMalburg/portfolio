import CardProject, { props as CardProjectProps } from "../ui/cardProject";
import { motion } from "framer-motion";

export default function Projects() {
  const projects: CardProjectProps[] = [
    {
      title: "Kitchen Flow",
      description:
        "Web app focused on Kitchen management, making use of Azure Blob storage, PostgreSQL database, full registration process with Identity. The app was deployed in Docker containers to Azure. Check the Video Demo for more information",
      technologies: [".NET", "C#", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Entity Framework"],
      image: "/kitchen-light.png",
      video: "/kitchen-demo.mp4", // Add the video property
      linkCode: "https://github.com/RaphaelMalburg/kitchenflow",
      linkDemo: "https://kitchenflow.azurewebsites.net/",
    },
    {
      title: "Cottura",
      description:
        "Pasta Shop website with Sanity CMS integration. Focused on the use of a JAM Stack architecture for a modern web application. . Check the Video Demo for more information",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "Sanity"],
      image: "/COTTURA.jpg",
      video: "/cottura-demo.mp4", // Add the video property
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
  ];

  return (
    <motion.div className="lg:pt-16 grid col-span-1 gap-10" id="projects">
      {projects.map((project, index) => (
        <CardProject key={index} {...project} />
      ))}
    </motion.div>
  );
}
