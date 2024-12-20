import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import ImageDetailPage from './pages/ImageDetailPage';



const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
      <Route path="/photo/:id" element={< ImageDetailPage/>} />
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/photo" element={<div>Photo Page</div>} />
        {/* <Link to={`/photo/${photoId}`}>View Photo</Link> */}

      </Routes>
    </Router>
  );
};

export default App;


