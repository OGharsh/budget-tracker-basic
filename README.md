# Budget Buddy

Budget Buddy is a browser based budget tracker for recording income and expenses. It stores transactions in `localStorage` and uses Chart.js to show monthly income and expense totals.

## Features

- Add income and expense transactions
- Store transaction history in the browser
- Remove transactions
- Filter transactions by date
- View monthly income and expense charts
- Open the chart in a separate tab

## Tech stack

- HTML5
- CSS3
- JavaScript
- Chart.js

## Run locally

No installation is required.

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

You can also open `index.html` directly, although a local server is cleaner for browser testing.

## Deployment

Deploy this on GitHub Pages.

It is a static app with no backend, build command, or environment variables. Netlify and Vercel also work, but GitHub Pages is the most direct free option.



## Limitations

- Data is stored per browser and device
- No authentication or cloud sync
- Chart.js loads from a CDN, so charts need internet access
- No automated tests
