import { test, expect } from '@playwright/test';
import config from '../config';


export class JiraIssueCreator {
  async createIssue(request: any, authToken: string) {
    let issueId: string
    const response = await request.post(`${config.JIRA_BASE_URL}/rest/api/2/issue`, {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        fields: {
          project: {
            id: '10001', // Replace with your project ID
          },
          issuetype: {
            id: '10008', // Replace with your issue type ID
          },
          summary: 'Automated Test Issue',
          description: {
            type: 'doc',
            version: 1,
            content: [
              {
                type: 'paragraph',
                content: [
                  {
                    type: 'text',
                    text: 'This is an automated test issue created by Playwright.',
                  },
                ],
              },
            ],
          },
        },
      },
    });

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    console.log('Response:', responseBody);
    expect(responseBody).toHaveProperty('id');
    console.log(`Created issue ID: ${issueId}`);
    return issueId
  }
}
