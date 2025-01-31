import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the configuration object
const config = {
  JIRA_BASE_URL: process.env.JIRA_BASE_URL,
  JIRA_USERNAME: process.env.JIRA_USERNAME,
  JIRA_API_TOKEN: process.env.JIRA_API_TOKEN,
};

// Validate required environment variables
if (!config.JIRA_BASE_URL || !config.JIRA_USERNAME || !config.JIRA_API_TOKEN) {
  throw new Error('Missing required environment variables in .env file');
}

// Export the configuration object
export default config;