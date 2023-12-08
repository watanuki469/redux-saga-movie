import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import genresApi from 'api/genresApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminLayout, MovieLayout, NotFound } from 'components/layout';
import { useDispatch } from 'react-redux';
import { genreActions } from 'features/genre/genreSlice';

function App() {
 
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/movie" element={<MovieLayout />} /> */}
        <Route path="/" element={<AdminLayout />} />
        <Route path="/movie/byGen/:genre" element={<MovieLayout/>}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </div>
  );
}

export default App;
