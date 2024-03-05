import { AnimatedTooltip } from "./animatedTooltip";
const people = [
  {
    id: 1,
    name: "React",
    designation: "",
    image: "/react.svg",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    designation: "",
    image: "/tailwind.svg",
  },
  {
    id: 3,
    name: "Next.js",
    designation: "",
    image: "/nextjs.svg",
  },
  {
    id: 4,
    name: "C#",
    designation: "",
    image: "/csharp.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "",
    image: "/javascript.svg",
  },
  {
    id: 6,
    name: "Typescript",
    designation: "",
    image: "/typescript.svg",
  },
  {
    id: 7,
    name: "React Router Dom",
    designation: "",
    image: "/reactrouterdom.svg",
  },
  {
    id: 70,
    name: "Prisma",
    designation: "",
    image: "/prisma.svg",
  },
  { id: 13, name: ".NET Core", designation: "", image: "/dotnetcore.svg" },
  {
    id: 8,
    name: "CSS",
    designation: "",
    image: "/css.svg",
  },
  {
    id: 9,
    name: "HTML",
    designation: "",
    image: "/html.svg",
  },
  {
    id: 10,
    name: "SASS",
    designation: "",
    image: "/sass.svg",
  },
  {
    id: 11,
    name: "SQL Server",
    designation: "",
    image: "/sqlserver.svg",
  },
  { id: 12, name: "React Query", designation: "", image: "/reactquery.svg" },
  { id: 13, name: "Figma", designation: "", image: "/figma.svg" },
  { id: 14, name: "Zustand", designation: "", image: "/zustand.svg" },
];

const people2 = [
  {
    id: 7,
    name: "Prisma",
    designation: "",
    image: "/prisma.svg",
  },
  { id: 13, name: ".NET Core", designation: "", image: "/dotnetcore.svg" },
  {
    id: 8,
    name: "CSS",
    designation: "",
    image: "/css.svg",
  },
  {
    id: 9,
    name: "HTML",
    designation: "",
    image: "/html.svg",
  },
  {
    id: 10,
    name: "SASS",
    designation: "",
    image: "/sass.svg",
  },
  {
    id: 11,
    name: "SQL Server",
    designation: "",
    image: "/sqlserver.svg",
  },
  { id: 12, name: "React Query", designation: "", image: "/reactquery.svg" },
  { id: 13, name: "Figma", designation: "", image: "/figma.svg" },
];
export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row flex-wrap   grid-cols-4 items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export function AnimatedTooltipPreview2() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people2} />
    </div>
  );
}
