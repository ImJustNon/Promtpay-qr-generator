const qrcode = require('qrcode');
const generatePayload = require('promptpay-qr');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// get promtpay information
readline.question('Enter your promtpay phoneNumber : ', async number => {
    readline.question('Enter required amount : ', async amount => {
        const payload = generatePayload(number, {
            amount: Number(amount), 
        });
        await covertSVG(payload);
    });
});

// Convert to QR Code image
const covertSVG = async(payload) =>{
    const options = {
        type: 'text', 
        color: {
            dark: '#003b6a', 
            light: '#f7f8f7', 
        }, 
    }
    qrcode.toString(payload, options, async(err, image) => {
        console.log(image);
    });
}

