"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EmptyState from "./_components/EmptyState";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";

function Dashboard() {
  const [videolist, setVideoList] = useState([]);
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-violet-700">Dashboard</h2>
        <Link href={'/dashboard/create-new'}><ShinyButton variants="secondary"> + Create New </ShinyButton></Link>
      </div>

      {videolist?.length == 0 && (
        <div>
          <EmptyState />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
