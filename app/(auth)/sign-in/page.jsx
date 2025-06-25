"use client";

import { Icons } from "@/components/icons";
import { Anvil } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const onSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google");
    } catch (err) {
      console.error(err.message);
      toast({
        variant: "desctructive",
        title: "Uh oh!",
        description: "Failed to sign in",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center px-2">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs mx-auto p-4 rounded-lg bg-zinc-800 flex flex-col items-center gap-4">
        <Anvil className="size-12 text-gray-400" />
        <p className="text-sm text-center text-gray-200">
          Welcome, by continuing with NextERA sign in.
        </p>
        <button
          onClick={onSignIn}
          className="flex items-center gap-2 bg-gray-500/50 hover:bg-gray-500/40 transition-colors duration-200 px-8 py-2 rounded font-bold text-md w-full justify-center"
        >
          <Icons.GoogleLogo className="size-7" />{" "}
          {loading ? "Loading...." : "Sign In"}
        </button>
      </div>
    </section>
  );
}
