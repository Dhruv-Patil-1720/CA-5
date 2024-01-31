import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Form from './Components/Form';

const App = () => {
  return (
    <div className='bg-image' >
  {/* routing the necessay elements */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
