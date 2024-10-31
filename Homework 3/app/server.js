const express = require('express');

const app = express();
app.use(express.json()); 
const deviceData = {};
const PORT = 3000;
// POST
app.post('/api/:deviceid', (req, res) => {
    const deviceId = req.params.deviceid;
    const energyUsage = req.body['energy-usage'];

    if (typeof energyUsage !== 'number' || energyUsage < 0) {
        return res.status(400).contentType('text/plain').send('Invalid Request');
    }


    if (!deviceData[deviceId]) {
        deviceData[deviceId] = [];
    }


    deviceData[deviceId].push(energyUsage);
    return res.sendStatus(200);
});

// GET
app.get('/api/:deviceid', (req, res) => {
    const deviceId = req.params.deviceid;


    if (!deviceData[deviceId]) {
        return res.status(404).contentType('text/plain').send('Device Not Found');
    }

    return res.json({ 'total-energy-usage': deviceData[deviceId] });
});

// GET
app.get('/', (req, res) => {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Device Energy Usage</title>
            <style>
                table { width: 50%; border-collapse: collapse; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
                .high-usage { background-color: red; }
            </style>
        </head>
        <body>
            <h1>Device Energy Usage</h1>
            <table>
                <thead>
                    <tr>
                        <th>Device ID</th>
                        <th>Energy Usage</th>
                    </tr>
                </thead>
                <tbody>`;

    for (const deviceId in deviceData) {
        const usages = deviceData[deviceId];
        const totalUsage = usages.reduce((a, b) => a + b, 0);
        const usageList = usages.join(', ');
        const rowClass = totalUsage > 1000 ? 'high-usage' : '';

        html += `
                    <tr class="${rowClass}">
                        <td>${deviceId}</td>
                        <td>${usageList}</td>
                    </tr>`;
    }

    html += `
                </tbody>
            </table>
        </body>
        </html>`;
    
    res.status(200).contentType('text/html').send(html);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
