// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import MainPage from './Combine';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/datagrid" element={<MainPage />} />
    </Routes>
  </Router>
  );
};

export default App;
