import { test, expect } from '@playwright/test'

test('Verify login pass with valid user', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	await page.click('#btn-make-appointment')
	await page.fill('#txt-username', 'John Doe')
	await page.fill('#txt-password', 'ThisIsNotAPassword')
	await page.click('#btn-login')

	await expect(page.locator('h2')).toHaveText('Make Appointment')
})

test('Verify login fail with invalid password', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	await page.click('#btn-make-appointment')
	await page.fill('#txt-username', 'John Doe')
	await page.fill('#txt-password', 'hackerpassword')
	await page.click('#btn-login')

	const errorMessage = page.locator('p.lead.text-danger')

	await expect(errorMessage).toBeVisible()
	await expect(errorMessage).toHaveText(
		'Login failed! Please ensure the username and password are valid.'
	)
})

test('Verify login fail with invalid username', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')

	await page.click('#btn-make-appointment')
	await page.fill('#txt-username', 'hacker')
	await page.fill('#txt-password', 'ThisIsNotAPassword')
	await page.click('#btn-login')

	const errorMessage = page.locator('p.lead.text-danger')

	await expect(errorMessage).toBeVisible()
	await expect(errorMessage).toHaveText(
		'Login failed! Please ensure the username and password are valid.'
	)
})
