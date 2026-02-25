# Twilio Backend Implementation Guide

Since Twilio's API cannot be called directly from a browser (CORS), you need a small backend proxy. 

## Node.js / Express Example

```javascript
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio('YOUR_ACCOUNT_SID', 'YOUR_AUTH_TOKEN');

app.post('/api/notify', async (req, res) => {
  const { to, patientName, date, time } = req.body;

  try {
    const message = await client.messages.create({
      from: 'whatsapp:+14155238886', // Your Twilio WhatsApp Number
      to: `whatsapp:${to.replace(/\D/g, '')}`,
      body: `Hello ${patientName}! Your appointment at Aris Clinic is confirmed for ${date} at ${time}. We look forward to seeing you!`
    });

    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
```

## Environment Variables
Ensure you set `REACT_APP_BACKEND_URL` in your `.env` file to point to this server.