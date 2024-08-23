import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const { isLoading, errorData, apiData } = useFetch('https://jsonplaceholder.typicode.com/photos');

  return (
    <>
      {isLoading && <h2 style={{ color: "white" }}>Loading...</h2>}
      {!isLoading && errorData ? (
        <h2 style={{ color: "white" }}>Error in fetching data</h2>
      ) : (
        <div className='image-list'>
            {apiData && apiData.map((item)=>(
              <div key={item.id} className='image-items'>
                <img src={item.url} alt={item.title} className='image' />
                <p>{item.title}</p>
              </div>
            ))}
        </div>
        
      )}
    </>
  );
}

export default App;
