import { type Page, type Locator } from '@playwright/test'

export class LoginPage {
	
	// Private Page Locators
	private readonly page: Page
	private readonly usernameTxt: Locator
	private readonly passowrkdTxt: Locator
	private readonly loginBtn: Locator
	private readonly alertMsg: Locator

	constructor(page: Page) {
		this.page = page
		this.usernameTxt = page.locator('#txt-username')
		this.passowrkdTxt = page.locator('#txt-password')
		this.loginBtn = page.locator('#btn-login')
		this.alertMsg = page.locator('.lead.text-danger')
	}

	//Public method
	public async inputLoginForm(
		username: string,
		password: string
	): Promise<void> {
		await this.usernameTxt.fill(username)
		await this.passowrkdTxt.fill(password)
		await this.loginBtn.click()
	}

	// Getters for locator
	get alertTxt(): Locator {
		return this.alertMsg
	}
}
