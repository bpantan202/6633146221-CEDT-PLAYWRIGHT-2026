import { LoginPage } from './page-objects/LoginPage'
import { IndexPage } from './page-objects/IndexPage'
import { test as base } from '@playwright/test'

export const test = base.extend<{ indexPage: IndexPage; loginPage: LoginPage }>(
	{
		indexPage: async ({ page }, use) => {
			const indexPage = new IndexPage(page)
			await use(indexPage)
		},
		loginPage: async ({ page }, use) => {
			const loginPage = new LoginPage(page)
			await use(loginPage)
		},
	}
)

export { expect } from '@playwright/test'
