import React from 'react';
import ShipmentRow from './ShipmentRow.jsx';

// Renders every shipment into the DOM.
export default function StandardList({ shipments, onOpen }) {
  return (
    <div className="list" role="rowgroup">
      {shipments.map((shipment) => (
        <ShipmentRow key={shipment.id} shipment={shipment} onOpen={onOpen} />
      ))}
    </div>
  );
}
