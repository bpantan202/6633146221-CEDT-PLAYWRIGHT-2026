import { test, expect } from '../../fixtures.ts'

test('Create make appointment success', async ({
	page,
	indexPage,
	loginPage,
	makeAppointmentPage,
	summaryPage,
}) => {
	const URL = process.env.URL ?? ''

	await page.goto(URL)

	await indexPage.clickMakeAppointment()

	await loginPage.inputLoginForm('John Doe', 'ThisIsNotAPassword')

	await makeAppointmentPage.fillAppointmentForm({
		facility: 'Tokyo CURA Healthcare Center',
		readmission: true,
		program: 'medicare',
		date: '30/03/2026',
		comment: 'Test appointment',
	})

	await expect(summaryPage.confirmationHeadingTxt).toBeVisible()
})
