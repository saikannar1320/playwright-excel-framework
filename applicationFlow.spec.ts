import { test } from '@playwright/test';
import { readTestData } from '../utils/excelUtils';
import { LoginPage } from '../pages/LoginPage';
import { GetStartedPage } from '../pages/GetStartedPage';
import { YourBusinessPage } from '../pages/YourBusinessPage';
import { CreditCardPage } from '../pages/CreditCardPage';

const initiator = readTestData('fixtures/testData.xlsx', 'Initiator');

for (const tc of initiator.filter(t => t.RunFlag === 'Yes')) {
    test(`Execute flow for ${tc.TestCaseID}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const getStartedPage = new GetStartedPage(page);
        const yourBusinessPage = new YourBusinessPage(page);
        const creditCardPage = new CreditCardPage(page);

        await loginPage.login(tc.Username, tc.Password);

        const getStartedData = readTestData('fixtures/testData.xlsx', 'GetStarted').find(d => d.TestCaseID === tc.TestCaseID);
        await getStartedPage.fillGetStartedForm(getStartedData);

        const businessData = readTestData('fixtures/testData.xlsx', 'YourBusiness').find(d => d.TestCaseID === tc.TestCaseID);
        await yourBusinessPage.fillBusinessDetails(businessData);

        const creditCardData = readTestData('fixtures/testData.xlsx', 'CreditCard').find(d => d.TestCaseID === tc.TestCaseID);
        await creditCardPage.enterCreditCardDetails(creditCardData);

        console.log(`Test Case ${tc.TestCaseID} executed successfully.`);
    });
}
