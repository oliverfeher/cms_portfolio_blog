// DEPENDENCY IMPORTS
import React from 'react';

//  COMPONENT IMPORTS
import Footer from './Footer';
// STYELSHEET IMPORT
import '../assets/style.css';

const Layout = ({ children }) => {
  return (
    <>
        {children}
      <Footer />
    </>
  )
}


export default Layout;
