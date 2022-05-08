import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { RandomQuotes } from './views/RandomQuotes/RandomQoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <RandomQuotes />
      </div>
    </QueryClientProvider>
  );
}

export default App;
