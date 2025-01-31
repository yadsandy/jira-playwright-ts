import { test, expect } from '@playwright/test';
import config from '../config';

const authToken = Buffer.from(`${config.JIRA_USERNAME}:${config.JIRA_API_TOKEN}`).toString('base64');
let issueId: string; // To store the created issue ID for later use

test.describe('Jira Issues API Workflow', () => {
  test('Create a JIRA issue via API', async ({ request }) => {
    const response = await request.get(`${config.JIRA_BASE_URL}/rest/api/2/issue`, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
      data: {
        fields: {
          project: {
            id: '10001',
          },
          issuetype: {
            id: '10008',
          },
          summary: 'Automated Test Issue',
          description: {
            content: [
              {
                type: 'text',
                text: 'This is an automated test issue created by Playwright.',
              },
            ],
          },
        },
      },
    });
    console.log(`Status Code: ${response.status()}`);
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log('Response:', responseBody);
    expect(responseBody).toHaveProperty('id');
    issueId = responseBody.id
    console.log(`Created issue ID: ${issueId}`);
  });


  test('Get the Created Issue', async ({ request }) => {
    console.log(authToken)
    const response = await request.get(`${config.JIRA_BASE_URL}/rest/api/2/status/${issueId}`, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.fields.summary).toBe('Automated Test Issue');
    console.log(`Retrieved issue with ID: ${issueId}`);
  });

  test('Delete the Created Issue', async ({ request }) => {
    const response = await request.delete(`${config.JIRA_BASE_URL}/rest/api/2/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    });

    expect(response.status()).toBe(204);
    console.log(`Deleted issue with ID: ${issueId}`);
  });
});