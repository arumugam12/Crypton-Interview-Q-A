import React, { useEffect, useState } from 'react';
import WidgetOrderStats from './components/WidgetOrderStats';
import './styles/main.scss';

const App: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      {data ? <WidgetOrderStats data={data} /> : 'Loading...'}
    </div>
  );
};


export default App;