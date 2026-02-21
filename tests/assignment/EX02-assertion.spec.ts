import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')
	await page.click('#btn-make-appointment')
	await page.fill('#txt-username', 'John Doe')
	await page.fill('#txt-password', 'ThisIsNotAPassword')
	await page.click('#btn-login')
})

test('Verify that make appointment page display “Make Appointment” in h2.', async ({
	page,
}) => {
	await expect(page.locator('h2')).toHaveText('Make Appointment')
})

test('Verify can select all facility combo boxes', async ({ page }) => {
	const facility = page.locator('#combo_facility')

	await facility.selectOption('Hongkong CURA Healthcare Center')
	await expect(facility).toHaveValue('Hongkong CURA Healthcare Center')

	await facility.selectOption('Tokyo CURA Healthcare Center')
	await expect(facility).toHaveValue('Tokyo CURA Healthcare Center')

	await facility.selectOption('Seoul CURA Healthcare Center')
	await expect(facility).toHaveValue('Seoul CURA Healthcare Center')
})

test('Verify that can select apply for hospital readmission checkbox', async ({
	page,
}) => {
	const checkbox = page.locator('#chk_hospotal_readmission')

	await checkbox.check()
	await expect(checkbox).toBeChecked()
})

test('Verify that can select health care program radio button', async ({
	page,
}) => {
	const medicare = page.locator('#radio_program_medicare')
	await medicare.check()
	await expect(medicare).toBeChecked()

	const medicaid = page.locator('#radio_program_medicaid')
	await medicaid.check()
	await expect(medicaid).toBeChecked()

	const none = page.locator('#radio_program_none')
	await none.check()
	await expect(none).toBeChecked()
})

test('Verify that can input current date on Visit Date', async ({ page }) => {
	const visitDate = page.locator('#txt_visit_date')

	const today = new Date().toLocaleDateString('en-GB')
	await visitDate.fill(today)

	await expect(visitDate).toHaveValue(today)
})

test('Verify that can input comment', async ({ page }) => {
	const comment = page.locator('#txt_comment')

	await comment.fill('This is test comment')
	await expect(comment).toHaveValue('This is test comment')
})

test('Verify that book appointment button is displayed and enabled.', async ({
	page,
}) => {
	const button = page.locator('#btn-book-appointment')

	await expect(button).toBeVisible()
	await expect(button).toBeEnabled()
})
