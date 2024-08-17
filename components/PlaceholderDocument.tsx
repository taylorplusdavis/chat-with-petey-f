"use client";

import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function PlaceholderDocument() {
  const router = useRouter();

  const handleClick = () => {
    // If user is FREE tier and over the file limit, push to the upgrade page
    router.push("/dashboard/upload");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex flex-col items-center w-64 h-80 rounded-xl bg-indigo-100 text-slate-950 hover:bg-indigo-200 hover:text-slate-700 shadow-md shadow-white/25"
    >
      <PlusCircleIcon className="h-16 w-16" />
      {/* Deploy */}
      <p>Add a document</p>
    </Button>
  );
}

export default PlaceholderDocument;
