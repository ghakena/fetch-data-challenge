import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  // state to cater for request type.
  const [reqType, setReqType] = useState('users');
  // state to cater for returned objects from API.
  const [items, setItems] = useState([]);

  useEffect(() => {

    // create function to fetch items inside useEffect and then call the function.
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err.message); 
      }
    }

    fetchItems();

  }, [reqType])

  return (
    <div className="App">
        <Form 
          reqType={reqType}
          setReqType={setReqType}
        />
        <List 
          items={items}
        />
    </div>
  );
}

export default App;