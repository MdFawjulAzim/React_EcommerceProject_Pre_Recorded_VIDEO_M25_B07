const nodemailer = require('nodemailer');



const EmailSend = async (EmailTo,EmailText,EmailSubject)=>{
    let transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ffd3655ea4cb6f",
          pass: "9eec6de13aba90"
        },
        tls: {
            rejectUnauthorized: false
        }
      });

      let mailOption ={
        from: '"Ecommerce Support" <support@ecommerce.com>',
        to: EmailTo, 
        subject: EmailSubject, 
        text: EmailText, 
        // html: EmailText 
      };

      return await transporter.sendMail(mailOption);
}


module.exports = EmailSend;
