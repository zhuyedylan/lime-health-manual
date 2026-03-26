import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ninghealth-manual/__docusaurus/debug',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug', 'df6'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/config',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/config', 'c0a'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/content',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/content', '226'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/globalData',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/globalData', '6a7'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/metadata',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/metadata', 'df6'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/registry',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/registry', '56c'),
    exact: true
  },
  {
    path: '/ninghealth-manual/__docusaurus/debug/routes',
    component: ComponentCreator('/ninghealth-manual/__docusaurus/debug/routes', '621'),
    exact: true
  },
  {
    path: '/ninghealth-manual/docs',
    component: ComponentCreator('/ninghealth-manual/docs', '5be'),
    routes: [
      {
        path: '/ninghealth-manual/docs',
        component: ComponentCreator('/ninghealth-manual/docs', '57f'),
        routes: [
          {
            path: '/ninghealth-manual/docs',
            component: ComponentCreator('/ninghealth-manual/docs', '938'),
            routes: [
              {
                path: '/ninghealth-manual/docs/ai-report',
                component: ComponentCreator('/ninghealth-manual/docs/ai-report', '671'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/challenge',
                component: ComponentCreator('/ninghealth-manual/docs/challenge', '0dc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/club',
                component: ComponentCreator('/ninghealth-manual/docs/club', '64b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/evaluation',
                component: ComponentCreator('/ninghealth-manual/docs/evaluation', '5e1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/exercise',
                component: ComponentCreator('/ninghealth-manual/docs/exercise', '923'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/habits',
                component: ComponentCreator('/ninghealth-manual/docs/habits', '56a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/intro',
                component: ComponentCreator('/ninghealth-manual/docs/intro', '0c9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/main-features',
                component: ComponentCreator('/ninghealth-manual/docs/main-features', '83a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/membership',
                component: ComponentCreator('/ninghealth-manual/docs/membership', '2fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/profile',
                component: ComponentCreator('/ninghealth-manual/docs/profile', '00a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/register',
                component: ComponentCreator('/ninghealth-manual/docs/register', 'bdf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/ninghealth-manual/docs/test',
                component: ComponentCreator('/ninghealth-manual/docs/test', '79e'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
