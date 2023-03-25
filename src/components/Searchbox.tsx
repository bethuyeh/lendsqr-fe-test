import React, { useState, useEffect } from 'react';

interface IData {
  id: number;
  name: string;
  description: string;
}

const API_URL = 'https://my-mock-api.com/data'; // Replace with your mock API URL

const SearchBox: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className='search-box'>
      <input type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
