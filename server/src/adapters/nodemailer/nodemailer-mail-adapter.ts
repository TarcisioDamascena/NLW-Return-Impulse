import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "eaaed9e37a13af",
        pass: "7f4c02457b6071"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Fidget <teste@fidget.com>',
            to: 'Tarcisio Damascena <damascenatarcisio@gmail.com>',
            subject,
            html: body,
        })
    }
}