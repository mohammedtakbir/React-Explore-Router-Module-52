import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Countries from './components/Countries/Countries';
import SingleCountry from './components/SingleCountry/SingleCountry';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {index: true, element: <Home />},
      {path: '/home', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/products', element: <Products />},
      {path: '/countries',
      loader: async() => {
        return fetch(`https://restcountries.com/v2/all`)
      },
      element: <Countries />},
      {path: '/country/:countryName',
      loader: async({params}) => {
        return fetch(`https://restcountries.com/v3.1/name/${params.countryName}`);
      },
      element: <SingleCountry />},
      {path: '*', element: <h1>Page not found</h1>}
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
