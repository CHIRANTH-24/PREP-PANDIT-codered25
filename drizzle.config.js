import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://real-estate_owner:1D9fcCgpynQF@ep-falling-bonus-a15ie0jf.ap-southeast-1.aws.neon.tech/quiz-ai?sslmode=require",
  },
});
