import React, { useEffect } from 'react'
import Layout from '../components/layout';
import { navigate } from '@reach/router';

import { graphql } from 'gatsby';

export default ({ data }) => {
    
    useEffect(() => {
       setTimeout(() => navigate('/'), 3000)
    }, [])

    const renderHTML = (string) => {
        return {__html: string};
      }

    return (
        <Layout>
            <main>
                <div className="portrait-container">
                    <img src={data.wpPage.pageBlocks.pageblocks[1].pictures[0].sourceUrl} alt="portrait headshot" />
                </div>

                <div className="intro-wysiwyg" dangerouslySetInnerHTML={renderHTML(data.wpPage.pageBlocks.pageblocks[0].text)} />
            </main>
        </Layout>
    )
}

export const query = graphql`
  query fourOfourQuery {
    wpPage(slug: {eq: "404-data"}) {
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