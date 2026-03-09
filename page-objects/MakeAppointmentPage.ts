import { type Page, type Locator } from '@playwright/test'

export class MakeAppointmentPage {
	private readonly page: Page

	private readonly facilityCombo: Locator
	private readonly readmissionCheckbox: Locator
	private readonly healthcarePrograms: Record<string, Locator>
	private readonly visitDateInput: Locator
	private readonly commentInput: Locator
	private readonly bookAppointmentBtn: Locator

	constructor(page: Page) {
		this.page = page

		this.facilityCombo = page.locator('#combo_facility')
		this.readmissionCheckbox = page.locator('#chk_hospotal_readmission')

		this.healthcarePrograms = {
			medicare: page.locator('#radio_program_medicare'),
			medicaid: page.locator('#radio_program_medicaid'),
			none: page.locator('#radio_program_none'),
		}

		this.visitDateInput = page.locator('#txt_visit_date')
		this.commentInput = page.locator('#txt_comment')

		this.bookAppointmentBtn = page.getByRole('button', {
			name: 'Book Appointment',
		})
	}

	async fillAppointmentForm({
		facility,
		readmission,
		program,
		date,
		comment,
	}: {
		facility: string
		readmission: boolean
		program: 'medicare' | 'medicaid' | 'none'
		date: string
		comment: string
	}) {
		await this.facilityCombo.selectOption(facility)
		if (readmission) {
			await this.readmissionCheckbox.check()
		}
		await this.healthcarePrograms[program].check()
		await this.visitDateInput.click()
		await this.visitDateInput.clear()
		await this.visitDateInput.pressSequentially(date)
		await this.commentInput.fill(comment)
		await this.bookAppointmentBtn.click()
	}
}
