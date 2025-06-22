import { Ruge_Boogie } from "next/font/google";
import Image from "next/image";

const blogConfig = [
  {
    title: "React vs NextJS",
    excerpt: "NextJS is the ultimate development framework",
    image: "/thumbnails/react-v-next.png",
  },
  {
    title: "Dreams to be a Remote Developer",
    excerpt: "Remote Work is Nice",
    image: "/thumbnails/dreams.png",
  },
  {
    title: "Become the Backend Dev",
    excerpt: "Be a cracked Backend Dev",
    image: "/thumbnails/become-backend-dev.png",
  },
];

export default function Blogs() {
  return (
    <section>
      {blogConfig.map((blog, index) => {
        return (
          <BlogCard
            key={blog.title}
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.image}
          />
        );
      })}
    </section>
  );
}

export const BlogCard = ({ title, excerpt, image }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{excerpt}</div>
      <Image src={image} width={300} height={20} />
    </div>
  );
};
