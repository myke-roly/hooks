import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems';
import { useCallback, useMemo, useState } from 'react';
import Counter from './components/Counter';

const FAKE_DATA = [
  {
    id: 1,
    title: 'Test',
    image: logo,
  },
  {
    id: 2,
    title: 'Test 2',
    image: logo,
  },
];

function App() {
  const [items, setItems] = useState(FAKE_DATA);
  const [value, setValue] = useState('');
  
  const searchItems = useMemo(() => items.filter((item) => item.title.includes(value)), [value, items]);

  const handleRemoveItem = useCallback((id) => {
    setItems((prev) => prev.filter((v) => v.id !== id));
  }, []);
  
  const handleRemoveListItem = useCallback(() => {
    setItems((prev) => [...prev.slice(1)]);
    setValue('');
  }, []);

  const randomValue = (Math.random() * 100).toFixed(2);

  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main style={{ padding: '2rem' }}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <Counter count={searchItems.length} />
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
          {!!searchItems.length ? <ListItems items={searchItems} onRemove={handleRemoveItem} /> : <p>not content!</p>}
        </div>
        <button onClick={handleRemoveListItem}>remove</button>
        <button
          onClick={() => {
            setItems((prev) => [...prev, { id: randomValue, title: randomValue, image: logo }]);
            setValue('');
          }}
        >
          add
        </button>
      </main>
    </div>
  );
}

export default App;
