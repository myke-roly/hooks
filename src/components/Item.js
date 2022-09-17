import React, { memo } from 'react';

const Item = ({ title, image, id, onRemove }) => {
  console.log('Item', id);
  return (
    <div
      style={{
        background: '#f4f4f4',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <img src={image} alt={title} width={50} height={50} />
      <h3>{title}</h3>
      <button onClick={() => onRemove(id)}>Remove {id}</button>
    </div>
  );
};

export default memo(Item);
