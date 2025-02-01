import { test, expect } from '@playwright/test';
import config from '../config';



export class JiraIssueDeleter {
  async deleteIssue(request: any,issueId: string, authToken: string) {
    const response = await request.delete(`${config.JIRA_BASE_URL}/rest/api/2/issue/${issueId}`, {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    });
    expect(response.status()).toBe(204);
    console.log(`Deleted issue with ID: ${issueId}`);
  }
}






