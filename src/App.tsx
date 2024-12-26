import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
