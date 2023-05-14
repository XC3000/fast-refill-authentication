const Twilio = require('twilio');
const config = require('../config/config');

const client = Twilio(config.phone.accountSid, config.phone.authToken);

function appendCountryCode(phone) {
  if (phone.length === 10) return `+91${phone}`;
  return phone;
}

const sendMessage = async ({ message, phone }) => {
  return client.messages.create({
    body: message,
    from: '+12705184477',
    to: appendCountryCode(phone),
  });
};

module.exports = { sendMessage };
