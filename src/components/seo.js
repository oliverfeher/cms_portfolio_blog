import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import favicon from '../assets/images/about.png'

function SEO({ data }) {
  return (
    <Helmet title={data.title}>
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      { data.description ? <meta name="description" content={data.description} /> : null }
      { data.title ? <meta name="og:title" content={data.title} /> : null }
      { data.description ? <meta name="og:description" content={data.description} /> : null }
      <meta name="og:type" content="article" />
      { data.imageWidth ? <meta name="og:image:width" content={data.imageWidth} /> : null }
      { data.imageHeight ? <meta name="og:image:height" content={data.imageHeight} /> : null }
      { data.image.mediaItemUrl ? <meta name="og:image" content={data.image.mediaItemUrl} /> : null }
      { data.image.mediaItemUrl ? <meta name="twitter:image" content={data.image.mediaItemUrl} /> : null }
      { data.title ? <meta name="twitter:title" content={data.title} /> : null }
      { data.description ? <meta name="twitter:description" content={data.description} /> : null }
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO;
