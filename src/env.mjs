// env.mjs or env.ts
import { z } from 'zod';

// Define schema
const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
});

// Parse and validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('❌ Invalid environment variables:', env.error.format());
  throw new Error('Missing or invalid environment variables.');
}

// Export the validated env
export const ENV = env.data;
