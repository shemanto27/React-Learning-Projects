
import Header from './components/Layout/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Github from './components/Pages/Github';
import User from './components/Pages/User';
function App() {

  const router = createBrowserRouter(
    [
      {path:'/',
      element: <Layout/>,
      children:[
        {path: '',
        element: <Home/>,
        },
        {path: 'about',
        element: <About/>,
        },
        {path: 'contact',
          element: <Contact/>,
        },
        {path: 'github',
        element: <Github/>,
        },
        {path: 'user',
        element: <User/>,
        },
      ]
      }
    ]
  );


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
