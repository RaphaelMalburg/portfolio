import IconStack from "../ui/iconStack";

export default function Hero() {
  const icons = [
    { path: "csharp.svg", description: "C#" },
    { path: "typescript.svg", description: "TypeScript" },
    { path: "react.svg", description: "React" },
    { path: "DOTNET.svg", description: ".NET" },
    { path: "nextjs.svg", description: "Next.js" },
    { path: "tailwind.svg", description: "Tailwind CSS" },
    { path: "sql.png", description: "SQL" },
    { path: "prisma.svg", description: "Prisma" },

    { path: "sass.svg", description: "Sass" },
    { path: "sanity.svg", description: "Sanity" },
  ];
  return (
    <section className=" grid  pt-60">
      <div className=" text-darkCharcoal dark:text-gray-100 md:pl-10  container ">
        <h1 className=" font-medium tracking-[0.65rem] md:text-5xl text-4xl text-start ">RAPHAEL MALBURG</h1>
        <h2 className=" text-darkCharcoal md:text-2xl text-xl tracking-[0.35rem] pt-6  dark:text-gray-100 font-medium">SOFTWARE DEVELOPER</h2>

        <div className="pt-24 grid gap-8">
          <h3 className="  font-base text-xl md:text-2xl border-darkCharcoal  dark:text-gray-100 hover:border-b-2 rounded-sm w-fit transition-all    ease-linear">Technologies</h3>

          <div className="flex flex-wrap gap-10   bg-stone-50 dark:bg-slate-200 h-fit p-7 my-auto w-fit  ">
            {icons.map((icon, index) => (
              <IconStack key={index} path={icon.path} description={icon.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
