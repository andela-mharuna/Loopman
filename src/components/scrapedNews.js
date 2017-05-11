import React from 'react';
import Iframe from 'react-iframe';

const scrapedNewsUrl = this.props.location.search.slice(8);

const scrapedNews = () => (
  <div>
    <Iframe
      url={scrapedNewsUrl}
      width="100%"
      height="1050px"
      display="initial"
      position="relative"
      allowFullScreen
    />
  </div>
);

export default scrapedNews;
