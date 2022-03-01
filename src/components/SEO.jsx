import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export function SEO({ title, description }) {
  const site = {
    siteMetadata: {
      title: `Devser`,
      description: `Devser's website and playground`,
      author: `@9flysX`,
      siteUrl: 'https://console-devser.firebaseapp.com',
    },
  };

  // const title = title ? `${title} | Devser` : site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content:
            'https://user-images.githubusercontent.com/49732464/100659192-54a6e480-3361-11eb-9e04-0e19b6d921c6.png',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image`,
          content:
            'https://user-images.githubusercontent.com/49732464/100659192-54a6e480-3361-11eb-9e04-0e19b6d921c6.png',
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
