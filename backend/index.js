const express = require('express');
const app = express();
const connectToDatabase = require("./database/db");
const nodemailer =require ('nodemailer');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./document/index');

require("dotenv").config()

app.use(express.json());

// app.use(cors());

app.use(cors(
    {
      origin:[process.env.REACT_API],
      methods:["POST", "GET", "PUT", "DELETE"],
      credentials:true
    }
  ))

connectToDatabase();

// Routes
const invoiceRoutes = require('./routes/invoiceRoute')
app.use('/api/invoices', invoiceRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to Invoice Amigo Softcom.")
})


const transporter = nodemailer.createTransport({

  host: process.env.SMTP_HOST,
    port : process.env.SMTP_PORT,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  
  tls:{
      rejectUnauthorized:false
  }
})


var options = { format: 'A4' };
app.post('/send-pdf', (req, res) => {
    const { email } = req.body
    pdf.create(pdfTemplate(req.body), options).toFile('invoice.pdf', (err) => {
        transporter.sendMail({
            from: ` amigo-software <anuragmishra4499@gmail.com>`, 
            to: `${email}`, 
            replyTo: `anuragmishra4499@gmail.com`,
            subject: `Invoice from anuragmishra4499@gmail.com`,
            html: pdfTemplate(req.body),
            attachments: [{
                filename: 'invoice.pdf',
                path: `${__dirname}/invoice.pdf`
            }]
        });

        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());

    });
});



const PORT = process.env.PORT || 8081;
app.listen(PORT , () => {
    console.log(`Server listening on ${PORT}`);
});

