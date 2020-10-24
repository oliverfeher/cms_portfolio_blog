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
    
    const indexPageData = useStaticQuery(graphql`
    query MenusQuery {
      wpPost(slug: {eq: "this-is-my-first-post"}) {
        pageBlocks {
          blocks {
            ... on WpPost_Pageblocks_Blocks_Title {
              fieldGroupName
              title
            }
            ... on WpPost_Pageblocks_Blocks_TextEditor {
              fieldGroupName
              text
            }
            ... on WpPost_Pageblocks_Blocks_Image {
              fieldGroupName
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);
  
  const normalizedArray = transformArray(indexPageData.wpPost.pageBlocks.blocks);

  return (
    <Layout>
      <div>
        {normalizedArray.map((block, idx) => renderHelper(block, idx))}
      </div>
    </Layout>
  )
};

export default IndexPage;


