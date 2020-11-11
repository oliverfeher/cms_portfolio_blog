// DEPENDENCY IMPORTS
import React from 'react';

//  COMPONENT IMPORTS
import Footer from './Footer';
import Header from './Header';
import Seo from "./seo"
// STYELSHEET IMPORT
import '../assets/style.scss';

const Layout = ({ children, hideNav, seoData }) => {

  const layoutStyle = {
    width: '100%',
  }
  return (
    <> 
      {seoData ? <Seo data={seoData}/> : null}
      <main className="main-content-extension" style={layoutStyle}>
        {hideNav ? null : <Header/>}
          {children}
        <Footer />
      </main>
    </>
  )
}


export default Layout;
