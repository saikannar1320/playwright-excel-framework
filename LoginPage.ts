import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {}

    async login(username: string, password: string) {
        await this.page.goto(process.env.BASE_URL || '');
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#loginButton');
    }
}
