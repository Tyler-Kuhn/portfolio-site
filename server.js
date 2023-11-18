const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/send', (req, res) => {
    // Extracting form data
    const { firstName, lastName, email, message } = req.body;

    // Data to be written
    const dataToWrite = `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}\n\n`;

    // Append data to a file
    fs.appendFile('submissions.txt', dataToWrite, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));