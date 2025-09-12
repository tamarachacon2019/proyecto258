import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Prenda = ({ id, src, x, y, moverPrenda }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'PRENDA',
    item: { id, x, y },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, drop] = useDrop({
    accept: 'PRENDA',
    drop: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      const newX = Math.max(0, item.x + offset.x);
      const newY = Math.max(0, item.y + offset.y);
      moverPrenda(item.id, newX, newY);
    }
  });

  return (
    <img
      ref={node => drag(drop(node))}
      src={src}
      alt=""
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 120,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
        zIndex: 2
      }}
    />
  );
};

export default Prenda;
