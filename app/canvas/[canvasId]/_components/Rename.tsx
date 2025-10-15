"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import { useAPiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel"; 
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import Hint from "@/app/home/_components/hint";

interface RenameProps {
  id: Id<"canvas">;
}

const Rename = ({ id }: RenameProps) => {
  const { userId } = useAuth(); // ✅ get logged-in user ID
  const { mutate } = useAPiMutation(api.canvas.update);

  // ✅ fetch the canvas by id
  const canvas = useQuery(api.canvas.get, { id });
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // ✅ sync DB title & author into state
  useEffect(() => {
    if (canvas) {
      setTitle(canvas.title || "");
      setAuthor(canvas.authorId || "");
    }
  }, [canvas]);

  // ✅ save on Enter
  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && canvas?._id) {
      try {
        if (title !== canvas.title) {
          await mutate({ id: canvas._id, title });
          toast.success("Canvas name updated");
        }
      } catch {
        toast.error("Failed to rename canvas");
      }
    }
  };

  if (canvas === undefined) return <p></p>;
  if (canvas === null) return <p>Canvas not found</p>;

  const isOwner = userId === author; // ✅ ownership check

  return (
    <div className=" p-2 ">
      {isOwner ? (
        <Hint label={"rename"} >

        <input
          className="text-lg  bg-transparent border p-1 rounded-sm border-gray focus:border-none focus:outline-none transition-colors placeholder-gray-400 text-gray-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Untitled Canvas"
          maxLength={15}
          />
          </Hint>
      ) : (
        <Hint label="Canvas Name">

          <p className="text-lg text-gray-400">{title || "Untitled Canvas"}</p>
        </Hint>
      )}
    </div>
  );
};

export default Rename;