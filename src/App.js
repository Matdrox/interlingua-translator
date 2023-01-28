import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className='flex justify-center px-14 py-5'>
      <div className='flex-col justify-center w-screen'>
        <h1 className='text-3xl text-center'>
          English to Interlingua Translator
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className='flex w-full'>
            <textarea
              className='w-1/2 h-60 text-xl p-2 resize-none border-2 bg-orange-50 border-slate-600 rounded-md'
              value={message}
              placeholder='Write in English'
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className='w-1/2 h-60 text-xl p-2 bg-purple-50 border-2 border-slate-600 rounded-md'>
              {response}
            </div>
          </div>
          <br/>
          <div className='w-full text-xl flex justify-center'>
            <button
              className='bg-purple-500 p-4 text-white rounded-lg'
              type='submit'
            >
              Translate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
