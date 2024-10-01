import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";

function EmptyState() {
  return (
    <div className="p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed ">
      <h2>You don't have any short video created</h2>

      <Link href={'/dashboard/create-new'}><ShinyButton className="mt-3">Create New Short Video</ShinyButton></Link>
    </div>
  );
}

export default EmptyState;
