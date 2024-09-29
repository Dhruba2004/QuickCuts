/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://cloudinary_owner:pR1Cy8IfkaOA@ep-long-bonus-a2bug9rg.eu-central-1.aws.neon.tech/ai-short-video-generator?sslmode=require',
    }
  };