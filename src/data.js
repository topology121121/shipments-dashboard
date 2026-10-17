// Synthetic shipment records for local development.
// Generated deterministically so every reload shows the same 2,000 rows.

const SHIPMENT_COUNT = 2000;

const CUSTOMERS = [
  'Adebayo Foods', 'Chinwe Pharmacy', 'Kano Textiles', 'Ibadan Hardware',
  'Eko Electronics', 'Owerri Agro', 'Jos Dairy Co.', 'Benin Furniture',
  'Abeokuta Prints', 'Calabar Seafoods', 'Ilorin Ceramics', 'Warri Marine Supply',
];
const CITIES = [
  'Lagos', 'Ibadan', 'Abuja', 'Kano', 'Port Harcourt', 'Enugu',
  'Benin City', 'Kaduna', 'Jos', 'Owerri', 'Calabar', 'Ilorin',
];
const CARRIERS = ['GIG Logistics', 'Red Star', 'Kwik', 'DHL Domestic', 'In-house fleet'];
const STATUSES = [
  { key: 'in_transit', label: 'In transit' },
  { key: 'delayed', label: 'Delayed' },
  { key: 'at_hub', label: 'At hub' },
  { key: 'out_for_delivery', label: 'Out for delivery' },
  { key: 'delivered', label: 'Delivered' },
];

// Small seeded PRNG (mulberry32) so data is stable across reloads.
function seeded(seed) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rand, list) {
  return list[Math.floor(rand() * list.length)];
}

export function generateShipments(count = SHIPMENT_COUNT) {
  const rand = seeded(20261017);
  const shipments = [];
  for (let i = 0; i < count; i++) {
    const origin = pick(rand, CITIES);
    let destination = pick(rand, CITIES);
    if (destination === origin) destination = CITIES[(CITIES.indexOf(origin) + 3) % CITIES.length];
    const status = pick(rand, STATUSES);
    const progress = status.key === 'delivered' ? 100 : Math.floor(10 + rand() * 85);
    const day = 1 + Math.floor(rand() * 28);
    shipments.push({
      id: `SHP-${String(24001 + i)}`,
      customer: pick(rand, CUSTOMERS),
      origin,
      destination,
      carrier: pick(rand, CARRIERS),
      status,
      progress,
      weightKg: Math.round((0.5 + rand() * 480) * 10) / 10,
      eta: `2026-11-${String(day).padStart(2, '0')}`,
    });
  }
  return shipments;
}
