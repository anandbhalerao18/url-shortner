const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
const shortid = require('shortid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dbFile = path.join(__dirname, 'urls.json');
let urlDatabase = {};
if (fs.existsSync(dbFile)) {
  urlDatabase = JSON.parse(fs.readFileSync(dbFile));
}

app.post('/shorten', (req, res) => {
  const { longUrl, customAlias } = req.body;
  let shortCode = customAlias || shortid.generate();

  if (urlDatabase[shortCode]) {
    return res.status(409).json({ error: 'Alias already taken.' });
  }

  urlDatabase[shortCode] = { longUrl, clicks: 0 };
  fs.writeFileSync(dbFile, JSON.stringify(urlDatabase));
  res.json({ shortUrl: `http://localhost:${PORT}/${shortCode}` });
});

app.get('/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const record = urlDatabase[shortCode];
  if (record) {
    record.clicks++;
    fs.writeFileSync(dbFile, JSON.stringify(urlDatabase));
    res.redirect(record.longUrl);
  } else {
    res.status(404).send('URL not found.');
  }
});

app.get('/api/urls', (req, res) => {
  res.json(urlDatabase);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

