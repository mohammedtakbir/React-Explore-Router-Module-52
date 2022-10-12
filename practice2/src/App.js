import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Countries from './components/Countries';
import Home from './components/Home';
import Products from './components/Products';
import Main from './Layout/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main></Main>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route
            path='/countries'
            loader={async () => {
              return fetch(`https://restcountries.com/v2/all`)
            }}
            element={<Countries></Countries>}></Route>
          <Route path='/*' element={<h3>Not Found</h3>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
