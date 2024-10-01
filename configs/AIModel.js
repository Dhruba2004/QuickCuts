const {
    GoogleGenerativeAI,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic : interesting historical story along with AI image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## 30-Second Historical Story Video Script (JSON Format)\n\n```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Rome, with merchants selling wares and people going about their daily lives.\",\n    \"ContentText\": \"In the heart of ancient Rome, a young woman named Livia stood amidst the cacophony of the marketplace.\" \n  },\n  {\n    \"imagePrompt\": \"Livia, a young Roman woman, dressed in a simple tunic, looking determined with a scroll in her hand.\",\n    \"ContentText\": \"She wasn't just another shopper. Livia was a scribe, and she carried with her a secret message, a scroll entrusted to her by a friend.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up of the scroll, with faded ink and intricate script.\",\n    \"ContentText\": \"The scroll spoke of a plot against the Emperor, a conspiracy that could plunge Rome into chaos.\"\n  },\n  {\n    \"imagePrompt\": \"Livia rushing through the crowded streets of Rome, looking over her shoulder nervously.\",\n    \"ContentText\": \"Livia had to get this message to the Emperor, but danger lurked around every corner.\"\n  },\n  {\n    \"imagePrompt\": \"A shadowy figure following Livia through the streets, their face hidden in darkness.\",\n    \"ContentText\": \"She could feel the eyes of unseen enemies watching her every move.\"\n  },\n  {\n    \"imagePrompt\": \"Livia entering a grand Roman palace, guards standing at attention.\",\n    \"ContentText\": \"Reaching the palace, she managed to slip past the guards, her heart pounding in her chest.\" \n  },\n  {\n    \"imagePrompt\": \"Livia handing the scroll to a surprised Emperor, who looks at her with admiration.\",\n    \"ContentText\": \"She delivered the scroll to the Emperor, saving Rome from a fate worse than death.\"\n  },\n  {\n    \"imagePrompt\": \"A wide shot of ancient Rome, bathed in sunlight, with the Emperor's palace standing tall.\",\n    \"ContentText\": \"Livia, a seemingly ordinary woman, became a hero, her courage and dedication protecting the heart of the Empire.\"\n  }\n]\n```\n\n**Notes:**\n\n* This script assumes a 30-second video, with each scene lasting roughly 3-4 seconds.\n* The content text is intended to be spoken over the visuals.\n* You can adjust the image prompts and content text to create a more specific story.\n* These image prompts are intended to be realistic and evocative, but you may need to adjust them depending on the AI image generation tool you're using. \n\n**This script is just a starting point. Feel free to modify it and add your own creativity to make it your own.** \n"},
          ],
        },
      ],
    });
  
