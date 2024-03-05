import { ContactForm } from "@/components/layout/Form";
import Navbar from "@/components/layout/Nav";
import { Toaster } from "@/components/ui/toaster";

export default function Contact() {
  return (
    <main className="h-fit min-h-screen w-full bg-grid font-ubuntu">
      <div className="   bg-gradient-to-br from-gray-200/30 via-stone-300/40 to-slate-200/80 dark:from-gray-800/85  dark:via-stone-900/95 dark:to-slate-950/90 h-fit min-h-screen w-full">
        <Navbar />
        <div className=" container grid md:w-1/2">
          <div className="mt-40 px-8 py-8 rounded-sm flex flex-col gap-4 bg-gray-300/50">
            <h1 className=" font-medium tracking-[0.65rem] md:text-5xl text-4xl text-start pb-16">CONTACT</h1>

            <ContactForm />
          </div>
          <div></div>
        </div>

        <Toaster />
      </div>
    </main>
  );
}
