import React from 'react';
import './App.css';
import Header from './components/header';
import Login from './components/login';
import Footer from './components/footer';
// import Banner from './components/banner';
import Department from './components/department';
import Trending from './components/trending';
import SpecialOffer from './components/specialOffer/specialOffer';
import Budget from './components/budget';
import BestSellers from './components/bestSellers';
import Blog from './components/blog';
import NeoFurniture from './components/neoFurniture';

function App() {
  const userInfo = sessionStorage.getItem('loggedin', 'true');
  return (
    <>
      <Header/>
      <Login/>
      {userInfo ? <>
        {/* <Banner/> */}
        <Department/>
        <Trending/>
        <SpecialOffer/>
        <Budget/>
        <BestSellers/>
        <Blog/>
        <NeoFurniture/>
      </> : null}
      <Footer/>
    </>
  );
}

export default App;
