# Shipments list: product context

Background for anyone changing how the shipments list renders.

## Who uses it
The **dispatch team** (about 15 coordinators) keeps this page open all day on company laptops (2021–2024 MacBooks and some older Windows machines).

## How they use it
- They scroll through the list to spot **Delayed** shipments.
- When a customer calls, they press **Cmd+F / Ctrl+F** and type the shipment ID (for example `SHP-25817`) to find the row quickly. Dispatch leads say this is the most common action on the page.
- Two coordinators navigate mainly by **keyboard** (Tab to the **View** button, Enter to open details), and one uses a **screen reader** part-time.

## Data size
- **Today:** about 2,000 active shipments.
- **Forecast:** about 3,000 by the end of 2027. No plans beyond that.
- All active shipments are loaded at once (no server-side paging).

## Reported issue
Some coordinators on older Windows laptops say the page feels "a bit slow" when it first loads and when scrolling quickly. Nobody has measured it.
