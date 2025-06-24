import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingleBlog() {
  const tempTags = "SpaceX, Nasa, Exploration";
  const tags = tempTags.split(",");

  return (
    <section>
      <div>
        <Image src="/thumbnails/dreams.png" width={500} height={250} />
        <div className="flex gap-2 items-center">
          <Calendar className="text-gray-400 size-4" />
          <p className="text-gray-400 text-xs">
            Created On: {dateFormat(new Date())}
          </p>
        </div>
        <div className="text-xs flex items-center gap-2">
          <p>Category:</p>
          {tags.map((tag) => (
            <>
              <p className="badge bg-gray-600/30 border border-gray-700 w-fit px-[2px] py-1 rounded ">
                {tag}
              </p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
