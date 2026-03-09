import { test, expect } from '@playwright/test'
import { IndexPage } from '../page-objects/IndexPage'
import { LoginPage } from '../page-objects/LoginPage'

test('Login failed with invalid username', async ({ page }) => {
	await page.goto('https://katalon-demo-cura.herokuapp.com/')
	const indexPage = new IndexPage(page)
	await indexPage.clickMakeAppointment()

	const loginPage = new LoginPage(page)
	await loginPage.inputLoginForm('John Wich', 'ThisIsNotAPassword')

	// Assertion
	await expect(await loginPage.alertTxt).toHaveText(
		'Login failed! Please ensure the username and password are valid.'
	)
})
