
import HomePage from '../pages/home.jsx';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';
import CatalogPage from '../pages/catalog.jsx';
import ProductPage from '../pages/product.jsx';
import SettingsPage from '../pages/settings.jsx';
import Camera from '../pages/Camera.jsx';
import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';
import HistoryPage from '../pages/history.jsx';

import Description from '../pages/description.jsx';
import Team from '../pages/team.jsx';
import Contact from '../pages/contact.jsx';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path:'/contact/',
    component: Contact,
  },
  {
    path:'/team/',
    component: Team,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/camera/',
    component: Camera,
  },
  {
    path: '/history/',
    component: HistoryPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/description/',
    component: Description,
  },
  {
   path: '/team/',
   component: Team,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Madhurya',
          lastName: 'Hait',
          weight: '61kg',
          height: '5.5ft',
          age: '22',
          img:"https://source.unsplash.com/7Sz71zuuW4k",
          about: 'Hello This is My about section and I am the creator of this site! Hope you like it ',
          links: [
            {
              title: 'Abc',
              url: '#',
            },
            
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
