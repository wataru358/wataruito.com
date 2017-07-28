import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
//import Top from './components/Top';
import CellAutomataRotate from './components/art/CellAutomataRotate';

// @todo: construct childRoutes dynamically
// rather than hand coding
const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: CellAutomataRotate },
  childRoutes: [
    {
      path:'art/CellAutomataOrg',
      getComponent(location, cb) {
        System.import('./components/art/CellAutomataOrg')
          .then(module => cb(null, module.default));
      }
    },
    {
      path:'art/CellAutomataHeart',
      getComponent(location, cb) {
        System.import('./components/art/CellAutomataHeart')
          .then(module => cb(null, module.default));
      }
    },
    {
      path:'art/LinesPerspective',
      getComponent(location, cb) {
        System.import('./components/art/LinesPerspective')
          .then(module => cb(null, module.default));
      }
    },
    {
      path:'art/TextClip',
      getComponent(location, cb) {
        System.import('./components/art/TextClip')
          .then(module => cb(null, module.default));
      }
    },
    {
      path:'art/CellAutomataRev',
      getComponent(location, cb) {
        System.import('./components/art/CellAutomataRev')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
};

export default Routes;
