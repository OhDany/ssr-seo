import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="ui container" style={{marginTop: '200px', textAlign: 'center'}}>
      <h1 className="ui header huge">404</h1>
      <h1 className="ui header huge blue">Ooops, not fount page</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};