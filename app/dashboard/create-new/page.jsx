"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";

function CreatePage() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldValue, fieldName) => {
    console.log(fieldValue, fieldName);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  const GetVideoScript = () => {
    const prompt =
      "Write a script to generate " +
      formData.duration +
      " video on topic : " +
      formData.topic +
      " along with AI image prompt in " +
      formData.imageStyle +
      " format for each scene and give me result in JSON format with imagePrompt and ContentText as field";
    console.log(prompt);

    // const result = axios.post('/api/get-video-script',{
    //   prompt : prompt
    // })
   
  };
  const onCreateClickHandler = () => {
    GetVideoScript();
  };
  return (
    <div className="md:px-20">
      
      <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Create New Videos{" "}
      </h2>
      <div className="mt-10 p-10 shadow-md">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />
        <Button
          className="mt-10 w-full bg-violet-700"
          onClick={onCreateClickHandler}
        >
          Generate Video
        </Button>
      </div>
    </div>
  );
}

export default CreatePage;
