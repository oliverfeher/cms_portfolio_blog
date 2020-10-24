// DEPENDENCY IMPORTS
import React from 'react';

// STYELSHEET IMPORT
import '../assets/style.css';

const Layout = ({ children }) => {
  return (
    <>
      <div>header</div>
        {children}
      <div>footer</div>
    </>
  )
}


export default Layout;
