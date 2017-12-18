//Starter project help from W3 schools

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'userexampleemail@gmail.com',
    pass: 'userexamplepassword'
  }
});

var mailOptions = {
  from: 'userexampleemail@gmail.com',
  to: 'userexamplefriendemail@yahoo.com',
  subject: 'Look at this cool email that I sent using Node.js!',
  text: 'Who knew the things you could do with code!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    throw(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
