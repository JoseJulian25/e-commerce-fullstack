import React from 'react';
import Navigation from '../components/NavigationBar/Navigation';
import Footer from '../components/footer/Footer';
import content from "../data/content.json";
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navigation/>
        <Outlet/>
        <Footer footer={content.footer}/>
    </>
  );
};

export default MainLayout;