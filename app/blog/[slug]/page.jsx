import dateFormat from "@/utils/dateFormat";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function SingleBlog() {
  const tempTags = "SpaceX, Nasa, Exploration";
  const tags = tempTags.split(",");
  const tempHtml = `<p>Demo content</p>`;

  return (
    <section>
      <div className="flex flex-col  gap-5 items-center">
        <Image
          className="rounded border w-[90%] md:w-[700px]"
          src="/thumbnails/dreams.png"
          width={500}
          height={250}
        />

        <div className="meta-of-a-blog space-y-2">
          <div className="flex gap-2 items-center">
            <Calendar className="text-gray-400 size-4" />
            <p className="text-gray-400 text-xs">
              Created On: {dateFormat(new Date())}
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p>Category:</p>
            <p className="badge bg-gray-600/30 border border-gray-700 w-fit px-2 py-1 rounded">
              Space Exploration
            </p>
          </div>
          <div className="text-xs flex items-center gap-2">
            <p>Tags:</p>
            {tags.map((tag) => (
              <p
                key={tag}
                className="badge text-xs bg-gray-600/30 border border-gray-700 w-fit px-[4px] py-[2px] rounded "
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        {/* <div
            className="content"
            dangerouslySetInnerHTML={{ __html: tempHtml }}
          ></div> */}
        <p className="text-sm w-[90%] md:w-2/3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          commodi placeat eius inventore facere maiores accusantium quibusdam
          ipsa. Illum, neque fugit eos minima libero distinctio cum dolorum,
          nobis et, dolor alias recusandae deleniti facere sint sapiente dolore
          corrupti perferendis. Error dolorem earum cupiditate qui, labore
          mollitia, modi recusandae sapiente, repellat beatae unde deleniti
          aspernatur ipsa officiis in consequuntur obcaecati nobis et ad
          possimus quam autem! Eveniet vitae totam, labore, et ex necessitatibus
          esse hic laboriosam explicabo iusto nobis in odio deserunt magni.
          Porro nisi alias illum hic minus placeat delectus eum libero veritatis
          maiores ad, asperiores iusto sint reprehenderit sequi modi voluptates
          tempore harum veniam dolorem assumenda aliquid corporis cumque.
          Quibusdam explicabo ea quae, repellat nobis minima, repellendus
          exercitationem ut modi possimus doloribus quo rerum commodi. Esse
          suscipit, necessitatibus perspiciatis ducimus voluptate enim
          voluptatem voluptates placeat delectus adipisci. Illo eaque iusto
          culpa deserunt in incidunt mollitia dolores placeat ipsa numquam
          perferendis delectus a tempora qui modi animi, voluptatem corporis
          aliquam iste neque eligendi. Pariatur, temporibus. Neque, cupiditate
          unde odit, mollitia commodi perferendis et quis eligendi consequatur
          minima quasi asperiores a laborum impedit atque ipsa quaerat,
          laudantium voluptatibus. Quaerat corrupti tempore voluptate veniam
          commodi aperiam autem, doloremque rem vero! Consequatur, ratione.
        </p>
      </div>
    </section>
  );
}
