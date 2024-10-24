// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up the transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Use Gmail SMTP
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // sender address
      to: 'teamvalorltd@gmail.com', // list of receivers
      subject: `New message from ${name}`, // Subject line
      text: message, // plain text body
      html: `<p>${message}</p><p>Contact: ${name} <${email}></p>`, // html body
    };

    try {
      // Send mail
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send message.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
