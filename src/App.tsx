import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './css/App.css';
import Main from './pages/Main';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} />
      <Route path='/:city' element={<Main />} />
    </>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
