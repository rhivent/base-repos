import React from 'react';
import pathName from './pathName';
const {
  base,pagetest
} = pathName;

const routes = [
  { path: base, component: React.lazy(() => import('../views/pages/')), exact : true },
  { path: pagetest, component: React.lazy(() => import('../views/pages/Page1')), exact : true },
];

export default routes;