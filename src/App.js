import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Chart';
import Blog from './components/Blog/Blog';

function App() {
  const router= createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
          
        },
        {
          path: '/topic',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topic></Topic>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }   
    ]
    },
    {
      path: '*', element: <div>404 Not Found</div>
    }
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}
     ></RouterProvider>
    </div>
  );
}

export default App;
