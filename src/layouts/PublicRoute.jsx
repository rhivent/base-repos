import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import PageNotFound from '../views/pages/PageNotFound';

const PublicRoute = ({ restricted, ...rest}) => {
    // restricted = false meaning public route
    // restricted = true meaning restricted route
  return (<>
    {routes.map((route,idx) => {
      return (
      <Route 
        key={idx}
        path={route.path}
        exact={route.exact}
        name={route.name} 
        render={props => (
          <route.component {...props} /> 
        )} 
      />)
    })
    }
  <Route render={() => <PageNotFound />} />
  </>);
};

export default PublicRoute;