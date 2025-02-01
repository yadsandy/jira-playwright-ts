import { test, expect } from '@playwright/test';
import config from '../config';



export class JiraIssueRetriever {
  async getIssue(request: any, issueId: string,authToken: string) {
    const response = await request.get(`${config.JIRA_BASE_URL}/rest/api/2/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.fields.summary).toBe('Automated Test Issue');
    console.log(`Retrieved issue with ID: ${issueId}`);
  }
}
