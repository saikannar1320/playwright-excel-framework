import { Page } from '@playwright/test';

export class GetStartedPage {
    constructor(private readonly page: Page) {}

    async fillGetStartedForm(data: any) {
        await this.page.fill('#businessName', data.businessName);
        await this.page.fill('#industry', data.industry);
        await this.page.click('#continueButton');
    }
}
