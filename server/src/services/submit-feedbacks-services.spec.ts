import { SubmitFeedbackServices } from "./submit-feedbacks-services"

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackServices(
            { create: async () => { } },
            { sendMail: async () => { } }
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ALgo deu errado',
            screenshot: 'text.png'
        })).resolves.not.toThrow();
    })
})