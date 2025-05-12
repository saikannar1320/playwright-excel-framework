import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { GetStartedPage } from '../pages/GetStartedPage';
import { YourBusinessPage } from '../pages/YourBusinessPage';
import { getTestCaseIDsToRun, getTestData } from '../utils/excelUtils';

const filePath = 'fixtures/testData.xlsx';
const initiatorSheet = 'Initiator';

const testCaseIDs = getTestCaseIDsToRun(filePath, initiatorSheet);

for (const testCaseID of testCaseIDs) {
  test(`Execute Flow for ${testCaseID}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const getStartedPage = new GetStartedPage(page);
    const yourBusinessPage = new YourBusinessPage(page);

    // Login
    await page.goto('https://yourapp.url');
    await loginPage.login('username', 'password');

    // Get Started Data
    const getStartedData = getTestData(filePath, 'GetStarted', testCaseID);
    if (getStartedData) {
      await getStartedPage.fillGetStartedForm(getStartedData);
    }

    // Your Business Data
    const yourBusinessData = getTestData(filePath, 'YourBusiness', testCaseID);
    if (yourBusinessData) {
      await yourBusinessPage.fillBusinessDetails(yourBusinessData);
    }

    // Continue for other pages...

    // Navigate back to parent page if needed
    await page.goto('https://yourapp.url/parent');
  });
}
