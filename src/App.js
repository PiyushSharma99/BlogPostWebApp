import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';





// blogapp\src\components\Header\Header.js
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout />,
    children: [

      {path:'/', element:<Home/>},
      
      {path:'/blog-details/:id', element:<BlogDetails/>},
      {path:'/add-blog', element:<AddBlog />},
      {path:'/edit-blog/:id', element:<EditBlog/>},
      


    ]
  }
]);
function App() {
  return (  
    <>
      <RouterProvider router={router} />
    </>  
         
  );
}

export default App;
