// DEPENDENCY IMPORTS
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import renderHelper from '../utils/renderHelper';

const IndexPage = () => {

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

  return (
    <Layout>
      <main>
      </main>
    </Layout>
  )
};

export default IndexPage;


