# HTML Games Collection

A collection of HTML-based games with local server support for enhanced features.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the web server:
```bash
npm start
```

The games will be available at `http://127.0.0.1:8080`

## PokéRogue with Local Server

PokéRogue now supports local account creation and save data storage!

### Setup

1. **Start the web server:**
   ```bash
   npm start
   ```

2. **Launch PokéRogue:**
   - Go to `http://127.0.0.1:8080`
   - Click the "PokéRogue Launcher" card
   - Click "Start Server" in the launcher
   - Wait for the server to start (10-15 seconds)
   - Click "Play PokéRogue"

### What the Local Server Provides

- ✅ Account creation and login
- ✅ Save game progress
- ✅ Local data storage (no internet required)
- ✅ All game features work offline

### Server Management

The launcher page allows you to:
- Start the PokéRogue server
- Stop the PokéRogue server
- Check server status

The server runs in Docker containers and will keep your data between sessions.

## Other Games

Browse all available games at the main index: `http://127.0.0.1:8080`