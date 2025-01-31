# Playwright TypeScript Framework for JIRA Issues API Automation

This repository contains a Playwright-based TypeScript framework designed to automate tests for the JIRA Issues API. The framework focuses on implementing a Create, Read and Delete workflow for selected endpoints. 

## Prerequisites for the project

Before using this framework, ensure you have the following installed:
1. Node.js (v16 or higher)
2. npm (Node Package Manager)
3. Playwright (installed via npm)
4. JIRA Account with API access (API token or credentials)


## Setup

1. Clone the Repository:
  `git clone https://github.com/yadsandy/jira-playwright-ts.git`
  `cd jira-playwright-ts`
2. Install Dependencies:
  `npm install`
3. Configure Environment Variables:
  Create a .env file in the root directory.

4. Add your JIRA API credentials:

    JIRA_BASE_URL=https://your-jira-instance.atlassian.net
  
    JIRA_API_TOKEN=your-api-token
  
    JIRA_USERNAME=your-email@example.com
  
5. Verify Setup:
  `npx playwright test:jira`


## Framework structure
```jira-playwright-ts/
├── tests/                  # Test files contains create, read and delete functions
│   ├── jira.spec.ts
├── .env                    # Environment variables
├── playwright.config.ts    # Playwright configuration
├── config.ts               # fetch .env values and use it in tests folder
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Screnshots
![Screenshot 2025-02-01 003609.png](images/Screenshot%202025-02-01%20003609.png)
![Screenshot 2025-02-01 003640.png](images/Screenshot%202025-02-01%20003640.png)