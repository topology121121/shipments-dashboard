import React from 'react';

export default function ShipmentDetails({ shipment, onClose }) {
  return (
    <aside className="details" aria-label={`Shipment ${shipment.id}`}>
      <div className="details-head">
        <h2>{shipment.id}</h2>
        <button type="button" onClick={onClose} aria-label="Close details">✕</button>
      </div>
      <dl>
        <dt>Customer</dt><dd>{shipment.customer}</dd>
        <dt>Route</dt><dd>{shipment.origin} → {shipment.destination}</dd>
        <dt>Carrier</dt><dd>{shipment.carrier}</dd>
        <dt>Status</dt><dd>{shipment.status.label}</dd>
        <dt>Progress</dt><dd>{shipment.progress}%</dd>
        <dt>Weight</dt><dd>{shipment.weightKg} kg</dd>
        <dt>ETA</dt><dd>{shipment.eta}</dd>
      </dl>
    </aside>
  );
}
