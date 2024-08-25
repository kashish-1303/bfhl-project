const express = require('express');
const app = express();
app.use(express.json());

// Your user details
const USER_ID = "kashishsachindhoka_13112003";
const EMAIL = "kashishsachin.dhoka2021@vitstudent.ac.in";
const ROLL_NUMBER = "21BIT0021";

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercase = alphabets
    .filter(char => char.toLowerCase() === char)
    .sort((a, b) => b.localeCompare(a))[0] || [];

  res.json({
    is_success: true,
    user_id: USER_ID,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});
app.get('/', (req, res) => {
  res.send('BFHL API is running. Use /bfhl endpoint for POST and GET requests.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;