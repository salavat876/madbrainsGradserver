const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure:true,
    auth: {
        user: 'mavlikhanov2002@mail.ru',
        pass: '03KQT1Kzn5fZEVbChmjA'
        //GFqFcNRD5LjztyFpR9j7 r2IYPUpa2(ei
    },
    tls: {
        rejectUnauthorized: false
    }
},{
    from:'sdf mavlikhanov2002@mail.ru',
},)

const mailer = message => {
    transporter.sendMail(message,(err,info)=>{
        if(err) return console.log(err)
        console.log('email sent :', info)
    })
}

module.exports = mailer