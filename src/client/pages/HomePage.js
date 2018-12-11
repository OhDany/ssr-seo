import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className="ui container">
      <Helmet>
          <title>el mexicano | Gran diario regional</title>
          <meta property="og:title" content="Oh Dany" />
        </Helmet>
      <h2 className="ui icon center aligned header">
        <i aria-hidden="true" className="users circular icon" />
        <div className="content">Server Side Renderer SSR</div>
      </h2>
      <img src='https://cdn.vox-cdn.com/thumbor/wh2AKZa3minPgXTXx0JhLecXhV8=/0x0:3435x2290/1200x800/filters:focal(1576x661:2124x1209)/cdn.vox-cdn.com/uploads/chorus_image/image/61134183/usa_today_10458932.0.jpg' className='ui image' />
    </div>
  );
};

export default {
    component: Home
}