import React from 'react';

export const ROW_HEIGHT = 56;

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

// One shipment row. Fixed height so both list implementations can use it.
export default function ShipmentRow({ shipment, style, onOpen }) {
  const { id, customer, origin, destination, carrier, status, progress, weightKg, eta } = shipment;
  return (
    <div className="row" style={style} role="row">
      <div className="cell id" role="cell">{id}</div>
      <div className="cell customer" role="cell">
        <span className="avatar" aria-hidden="true">{initials(customer)}</span>
        <span>{customer}</span>
      </div>
      <div className="cell route" role="cell">
        <span>{origin}</span>
        <span className="arrow" aria-hidden="true">→</span>
        <span>{destination}</span>
      </div>
      <div className="cell carrier" role="cell">{carrier}</div>
      <div className="cell status" role="cell">
        <span className={`badge badge-${status.key}`}>{status.label}</span>
      </div>
      <div className="cell progress" role="cell">
        <div className="bar" aria-label={`${progress}% complete`}>
          <div className="bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="pct">{progress}%</span>
      </div>
      <div className="cell weight" role="cell">{weightKg} kg</div>
      <div className="cell eta" role="cell">{eta}</div>
      <div className="cell action" role="cell">
        <button type="button" onClick={() => onOpen(shipment)}>View</button>
      </div>
    </div>
  );
}
