import express from 'express'
import { SubmitFeedbackServices } from './services/submit-feedbacks-services';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';


export const Routes = express.Router();

Routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedbackServices = new SubmitFeedbackServices(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackServices.execute({
        type,
        comment,
        screenshot,
    })

    return res.status(201).send()
})