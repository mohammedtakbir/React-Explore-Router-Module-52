import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    //* jokhn main raute asbo tokhn Main namer component ke dekhabo.
    //* Main component e jodi kisu na likhi taile Home component ke dekhano hobe
    //* jodi Home likhi taile Home Compopnent ke dekhabe
    //* jodi Products likhi taile Products component ke dekhabe 
    {path: '/', element: 
      <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/products', element: <Products></Products>},
      {path: '/friends',
      //? for data loading
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      element: <Friends></Friends>},
      {
        //? : colon deower karone jei value deya hobe sei value kei friendId hisebe dhorbe
        //? : colon na dile hard coded text hisebe nibe
        //? : colon dile dynamic hobe
        path: '/friend/:friendId',
        loader: async({params}) => {
          // console.log(params.friendId)
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
        },
        element: <FriendDetails></FriendDetails>
      },
      {
        path: '/posts',
        loader: async() => {
          return fetch(`https://jsonplaceholder.typicode.com/posts`)
        },
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: async({params}) => {
          // const id = parseInt(params.postId);
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element: <PostDetails></PostDetails>
      }
    ]},
    //* r jodi shudumatro about likhi taile about comoponent ke dekhabe 
    {path: '/about', element: <About></About>},

    //? sobar seser route hote hobe
    {path: '*', element: <div>Not Found</div>}
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
