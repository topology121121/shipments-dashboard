import React, { useMemo, useState } from 'react';
import { generateShipments } from './data.js';
import StandardList from './StandardList.jsx';
import VirtualList from './VirtualList.jsx';
import ShipmentDetails from './ShipmentDetails.jsx';

// Temporary switch so both implementations can be compared before we pick one.
// ?view=virtual renders the virtualized list; anything else renders the standard list.
function getView() {
  const view = new URLSearchParams(window.location.search).get('view');
  return view === 'virtual' ? 'virtual' : 'standard';
}

export default function App() {
  const shipments = useMemo(() => generateShipments(), []);
  const [selected, setSelected] = useState(null);
  const view = getView();
  const List = view === 'virtual' ? VirtualList : StandardList;

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Shipments</h1>
          <p className="subtitle">Dispatch operations · {shipments.length.toLocaleString()} active shipments</p>
        </div>
        <nav className="view-switch" aria-label="List implementation">
          <a href="?view=standard" aria-current={view === 'standard' ? 'page' : undefined}>Standard</a>
          <a href="?view=virtual" aria-current={view === 'virtual' ? 'page' : undefined}>Virtualized</a>
        </nav>
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
        <div className={view === 'virtual' ? 'scroll-area is-virtual' : 'scroll-area'}>
          <List shipments={shipments} onOpen={setSelected} />
        </div>
      </div>

      {selected && <ShipmentDetails shipment={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
