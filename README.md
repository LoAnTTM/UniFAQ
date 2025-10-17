# UniFAQ — Local Run & Test Guide

This README explains how to run the UniFAQ project locally, specifically focusing on `app.html`, which requires an HTTP server to load data correctly.

## Project Overview

The UniFAQ project contains two main HTML files:

- **`index.html`** — The main landing page (can be opened directly as `file://`)
- **`app.html`** — The FAQ demo page that loads dynamic content from `DOM/main.js` (**requires HTTP server**)

**Important:** `app.html` must be served via an HTTP server. Opening it as `file://` will not work properly because the page needs to fetch and execute the JavaScript in `DOM/main.js`. Use one of the methods below.

## How to Run `app.html`

### Option 1: Python 3 Built-in HTTP Server (Recommended)

1. Open your terminal (Terminal app on macOS).
2. Navigate to the project root:

```bash
cd /UniFAQ
```

3. Start the HTTP server:

```bash
python3 -m http.server 8000
```

4. Open your browser and go to:

```
http://localhost:8000/app.html
```

5. To stop the server, press `Ctrl + C` in the terminal.

### Option 2: Node.js with `npx serve`

If you have Node.js installed:

1. Navigate to the project root:

```bash
cd /UniFAQ
```

2. Start the server:

```bash
npx serve -l 5000
```

3. Open your browser and go to:

```
http://localhost:5000/app.html
```

### Option 3: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code.
2. Open the project folder in VS Code.
3. Right-click on `app.html` → Select "Open with Live Server".
4. Your browser will automatically open to `http://localhost:5500/app.html` (or similar).

## Test Cases

After opening `app.html` via HTTP server, run these tests:

### Running Automated Tests (Jest)

The project includes automated unit tests in `DOM/main.test.js` using Jest framework.

**Prerequisites:**

- Node.js and npm installed on your machine

**Steps to Run Tests:**

1. Navigate to the `DOM` folder:

```bash
cd /Users/loantruong/Documents/Intern/UniFAQ/DOM
```

2. Install dependencies (if not already installed):

```bash
npm install
```

3. Run the test suite:

```bash
npm test
```

4. To run tests in watch mode (re-run tests when files change):

```bash
npm test -- --watch
```

**Expected Output:**

- A summary showing the number of tests passed/failed
- Detailed results for each test in `main.test.js`
- All tests should pass (✓)

**Quick Start Command:**

```bash
cd /UniFAQ && python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser. Click the **"Launch Live Demo"** button to navigate to `app.html`.
