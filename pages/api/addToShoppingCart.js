import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export default async (req, res) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    })
  );

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: "Shopping List",
    text: req.body.list,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    let response;
    if (error) {
      response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
        }),
      };
    }
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed succesfully!`,
      }),
    };
    res.send(response);
  });
};
