# Dispatch Shipments Dashboard

Internal dashboard listing all active shipments for the dispatch team. All data is synthetic.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev     # http://localhost:5173
```

## Structure

| File | Purpose |
|---|---|
| `src/App.jsx` | Page layout, header, details panel |
| `src/StandardList.jsx` | Renders every shipment row |
| `src/VirtualList.jsx` | Renders only visible rows (react-window) |
| `src/ShipmentRow.jsx` | One fixed-height (56px) row |
| `src/data.js` | Generates 2,000 synthetic shipments |
| `docs/CONTEXT.md` | Who uses the page and how |
