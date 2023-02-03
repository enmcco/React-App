import './App.css';
import { Lists, MyNav, Home } from './components';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [tableContents, setTableContents] = useState([
    { id: 1, itemName: 'Item 1', quantity: 4 },
    { id: 2, itemName: 'Item 2', quantity: 3 },
    { id: 3, itemName: 'Item 3', quantity: 2 },
  ]);

  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home tableContents={tableContents} />} />
          <Route
            path="/lists"
            element={
              <Lists
                tableContents={tableContents}
                setTable={setTableContents}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
