import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PhotoPage from './pages/PhotoPage';
// import ImageDetailPage from './pages/ImageDetailPage';


const queryClient = new QueryClient();

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
        {/* <Link to={`/photo/${photoId}`}>View Photo</Link> */}

        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App; 