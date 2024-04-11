import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request, res: Response) {
    //const { name, email, phone } = req.body;
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const telefone = formData.get('telefone')
    const mensagem = formData.get('mensagem')

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_EMAIL_HOST,
            port: process.env.NEXT_PUBLIC_EMAIL_PORT,
            //
            tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"Contato pelo Portfólio" <${process.env.EMAIL_USER}>`,
            to: 'adm.pedronunes@gmail.com',
            subject: 'Novo Orçamento',
            html: `
      <h3>New Message:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `,
        });

        console.log('Message sent:', info.messageId);
        //res.status(200).send('Message sent successfully!');
        return NextResponse.json({mensagem: "Sucesso: Email enviado!"})
    } catch (error) {
        console.error('Error sending message:', error);
        //res.status(500).send('An error occurred while sending the message.');
        NextResponse.json({mensagem: "Erro ao enviar mensagem!"})
    }
    // if (req.method === 'POST') {
    // }
}
