import { Page } from '@playwright/test';

export class YourBusinessPage {
    constructor(private readonly page: Page) {}

    async fillBusinessDetails(data: any) {
        await this.page.fill('#companySize', data.companySize);
        await this.page.fill('#annualRevenue', data.annualRevenue);
        await this.page.click('#nextButton');
    }
}
