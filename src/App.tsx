import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'></div>
    </QueryClientProvider>
  );
}

export default App;
