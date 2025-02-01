import { test, expect } from '@playwright/test';
import config from '../config';
import { JiraIssueCreator } from '../api/issue-create';
import { JiraIssueDeleter } from '../api/issue-delete';
import { JiraIssueRetriever } from '../api/issue-read';

const authToken = Buffer.from(`${config.JIRA_USERNAME}:${config.JIRA_API_TOKEN}`).toString('base64');
let issueId: string; // To store the created issue ID for later use
test.describe.serial('Jira Issues API Workflow', () => {
  const issueCreator = new JiraIssueCreator();
  const issueRetriever = new JiraIssueRetriever();
  const issueDeleter = new JiraIssueDeleter();

  test('Create a JIRA issue via API', async ({ request }) => {
    issueId=await issueCreator.createIssue(request,authToken);
  });

  test('Get the Created Issue', async ({ request }) => {
    await issueRetriever.getIssue(request,issueId,authToken);
  });

  test('Delete the Created Issue', async ({ request }) => {
    await issueDeleter.deleteIssue(request,issueId,authToken);
  });
});