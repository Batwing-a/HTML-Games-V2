const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 8080;

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// API endpoints
app.get('/api/status', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8001/account/info', {
      method: 'GET',
      headers: {
        'Authorization': 'dummy'
      }
    });
    const isRunning = response.status === 401;
    res.json({ running: isRunning });
  } catch (error) {
    res.json({ running: false });
  }
});

app.post('/api/start', (req, res) => {
  exec('cd /workspaces/rogueserver && docker-compose -f docker-compose.Development.yml up -d', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Server started' });
  });
});

app.post('/api/stop', (req, res) => {
  exec('cd /workspaces/rogueserver && docker-compose -f docker-compose.Development.yml down', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: 'Server stopped' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});