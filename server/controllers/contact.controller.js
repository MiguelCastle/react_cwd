const Contact = require('../models/contact.model');
const Joi = require('joi');
const nodemailer = require("nodemailer");

const schema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    subject: Joi.string()
        .max(30)
        .required(),
    message: Joi.string()
        .max(255)
        .required()
}).keys(
    {
    phone: Joi.string()
    .min(10)
    .pattern(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)
    .required()
    .error(errors => {
    errors.forEach(err => {
      switch (err.code) {
        case "string.pattern.base":
          err.message = `Phone pattern: (123) 456-7890 or 555-555-5555`;
          break;
        default:
          break;
      }
    });
    return errors;
})
})


const sendEmail = async ({name, email, phone, subject, message}) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'castilma95@gmail.com', // generated ethereal user
      pass: 'ylhvkindbobmnict', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: email, // sender address
    to: "castilma95@gmail.com", // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: `<p>${name}</p><br/><p>${phone}</p><br/><p>${message}</p>`, // html body
  });
}

module.exports.addContact = async (req, res) => {
    console.log('adding a new contact')
    try {
        const value = await schema.validate(req.body, { abortEarly: false });

        if(value['error'] != undefined){
            return res.status(400).json(value['error'])
        }
        const contact = new Contact(req.body);
        console.log('it was valid')
        contact.save()
            .then(() => {
                sendEmail(contact)
                res.status(201).json({ msg: 'Contact has been added succesfully' });
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({errors: err})
            })
    }
    catch (err){err =>{
        res.status(500).json({errors: err})
    }}
}