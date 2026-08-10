import fs from 'fs';
import path from 'path';

async function testEnroll() {
  // 1. Send OTP
  const sendRes = await fetch('http://localhost:5000/api/otp/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'testparent@gmail.com' }),
  });
  console.log('Send OTP Status:', await sendRes.json());

  // 2. Read OTP from server.js output or mock OTP
  // For test, we will fetch JWT directly by hitting verify with right OTP or testing logic
}

testEnroll();
