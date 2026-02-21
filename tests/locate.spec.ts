import { test, expect } from '@playwright/test'

test.describe('Locate elements', async () => {
	test('get unique element', async ({ page }) => {
		await page.goto('https://katalon-demo-cura.herokuapp.com/')
	})

	test('Locate element using index', async ({ page }) => {
		//
	})
})
