import React, { useEffect, useRef, useState } from 'react';
import { FixedSizeList } from 'react-window';
import ShipmentRow, { ROW_HEIGHT } from './ShipmentRow.jsx';

// react-window needs an explicit pixel height, so measure the container.
function useElementHeight() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(Math.floor(entry.contentRect.height));
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, height];
}

// Only the rows in (or near) the viewport are rendered.
export default function VirtualList({ shipments, onOpen }) {
  const [containerRef, height] = useElementHeight();

  const Row = ({ index, style }) => (
    <ShipmentRow shipment={shipments[index]} style={style} onOpen={onOpen} />
  );

  return (
    <div ref={containerRef} className="virtual-container">
      {height > 0 && (
        <FixedSizeList
          height={height}
          itemCount={shipments.length}
          itemSize={ROW_HEIGHT}
          overscanCount={8}
          width="100%"
        >
          {Row}
        </FixedSizeList>
      )}
    </div>
  );
}
