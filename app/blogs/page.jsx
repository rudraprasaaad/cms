import Link from "next/link";
import Image from "next/image";

const blogConfig = [
  {
    title: "React vs NextJS",
    excerpt: "NextJS is the ultimate development framework",
    image: "/thumbnails/react-v-next.png",
    url: "/demo-slug",
  },
  {
    title: "Dreams to be a Remote Developer",
    excerpt: "Remote Work is Nice",
    image: "/thumbnails/dreams.png",
    url: "/demo-slug",
  },
  {
    title: "Become the Backend Dev",
    excerpt: "Be a cracked Backend Dev",
    image: "/thumbnails/become-backend-dev.png",
    url: "/demo-slug",
  },
];

export default function Blogs() {
  return (
    <section className="grid gap-4 grid-cols-2 md:grid-cols-3 p-8">
      {blogConfig.map((blog, index) => {
        return (
          <BlogCard
            key={blog.title}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.image}
            url={blog.url}
          />
        );
      })}
    </section>
  );
}

export const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <div className="bg-gray-600/20 rounded-lg border flex flex-col p-1 gap-1 hover:scale-[1.03] transition-all delay-200 duration-300">
      <Image
        className="w-full rounded-md"
        src={image}
        width={300}
        height={20}
        alt="Images"
      />
      <h2 className="text-3xl font-bold text-gray-200">{title}</h2>
      <p className="text-sm text-gray-400">{excerpt}</p>
      <Link
        className="bg-zinc-600/70 py-2 px-3 rounded w-fit text-xs"
        href={`/blog/${url}`}
      >
        Read more
      </Link>
    </div>
  );
};
