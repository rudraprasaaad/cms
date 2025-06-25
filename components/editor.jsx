"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor() {
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState("");

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <section>
      <form className="space-y-4" onSubmit={handleSubmit(handleForm)}>
        <input
          type="text"
          {...register("title")}
          placeholder="Enter the post title"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
        />

        <ReactQuill content={content} onChange={setContent} />

        <input
          type="text"
          {...register("keywords")}
          placeholder="Enter keywords"
          className="font-bold text-xl bg-zinc-600 px-3 py-2 rounded-sm outline-none w-full"
        />
        <button
          type="submit"
          className="bg-zinc-800 px-3 py-2 rounded cursor-pointer"
        >
          Save
        </button>
      </form>
    </section>
  );
}
