import { type Page, type Locator } from '@playwright/test'

export class SummaryPage {
	private readonly page: Page
	private readonly confirmationHeading: Locator

	constructor(page: Page) {
		this.page = page

		this.confirmationHeading = page.getByRole('heading', {
			name: 'Appointment Confirmation',
			level: 2,
		})
	}

	get confirmationHeadingTxt(): Locator {
		return this.confirmationHeading
	}
}
