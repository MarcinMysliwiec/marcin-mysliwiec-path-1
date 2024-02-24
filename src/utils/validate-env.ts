import { cleanEnv, port, str } from "envalid";

/**
 * Validates and cleans environment variables.
 * If NODE_ENV is set to "test", it sets NODE_ENV to "test" and PORT to a random value.
 */
const validateEnv = () => {
  // Convert NODE_ENV to lowercase for case-insensitive comparison
  const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : '';

  // If NODE_ENV is "test", set it to "test" and set PORT to a random value
  if (nodeEnv === 'test') {
    process.env.NODE_ENV = 'test';
    // Generate a random port between 1024 and 65535
    const randomPort = Math.floor(Math.random() * (65535 - 1024 + 1)) + 1024;
    // Convert the random port number to a string
    process.env.PORT = String(randomPort);
  }

  // Clean environment variables
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
};

export default validateEnv;