// DEPENDENCY IMPORTS
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const Index = () => {

    const indexPageData = useStaticQuery(graphql`
    query MenusQuery {
      allWpPost {
        nodes {
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
      }
    `)
    console.log(indexPageData)

    const renderHTML = (string) => {
      return {__html: string};
    }

  return (
    <Layout>
      <div>
        {indexPageData.allWpPost.nodes[0].pageBlocks.blocks.map((block, idx) => {
          if(block.fieldGroupName.includes('Image')) {
            return (
              <img src={block.image.mediaItemUrl} alt="" key={idx}/>
            )
          } else if(block.fieldGroupName.includes('TextEditor')) {
            return (
              <div dangerouslySetInnerHTML={renderHTML(block.text)} key={idx}></div>
            )
          }
        })}
      </div>
    </Layout>
  )
};

export default Index;


