const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
    service:'gmail',
  auth: {
    user:process.env.EMAIL ,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sender = async (user) => {
  const info = await transporter.sendMail({
    from: 'Santosh Yadav',
    to: user.email,
    subject: "Mail sent successfully.",
    text: user.query,  
    html: user.query,
  });

  console.log("Message sent:", info.messageId);
};