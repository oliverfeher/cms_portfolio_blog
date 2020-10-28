import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

function SEO({ data }) {
  return (
    <Helmet title={data.title}>
      { data.description ? <meta name="description" content={data.description} /> : null }
      { data.title ? <meta name="og:title" content={data.title} /> : null }
      { data.description ? <meta name="og:description" content={data.description} /> : null }
      <meta name="og:type" content="article" />
      { data.imageWidth ? <meta name="og:image:width" content={data.imageWidth} /> : null }
      { data.imageHeight ? <meta name="og:image:height" content={data.imageHeight} /> : null }
      { data.image.sourceUrl ? <meta name="og:image" content={data.image.sourceUrl} /> : null }
      { data.image.sourceUrl ? <meta name="twitter:image" content={data.image.sourceUrl} /> : null }
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
