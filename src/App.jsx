import React, { useMemo, useState } from 'react';
import { generateShipments } from './data.js';
import StandardList from './StandardList.jsx';
import ShipmentDetails from './ShipmentDetails.jsx';

export default function App() {
  const shipments = useMemo(() => generateShipments(), []);
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Shipments</h1>
          <p className="subtitle">Dispatch operations · {shipments.length.toLocaleString()} active shipments</p>
        </div>
      </header>

      <div className="table" role="table" aria-label="Active shipments" aria-rowcount={shipments.length}>
        <div className="row header" role="row">
          <div className="cell id" role="columnheader">Shipment</div>
          <div className="cell customer" role="columnheader">Customer</div>
          <div className="cell route" role="columnheader">Route</div>
          <div className="cell carrier" role="columnheader">Carrier</div>
          <div className="cell status" role="columnheader">Status</div>
          <div className="cell progress" role="columnheader">Progress</div>
          <div className="cell weight" role="columnheader">Weight</div>
          <div className="cell eta" role="columnheader">ETA</div>
          <div className="cell action" role="columnheader"><span className="sr-only">Actions</span></div>
        </div>
        <div className="scroll-area">
          <StandardList shipments={shipments} onOpen={setSelected} />
        </div>
      </div>

      {selected && <ShipmentDetails shipment={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
