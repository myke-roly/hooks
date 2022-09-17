import React, { memo } from 'react';
import Item from './Item';

const ListItems = ({ items, onRemove }) => {
  console.log('ListItems', items);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1em',
        justifyContent: 'center',
        marginTop: '2em',
        alignItems: 'center',
      }}
    >
      {items.map((item) => (
        <Item title={item.title} key={item.id} id={item.id} image={item.image} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default memo(ListItems);
