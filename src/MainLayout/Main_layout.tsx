import React from 'react';
// Fixed typo in "Component"
import { Outlet } from 'react-router-dom';
import Navbar from '../Comeponent/Navbar';
import Footer from '../Comeponent/Footer';
 // Fixed typo in "Component"

const Main_layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main_layout;
