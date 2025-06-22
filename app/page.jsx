import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";

export default function Landing() {
  return (
    <main className="w-full">
      <section className="flex w-full h-[50vh] sm:h-[70vh] justify-center">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage your content with ease
            </h1>
            <p className="text-gray-400 max-w-[700px] mx-auto ">
              Streamline your content workflow, publish with confidence.
            </p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gray-200">Try it out</Button>
            <Button className="" variant="outline">
              Try it out
            </Button>
          </div>
        </div>
      </section>
      <section className="min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full flex justify-center items-center px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          <span className="flex flex-col items-center gap-2">
            <Icons.BlogCustomIcon className="w-13 h-13 text-white" />
            <h3 className="text-xl font-bold text-gray-100">
              Intuitive Editor
            </h3>
            <p className="text-gray-400 text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Layers size={50} />
            <h3 className="text-xl font-bold text-gray-100">Flexible Tools</h3>
            <p className="text-gray-400 text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
          <span className="flex flex-col items-center gap-2">
            <Zap size={50} />
            <h3 className="text-xl font-bold text-gray-100">Blazing fast</h3>
            <p className="text-gray-400 text-center">
              Create and edit content with user friendly interface
            </p>
          </span>
        </div>
      </section>
      <section></section>
    </main>
  );
}
