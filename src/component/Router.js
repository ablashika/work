import React from 'react'
import { Routes, Route } from 'react-router-dom';
import VideoTestimonial from './videoTestimonial/VideoTestimonial';




export default function Routers() {
  return (
    
        <Routes>
    <Route path="/video" element={<VideoTestimonial/>} />
  </Routes>
   
  )
}
