import React from 'react';
import Footer from '../components/footer/Footer';
import content from "../data/content.json";
import { Outlet } from 'react-router-dom';
import MainNavBar from '../components/NavigationBar/MainNavBar';

const MainLayout = () => {
  return (
    <>
        <MainNavBar/>
        <Outlet/>
        <Footer footer={content.footer}/>
    </>
  );
};

export default MainLayout;