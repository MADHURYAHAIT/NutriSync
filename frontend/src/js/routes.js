
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
// import LoginPg from '../components/Login.jsx';
import Description from '../pages/description.jsx';
import Team from '../pages/team.jsx';
import Contact from '../pages/contact.jsx';
import SignUp from '../components/SignUp.jsx';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/signup/',
    component: SignUp,
  },
  {
    path: '/home/',
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
          banner:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:"https://yt3.googleusercontent.com/RTGS8fej7PVFJjF0cnWKRzzyPQgC9KBYwQZspLZsI5ZlcJcwccxvx42KMHSh_S9mvQa5eZyKTQ=s900-c-k-c0x00ffffff-no-rj",
          email: 'abcdef124@gmail.com',
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
