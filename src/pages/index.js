// DEPENDENCY IMPORTS
import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';

// ASSET/COMPONENT IMPORTS
import { social } from '../utils/social';
import { menus } from '../utils/menus';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {

  const renderHTML = (string) => {
    return {__html: string};
  }

  const [ portraits ] = useState(data.wpPage.pageBlocks.pageblocks[0].pictures);
  const [ currentPortrait, setCurrentPortraits ] = useState(portraits[2].sourceUrl);

  useEffect(() => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      setInterval(() => setCurrentPortraits(portraits[Math.floor(Math.random() * Math.floor(3)) + 1].sourceUrl), 3000)
    }
  }, [portraits])

  // MENUITEM HOVERS
  const menuHover = (e) => {
    switch(e.target.innerText) {
      case "About":
        setCurrentPortraits(portraits[1].sourceUrl);
        break;
      case "Blog":
        setCurrentPortraits(portraits[0].sourceUrl);
        break;
      case "Contact":
        setCurrentPortraits(portraits[3].sourceUrl);
        break;
      default:
        setCurrentPortraits(portraits[2].sourceUrl);

    }
  }


  return (
    <Layout>
      <main>
        <div className="portrait-container">
          <img src={currentPortrait} alt="portrait headshot" />
        </div>

        <div className="intro-wysiwyg" dangerouslySetInnerHTML={renderHTML(data.wpPage.pageBlocks.pageblocks[1].text)} />

        <div className="menus-container">
          {menus.map((menu, idx) => {
            return (
              <Link className="menu-item" to={menu.url} key={idx} onMouseLeave={()=> setCurrentPortraits(portraits[2].sourceUrl)} onMouseEnter={menuHover}>{menu.label}</Link>
            )
          })}
        </div>

        <div className="social-icons">
          {social.map((icon, idx) => {
            return <a key={idx} rel="noreferrer" target="_blank" href={icon.url}><img src={icon.image} alt="social icon" /></a>
          })}
        </div>
      </main>
    </Layout>
  )
};

export default IndexPage;

// GRAPHQL QUERY

export const query = graphql`
  query IndexQuery {
    wpPage(slug: {eq: "index-data"}) {
      pageBlocks {
        pageblocks {
          ... on WpPage_Pageblocks_Pageblocks_TextEditor {
            text
            fieldGroupName
          }
          ... on WpPage_Pageblocks_Pageblocks_Pictures {
            fieldGroupName
            pictures {
              sourceUrl
            }
          }
        }
      }
    }
  }
`