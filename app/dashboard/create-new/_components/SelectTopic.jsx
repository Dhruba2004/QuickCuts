"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SelectTopic({onUserSelect}) {
  const options = [
    "Custom Prompt",
    "Scary Story",
    "Random AI Story",
    "Motivational Story",
    "Historical Facts",
    "Bedtime Stories",
    "Fun Facts",
  ];
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <h2 className="font-bold text-2xl text-violet-700">Content</h2>
      <p className="text-gray-500">What is the topic of your videos?</p>
      <Select
        onValueChange ={(value) => {
          setSelectedOption(value)
          value != 'Custom Prompt' && onUserSelect('topic',value)
        }}
      >
        <SelectTrigger className="mt-3 w-full text-lg p-6">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((item, index) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedOption == "Custom Prompt" && 
        <Textarea onChange ={(e)=>onUserSelect('topic',e.target.value)}
        className="mt-4 p-6"
          placeholder="Enter your prompt here..."
        />
      }
    </div>
  );
}

export default SelectTopic;
