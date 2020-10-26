// DEPENDENCY IMPORTS
import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import renderHelper from '../utils/renderHelper';

const IndexPage = ({ data }) => {

  const [ portraits, setPortraits ] = useState(data.wpPage.pageBlocks.pageblocks[0].pictures)
  const transformArray = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].fieldGroupName) {
            array[i].fieldGroupName = array[i].fieldGroupName.replace('post_Pageblocks_Blocks_', '');
        }
      }
      return array;
    }
    
  //   const indexPageData = useStaticQuery(graphql`
    
  // `)
  
  // const normalizedArray = transformArray(indexPageData.wpPost.pageBlocks.blocks);
  // {normalizedArray.map((block, idx) => renderHelper(block, idx))}

  console.log(data.wpPage.pageBlocks);
  console.log(portraits);

  return (
    <Layout>
      <main>
        <div className="portrait-container">
          <img src={portraits[2].sourceUrl} alt="portrait headshot" />
        </div>
      </main>
    </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
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