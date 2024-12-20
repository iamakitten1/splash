import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';


const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo/:id" element={<PhotoPage/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
