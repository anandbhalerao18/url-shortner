document.getElementById('urlForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const longUrl = document.getElementById('longUrl').value;
  const customAlias = document.getElementById('customAlias').value;

  const response = await fetch('/shorten', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ longUrl, customAlias })
  });

  const resultDiv = document.getElementById('result');
  if (response.ok) {
    const data = await response.json();
    resultDiv.innerHTML = `<a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    document.getElementById('urlForm').reset();
    loadUrls();
  } else {
    const err = await response.json();
    resultDiv.innerHTML = `<p style='color:red;'>${err.error}</p>`;
  }
});

async function loadUrls() {
  const listDiv = document.getElementById('list');
  const res = await fetch('/api/urls');
  const data = await res.json();
  listDiv.innerHTML = '<h3>All Shortened URLs:</h3>';
  for (let key in data) {
    listDiv.innerHTML += `<p><a href="/${key}" target="_blank">/${key}</a> ➡ ${data[key].longUrl} | Clicks: ${data[key].clicks}</p>`;
  }
}

loadUrls();

