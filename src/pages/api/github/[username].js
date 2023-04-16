const path = require('path');
const fs = require('fs')

export default function (req, res) {
    const { username } = req.query;
    const filePath = path.resolve("public",`github-${username}.svg`)
    const imageBuffer = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(imageBuffer);
}