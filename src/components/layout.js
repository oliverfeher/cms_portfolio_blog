// DEPENDENCY IMPORTS
import React from 'react';

//  COMPONENT IMPORTS
import Footer from './Footer';
import Header from './Header';
// STYELSHEET IMPORT
import '../assets/style.scss';

const Layout = ({ children, hideNav }) => {

  const layoutStyle = {
    width: '100%',
  }
console.log(hideNav);
  return (
    <main className="main-content-extension" style={layoutStyle}>
      {hideNav ? null : <Header/>}
        {children}
      <Footer />
    </main>
  )
}


export default Layout;
