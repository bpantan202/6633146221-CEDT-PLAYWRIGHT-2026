import { LoginPage } from './page-objects/LoginPage'
import { IndexPage } from './page-objects/IndexPage'
import { MakeAppointmentPage } from './page-objects/MakeAppointmentPage'
import { SummaryPage } from './page-objects/SummaryPage'
import { test as base } from '@playwright/test'

export const test = base.extend<{
	indexPage: IndexPage
	loginPage: LoginPage
	makeAppointmentPage: MakeAppointmentPage
	summaryPage: SummaryPage
}>({
	indexPage: async ({ page }, use) => {
		const indexPage = new IndexPage(page)
		await use(indexPage)
	},
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page)
		await use(loginPage)
	},
	makeAppointmentPage: async ({ page }, use) => {
		const makeAppointmentPage = new MakeAppointmentPage(page)
		await use(makeAppointmentPage)
	},
	summaryPage: async ({ page }, use) => {
		const summaryPage = new SummaryPage(page)
		await use(summaryPage)
	},
})

export { expect } from '@playwright/test'
