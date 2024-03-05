type Props = {
  path: string;
  description: string;
};

export default function IconStack({ path, description }: Props) {
  return (
    <div className="relative  grid group w-fit  place-content-center my-auto">
      <img src={path} alt="" className="w-16 h-16 object-contain transition-transform transform group-hover:scale-110 " />
      <div className=" absolute grid place-content-center transform  w-full h-full hover:scale-110 opacity-0 group-hover:opacity-100 transition-opacity text-center top-0 left-0  bg-slate-100/80 rounded-sm ">
        <h2 className="text-center text-lg font-bold dark:text-darkCharcoal"> {description}</h2>
      </div>
    </div>
  );
}
