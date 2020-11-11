import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

import '../components/about.scss';

import Pic from '../assets/images/about.png';
import ResumePic from '../assets/images/about-resume-pic.png';

const AboutPage = ({ data }) => {

    return (
        <Layout hideNav={false} seoData={data.wpPage.meta_data}>
            <main className="about-container">
                <div className="about-hero-container">
                    <div className="about-image-container">
                        <h2>About</h2>
                        <img src={Pic} alt="about portrait"/>
                    </div>

                    <div className="border-line"></div>
                </div>

                <div className="about-description" dangerouslySetInnerHTML={{__html: data.wpPage.pageBlocks.pageblocks[0].text}} />

                <div className="resume">
                    <img src={ResumePic} className="resume-pic"/>
                    <a className="resume-button" href={data.wpPage.pageBlocks.pageblocks[1].pictures[0].mediaItemUrl}>
                        <p>Resume</p>
                    </a>
                </div>

            </main>
        </Layout>
    )
}

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    wpPage(slug: {eq: "about-data"}) {
      meta_data {
        description
        title
        image {
          mediaItemUrl
        }
      }
      pageBlocks {
        pageblocks {
            ... on WpPage_Pageblocks_Pageblocks_TextEditor {
                text
                fieldGroupName
          }
            ... on WpPage_Pageblocks_Pageblocks_Pictures {
                pictures {
                    mediaItemUrl
                }
            }
        }
      }
    }
  }
`