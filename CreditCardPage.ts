import { Page } from '@playwright/test';

export class CreditCardPage {
    constructor(private readonly page: Page) {}

    async enterCreditCardDetails(data: any) {
        await this.page.fill('#cardNumber', data.cardNumber);
        await this.page.fill('#expiryDate', data.expiryDate);
        await this.page.fill('#cvv', data.cvv);
        await this.page.click('#submitPayment');
    }
}
