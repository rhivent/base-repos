import React from 'react';
import pathName from './pathName';
const {
  base
} = pathName;

const routes = [
  { path: base, component: React.lazy(() => import('../views/pages/')), exact : true },
];

export default routes;