"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoader from "./_components/CustomLoader";

function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [videoscript, setVideoScript] = useState();
  
  const GenerateAudioFile = async(videoScriptData)=>{
    let script ='';
    videoScriptData.forEach(item=>{
      script = script + item.ContentText+' '
    })
    console.log(script)

  }
  const onHandleInputChange = (fieldValue, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };
  const GetVideoScript = async () => {
    setLoading(true);
    const prompt =
      "Write a script to generate " +
      formData.duration +
      " video on topic : " +
      formData.topic +
      " along with AI image prompt in " +
      formData.imageStyle +
      " format for each scene and give me result in JSON format with imagePrompt and ContentText as field";
    console.log(prompt);

    const result = await axios
      .post("/api/get-video-script", {
        prompt: prompt
      })
      .then((resp) => {
        console.log(resp.data.result);
        GenerateAudioFile(resp.data.result)
      });
      setLoading(false);
    
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
      <CustomLoader loading = {loading} />
    </div>
  );
}

export default CreatePage;
