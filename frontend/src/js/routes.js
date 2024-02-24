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
import TermsAndConditions from '../pages/TnC.jsx';



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
    path:'/tnc/',
    component: TermsAndConditions,
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

        // const handleProfSubmit = async (e) => {
        //   e.preventDefault();
      
        //   try {
            
        //     const response = await fetch('http://192.168.133.239:8000/userdtls', {
        //       method: 'POST',
        //       headers : { 
        //           'Content-Type': 'application/json',
            
        //          },

        //       body: new URLSearchParams({}),
        //     });
      
        //     if (response.ok) {
        //       const data = await response.json();
        //       console.log("data -",data);
             
        //       f7.dialog.alert('Data is semexy !', () => {
        //       f7.loginScreen.close();});
        //       // Assuming your backend sends a response with a message
        //       // Handle the success, show an alert or redirect to a different page
        //     } else {
        //       const errorData = await response.json();
        //       setMsg(errorData.error); 
        //       f7.dialog.alert('User fetch Error !', () => {
        //       f7.loginScreen.close();});// Assuming your backend sends an error message
        //       // Handle the error, show an alert or provide feedback to the user
        //     }
        //   } catch (error) {
        //     console.error('Error during signup:', error.message);
        //     f7.dialog.alert('User Fetch 505 !', () => {
        //       f7.loginScreen.close();});
        //   }
        // };





        // We got user data from request
        var user = {
          firstName: localStorage.getItem('fname'),
          dob: localStorage.getItem('dob'),
          lastName: localStorage.getItem('lname'),
          weight: '65kg',
          height: '5.9ft',
          age: localStorage.getItem('age'),
          mob: localStorage.getItem('phone'),
          banner:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          img:"https://yt3.googleusercontent.com/RTGS8fej7PVFJjF0cnWKRzzyPQgC9KBYwQZspLZsI5ZlcJcwccxvx42KMHSh_S9mvQa5eZyKTQ=s900-c-k-c0x00ffffff-no-rj",
          email: localStorage.getItem('email'),
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
